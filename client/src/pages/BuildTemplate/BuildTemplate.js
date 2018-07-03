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
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class BuildTemplate extends Component {

  state = {
    templates: [],
    templateName: "",
    template: [],
    templateData: [],
    name: "Template"
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
  <div> 
  <Jumbotron name = {this.state.name} children = {this.state.name} />
  <Container fluid>
  <Row>
      <Col size="md-12">

        <Button id="pageButton" onClick = {() => this.Button({component: <EmailInput key = {1} value = ""/>, fill: "email"},{component: "EmailInput" ,props: {key: 1, value: ""},fill: "email"})} children = "Email Input" className = "btn"/>
        <Button id="pageButton" onClick = {() => this.Button({component: <NameInput key = {2}/>, fill: "name"},{component: "NameInput" ,props: {key:2, value: ""},fill: "firstName"})} children = "Name Input" className = "btn"/>
        <Button id="pageButton" onClick = {() => this.Button({component: <AddressInput key = {3}/>, fill: "address"},{component: "AddressInput" ,props: {key:3, value: ""},fill: ""})} children = "Address Input" className = "btn"/>
        <Button id="pageButton" onClick = {() => this.Button({component: <LanguageInput key = {3}/>, fill: "language"},{component: "LanguageInput" ,props: {key:4, value: ""},fill: ""})} children = "Language Input" className = "btn"/>
        <Button id="pageButton" onClick = {() => this.Button({component: <NationalityInput key = {3}/>, fill: ""},{component: "NationalityInput" ,props: {key:5, value: ""},fill: ""})} children = "Nationality Input" className = "btn"/>
        <Button id="pageButton" onClick = {() => this.Button({component: <GenderInput key = {3}/>, fill: ""},{component: "GenderInput" ,props: {key:6, value: ""},fill: ""})} children = "Gender Input" className = "btn"/>

        <Input
                width="35%"
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
  </div>
)}
}
export default BuildTemplate;
