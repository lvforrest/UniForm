import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button"
import Paper from "../../components/Paper"
import { Input, } from "../../components/InputField";
import EmailInput from "../../build.components/Email-input";
import NameInput from "../../build.components/Name-input";
import AddressInput from "../../build.components/Address-input";
import LanguageInput from "../../build.components/Language-input";
import NationalityInput from "../../build.components/Nationality-input";
import GenderInput from "../../build.components/Gender-input";
import SideNav from "../../components/SideNav";
import Jumbotron from "../../components/Jumbotron";
import "./buildTemplate.css";

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
  <Row>
      <Col size="md-12">
        <h1>Templates</h1>

        <center><Input
                value={this.state.templatename}
                onChange={this.handleInputChange}
                name="templateName"
                placeholder="Title (required)" id="templateForm"
              /></center>
        <Button onClick = {this.handleFormSubmit} children = "Save Changes" className = "btn" id="pageButton"/>
        </Col></Row>
          {/* ====================================== */}
          {/* SIDE NAV */}
          {/* ===================================== */}
        <Row>
          <Col size="md 3">
          <SideNav children={[
              /* ===================================== */
              // Email Button
              /* ===================================== */
          <div id="pageButton" onClick = {() => this.Button({component: <EmailInput key = {1} value = ""/>, fill: "email"},
          {component: "EmailInput" ,props: {key: 1, value: ""},fill: "email"})} children = "Email Input" className = "navBtn"/>,
              /* ===================================== */
              // Name Button 
              /* ===================================== */
          <div id="pageButton" onClick = {() => this.Button({component: <NameInput key = {2}/>, fill: "name"},
          {component: "NameInput" ,props: {key:2, value: ""},fill: "firstName"})} children = "Name Input" className = "navBtn"/> ,
              /* ===================================== */
              // Address Button 
              /* ===================================== */
          <div id="pageButton" onClick = {() => this.Button({component: <AddressInput key = {3}/>, fill: "address"},
          {component: "AddressInput" ,props: {key:3, value: ""},fill: ""})} children = "Address Input" className = "navBtn"/>,
              /* ===================================== */
              // Language Button 
              /* ===================================== */
          <div id="pageButton" onClick = {() => this.Button({component: <LanguageInput key = {3}/>, fill: "language"},
          {component: "LanguageInput" ,props: {key:4, value: ""},fill: ""})} children = "Language Input" className = "navBtn"/>,
              /* ===================================== */
              // Nationality Button 
              /* ===================================== */
          <div id="pageButton" onClick = {() => this.Button({component: <NationalityInput key = {3}/>, fill: ""},
          {component: "NationalityInput" ,props: {key:5, value: ""},fill: ""})} children = "Nationality Input" className = "navBtn"/>,
              /* ===================================== */
              // Gender Button 
              /* ===================================== */
          <div id="pageButton" onClick = {() => this.Button({component: <GenderInput key = {3}/>, fill: ""},
          {component: "GenderInput" ,props: {key:6, value: ""},fill: ""})} children = "Gender Input" className = "navBtn"/>

        
        // End Button Array
        ]}/>
        {/* End Button Div */}
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
