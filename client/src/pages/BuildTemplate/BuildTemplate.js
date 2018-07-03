import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button"
import Paper from "../../components/Paper"
import { Input, } from "../../components/InputField";
import "./buildTemplate.css";
import EmailInput from "../../build.components/Email-input";
import NameInput from "../../build.components/Name-input";
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class BuildTemplate extends Component {

  state = {
    templates: [],
    templateName: "",
    template: [],
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
  singleInput = (name) => {
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
  createComponent = (componentName,props) => {
    const  components = {
      "EmailInput" : EmailInput,
      "NameInput" : NameInput,
    }
    const component = React.createElement(components[componentName], props);
    return component;
  }

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    handleChange = (userOption) => {
      this.setState({userOption})
      for(let i = 0; i < this.state.templates.length; i++){
        let match = this.state.templates[i].templateName.includes(userOption.value)
        let id = this.state.templates[i]._id
        if(match) {
          this.props.history.push(`/buildTemplate/${id}`)
        }
        }
    }
    keyMaker = () => {
      const key = this.state.template.length
      return key;
    }
    handleFormSubmit = event => {
      // When the form is submitted, prevent its default behavior, get recipes update the recipes state
      event.preventDefault();
      if(this.state.templateName === ""){
        alert("Template Title is requried!")
      } else {
      console.log(this.state.template)
      API.saveTemplate({
      templateName: this.state.templateName,
      template: this.state.template
      })
        // .then(res => this.props.history.push(`/buildTemplate/${res.data._id}`))
        .catch(err => console.log(err));
      }
      
    };

  render() {
    const { userOption } = this.state;
    const userValue = userOption && userOption.value;
  return(
  <Container fluid>
    <Row>
      <Col size="md-12">
        <h1>Templates</h1>
        <Button id="pageButton" onClick = {() => this.singleInput({component: "EmailInput" ,props: {key: this.keyMaker(), value: "",name: "email"}})} children = "Email Input" className = "btn"/>
        <Button id="pageButton" onClick = {() => this.singleInput({component: "NameInput" ,props: {key:this.keyMaker(), value: "",name: "firstName"}})} children = "Name Input" className = "btn"/>

        <Input
                width="35%"
                onChange={this.handleInputChange}
                name="templateName"
                placeholder="Title (required)"
              />
              
              <Select
        name="form-field-name2"
        value={userValue}
        onChange={this.handleChange}
        options= {this.state.templates.map(template => (
          { value: template.templateName, label: template.templateName } 
      ))}
      />
        <Button onClick = {this.handleFormSubmit} children = "Save Changes" className = "btn" id="pageButton"/>
        <Paper
        display = {this.state.paper}
        title = {this.state.templateName}
        children = {this.state.template.map(template => (
          this.createComponent(template.component,template.props)
        ))}
      />
        
      </Col>
    </Row>
  </Container>
)}
}
export default BuildTemplate;
