import React, { Component } from "react";
import ReactDOM from 'react-dom'
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button"
import Paper from "../../components/Paper"
import { Input, } from "../../components/InputField";
import "./buildQuestionnaire.css";
import EmailInput from "../../build.components/Email-input";
import NameInput from "../../build.components/Name-input";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import StreetAddressInput from "../../build.components/Address-input/components/streetAddress";
import CityInput from "../../build.components/Address-input/components/city";
import StateInput from "../../build.components/Address-input/components/state";
import ZipInput from "../../build.components/Address-input/components/zip";
import Jumbotron from "../../components/Jumbotron";

class BuildQuestionnaire extends Component {

  state = {
    templates: [],
    templateName: "",
    template: [],
    delete: "none",
    paper: "none",
    save: "none",
    name: "Build Questionnaire"
  }
  componentDidMount() {
    this.loadData();
  }
  loadData= () => {
    API.getTemplates()
      .then(res =>
        this.setState({templates:res.data})
      )
      .catch(err => console.log(err));
  };
  
  Button = (name) => {
    let newTemplate = this.state.template.slice();
    newTemplate.push(name)

    this.setState({template: newTemplate})
  } 

  multiInput = (name) => {
    let newTemplate = this.state.template.slice();
    for(let i = 0; i < name.length; i++){
      newTemplate.push(name[i])
    }
    this.setState({template: newTemplate})
  }

    handleInputChange = event => {
      const { value } = event.target;
      this.setState({value});
    };
    handleChange = (userOption) => {
      this.setState({ userOption: userOption, value: "",paper: "block", save: "inline-block", delete: "inline-block"}, () => {this.getForm()})
    }
    updateTemplate = (id) => {
      API.updateTemplate(id, {
        templateName: this.state.value,
        template: this.state.template
      })
      .then(res => this.loadData())
      .catch(err => console.log(err));
    }
    deleteTemplate = (id) => {
      API.deleteTemplate(id)
      .then(res => this.reset(), this.loadData())
      .catch(err => console.log(err));
    }
    getForm = () => {
      for(let i = 0; i < this.state.templates.length; i++){
      let templateName = this.state.templates[i].templateName.includes(this.state.userOption.value)
      if(templateName) {
        this.setState({template: this.state.templates[i].template , templateName: this.state.templates[i].templateName, _id: this.state.templates[i]._id, value: this.state.templates[i].templateName})
        console.log(this.state)
      }
      }
    }
    getId = () => {
      for(let i = 0; i < this.state.templates.length; i++){
        let id = this.state.templates[i].templateName.includes(this.state.templateName)
        if(id) {
          this.setState({template: this.state.templates[i].template , templateName: this.state.templates[i].templateName, _id: this.state.templates[i]._id, value: this.state.templates[i].templateName})
          console.log(this.state)
        }
        }
    }
    createComponent = (componentName,props) => {
      const  components = {
        "EmailInput" : EmailInput,
        "NameInput" : NameInput,

        "StreetAddressInput" : StreetAddressInput,
        "CityInput" : CityInput,
        "StateInput" : StateInput,
        "ZipInput" : ZipInput,

        "Row" : Row
      }
      const component = React.createElement(components[componentName], props);
      return component;
    }
    newTemplate = () => {
      console.log("hello")
      this.setState({
        templateName: "",
        template: [],
        _id: "",
        userOption: "",
        delete: "none",
        paper: "block",
        save: "inline-block"
      })
    }
    reset = () => {

      this.setState({
        templateName: "",
        template: [],
        _id: "",
        userOption: "",
        delete: "none",
        value: "none",
        paper: "none",
        save: "none",
        
      })
    }
    handleFormSubmit = event => {
      // When the form is submitted, prevent its default behavior, get recipes update the recipes state
      event.preventDefault();
      console.log(this.state._id)
      if(!this.state._id){
      if(this.state.value === ""){
        alert("Template Title is requried!")
      } else {
      API.saveTemplate({
      templateName: this.state.value,
      template: this.state.template
      })
        .then(res => alert("Template saved!")
        ,this.loadData()
        ,this.getId()
        ,this.setState({delete:"inline-block" }))
        .catch(err => console.log(err));
      }
    } else {
      this.updateTemplate(this.state._id)
    }
    };

  render() {
    const { userOption } = this.state;
    const userValue = userOption && userOption.value;
  return(
  <div>
  <Jumbotron name = {this.state.name} children = {this.state.name} />
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Button id="pageButton" onClick = {() => this.Button({component: "EmailInput" ,props: {key: 1, value: ""},fill: "email"})} children = "Email Input" className = "btn"/>
        <Button id="pageButton" onClick = {() => this.Button({component: "NameInput" ,props: {key:2, value: ""},fill: "firstName"})} children = "Name Input" className = "btn"/>

        {/* Multi Input Buttons */}
        <Button id="pageButton" onClick = {() => this.multiInput([
           {component: "StreetAddressInput", props: {key: 1, value: ""},fill: "email"},
           {component: "CityInput", props: {key:2, value: ""},fill: "firstName"},
           {component: "StateInput", props: {key:2, value: ""},fill: "firstName"},
           {component: "ZipInput", props: {key:2, value: ""},fill: "firstName"}

            ])} children = "Super Input" className = "btn"/>


        <center><Input
                value={this.state.value}
                onChange={this.handleInputChange}
                name="templateName"
                placeholder="Title (required)"
              /></center>
        <Button onClick = {this.newTemplate} children = "New" className = "btn" id="pageButton"/>
        <Select
        name="form-field-name2"
        value={userValue}
        onChange={this.handleChange}
        options= {this.state.templates.map(template => (
          { value: template.templateName, label: template.templateName } 
      ))}
      />
        <Button onClick = {this.handleFormSubmit} children = "Save Changes" display = {this.state.save} className = "btn" id="pageButton"/>
        <Button onClick = {() => this.deleteTemplate(this.state._id)} display = {this.state.delete} children = "Delete Template" className = "btn" id="deleteButton"/>
        <Paper
        display = {this.state.paper}
        title = {this.state.value}
        children = {this.state.template.map(template => (
          this.createComponent(template.component,template.props)
        ))}
      />
        
      </Col>
    </Row>
  </Container>
  </div>
)}
}
export default BuildQuestionnaire;
