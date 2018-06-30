import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button"
import Paper from "../../components/Paper"
import { Input, } from "../../components/InputField";
import "./buildTemplate.css";
import EmailInput from "../../build.components/Email-input";
import NameInput from "../../build.components/Name-input";
import SideNav from "../../components/SideNav";
import Jumbotron from "../../components/Jumbotron";

class BuildTemplate extends Component {

  state = {
    templateName: "",
    template: [],
    templateData: []
  }

  Button = (name, nameData) => {
    let newTemplate = this.state.template.slice();
    newTemplate.push(name)

    let newTemplateData = this.state.templateData.slice();
    newTemplateData.push(nameData)

    this.setState({template: newTemplate})
    this.setState({templateData: newTemplateData })
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
      
      API.saveTemplate({
      templateName: this.state.templateName,
      template: this.state.templateData
      })
        .then(res => alert("Template saved!"))
        .catch(err => console.log(err));
      }
      
    };

  render() {
  return(
  <Container fluid>
  <Jumbotron>
  <Row>
      <Col size="md-12">
        <h1>Templates</h1>
        <hr></hr>
        <center><Input
                value={this.state.templatename}
                onChange={this.handleInputChange}
                name="templateName"
                placeholder="Title (required)"
              /></center>
        <Button onClick = {this.handleFormSubmit} children = "Save Changes" className = "btn" id="pageButton"/>
        </Col></Row>
    </Jumbotron>
          {/* ====================================== */}
          {/* SIDE NAV */}
          {/* ===================================== */}
        <Row>
          <Col size="md 3">
          <SideNav children={[
              /* ===================================== */
              // Email Button
              /* ===================================== */
          <Button id="pageButton" onClick = {() => this.Button({component: <EmailInput key = {1} value = ""/>, fill: "email"},
          {component: "EmailInput" ,props: {key: 1, value: ""},fill: "email"})} children = "Email Input" className = "btn"/>,
              /* ===================================== */
              // Name Button 
              /* ===================================== */
          <Button id="pageButton" onClick = {() => this.Button({component: <NameInput key = {2}/>, fill: "name"},
          {component: "NameInput" ,props: {key:2, value: ""},fill: "firstName"})} children = "Name Input" className = "btn"/>]} />
          </Col>
          {/* ====================================== */}
          {/* PAPER */}
          {/* ===================================== */}
          <Col size="md 9">
        <Paper title = {this.state.templateName} children = {this.state.template.map(child => (
          <div>{child.component}</div>))}      
          />
          </Col>
          </Row>
  </Container>
)}
}
export default BuildTemplate;
