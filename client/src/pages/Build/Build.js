import React, { Component } from "react";
import ReactDOMServer from 'react-dom/server';
import jsxToString from 'jsx-to-string'
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button"
import Paper from "../../components/Paper"
import { Input, } from "../../components/InputField";
import "./Build.css";
import EmailInput from "./build.components/Email-input";
import NameInput from "./build.components/Name-input";

class Build extends Component {

  state = {
    templateName: "",
    template: []
  }
  emailButton = () => {
    let newTemplate = this.state.template.slice();
    const key = newTemplate.length + 1;
    const email = {component: <EmailInput key = {key} value = ""/>, fill: "email"}
    newTemplate.push(email)
    this.setState({template: newTemplate})
  }

  nameButton = () => {
    let newTemplate = this.state.template.slice();
    const key = newTemplate.length + 1;
    const name = {component: <NameInput key = {key}/>, fill: "name"}
    newTemplate.push(name)
    this.setState({template: newTemplate})
  } 

  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = event => {
      // When the form is submitted, prevent its default behavior, get recipes update the recipes state
      event.preventDefault();
      if(this.state.templateName === ""){
        alert("Template Title is requried!")
      } else {
      
      event.preventDefault();
      let newTemplate =[]
      for(let i = 0; i < this.state.template.length; i ++){
        const component = this.state.template[i].component
        const fill = this.state.template[i].fill
        const newComponenet = jsxToString(component);
        newTemplate.push({component: newComponenet, fill: fill})      
      }
      API.saveTemplate({
      templateName: this.state.templateName,
      template: newTemplate
      })
        .then(res => alert("Template saved!"))
        .catch(err => console.log(err));
      }
      
    };
  render() {
  return(
  <Container fluid>
    <Row>
      <Col size="md-12">
        <h1>Build</h1>
        <Button onClick = {this.emailButton} children = "Email Input" className = "btn btn-outline-dark"/>
        <Button onClick = {this.nameButton} children = "Name Input" className = "btn btn-outline-dark"/>
        <Input
                value={this.state.templatename}
                onChange={this.handleInputChange}
                name="templateName"
                placeholder="Title (required)"
              />
        <Button onClick = {this.handleFormSubmit} children = "Save Template" className = "btn btn-outline-dark"/>
        <Paper title = {this.state.templateName} children = {this.state.template.map(child => (
          <div>{child.component}</div>))}      
          />
        
      </Col>
    </Row>
  </Container>
)}
}
export default Build;
