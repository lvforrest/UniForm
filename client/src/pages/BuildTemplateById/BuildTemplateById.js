import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button"
import Paper from "../../components/Paper"
import { Input, } from "../../components/InputField";
import "./buildTemplateById.css";
import EmailInput from "../../build.components/Email-input";
import NameInput from "../../build.components/Name-input";
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class BuildTemplateById extends Component {

  state = {
    templates: [],
    templateName: "",
    template: [],
    _id: "",
    url: "",
  }
  componentDidMount() {
    
    this.loadData();
  }
  loadData= () => {
  console.log(this.props.match.params.id)
  API.getTemplate(this.props.match.params.id)
  .then(res => this.setState({ template: res.data.template, templateName: res.data.templateName, _id: res.data._id, userOption: res.data.templateName }))
    .catch(err => console.log(err));

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
    console.log(this.state);
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
      let url = `/buildTemplate/${userOption.value}`
      this.props.history.push(url)
      
    }
    
    log = () => {
      this.loadData()
    }
    
    deleteTemplate = (id) => {
      API.deleteTemplate(id)
      .then(res =>  this.props.history.push("/buildTemplate"))
      .catch(err => console.log(err));
    }
    updateTemplate = (id) => {
      API.updateTemplate(id, {
        templateName: this.state.templateName,
        template: this.state.template
      })
      .then(res => this.loadData())
      .catch(err => console.log(err));
    }
    newTemplate = () => {
     this.props.history.push("/buildTemplate")
    }
  render() {
    const { userOption } = this.state;
    const userValue = userOption && userOption.value;
  return(
  <Container fluid>
    <Row>
      <Col size="md-12">
        <h1>Templates</h1>
        <Button id="pageButton" onClick = {() => this.singleInput({component: "EmailInput" ,props: {key: 1, value: ""},fill: "email"})} children = "Email Input" className = "btn"/>
        <Button id="pageButton" onClick = {() => this.singleInput({component: "NameInput" ,props: {key:2, value: ""},fill: "firstName"})} children = "Name Input" className = "btn"/>
        <Button onClick = {this.newTemplate} children = "New" className = "btn" id="pageButton"/>

        <center><Input
                value={this.state.templatename}
                onChange={this.handleInputChange}
                name="templateName"
                placeholder="Title (required)"
              /></center>
              <Select
        name="form-field-name2"
        value={userValue}
        onChange={this.handleChange}
        options= {this.state.templates.map(template => (
          { value: template._id, label: template.templateName } 
         
      ))}
      />
        <Button onClick = {this.log} children = "Go"/>
        <Button onClick = {() => this.updateTemplate(this.state._id)} children = "Save Changes" className = "btn" id="pageButton"/>
        <Button onClick = {() => this.deleteTemplate(this.state._id)} display = {this.state.delete} children = "Delete Template" className = "btn" id="deleteButton"/>
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
)
}}
export default BuildTemplateById;
