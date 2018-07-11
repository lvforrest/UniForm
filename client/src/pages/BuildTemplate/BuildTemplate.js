import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button"
import Paper from "../../components/Paper"
import { Title, } from "../../components/InputField";
import "./buildTemplate.css";
import EmailInput from "../../build.components/Email-input";
import NameInput from "../../build.components/Name-input";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import CityInput from "../../build.components/City-input";
import StateInput from "../../build.components/State-input";
import ZipInput from "../../build.components/Zip-input";
import StreetAddressInput from "../../build.components/StreetAddress-input";
import LanguageInput from "../../build.components/Language-input";
import NationalityInput from "../../build.components/Nationality-input";
import GenderInput from "../../build.components/Gender-input";
import Jumbotron from "../../components/Jumbotron";
import SideNav from "../../components/SideNav";

class BuildTemplate extends Component {

  state = {
    templates: [],
    templateName: "",
    template: [],
    templates: [],
    key: 1000000, 
    name: "Build Template"
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
      "CityInput" : CityInput,
      "StateInput" : StateInput,
      "ZipInput" : ZipInput,
      "StreetAddressInput" : StreetAddressInput,
      "GenderInput" : GenderInput,
      "NationalityInput" : NationalityInput,
      "LanguageInput" : LanguageInput
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
          console.log("hello")
          window.location.href = `/buildTemplate/${id}`
        }
        }
    }
    keyMaker = () => {
      const newKey = this.state.key - 1
      this.setState({key: newKey})
      return newKey;
    }
    handleFormSubmit = event => {
      // When the form is submitted, prevent its default behavior, get recipes update the recipes state
      event.preventDefault();
      if(this.state.templateName === ""){
        alert("Template Title is requried!")
      } else {
      
      API.saveTemplate({
      templateName: this.state.templateName,
      template: this.state.template
      })
        .then(res => this.props.history.push(`/buildTemplate/${res.data._id}`))
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
      <Col size="md-5">
        <Title
                id="templateTitle"
                width="100vh"
                value = {this.state.templatename}
                onChange={this.handleInputChange}
                name="templateName"
                placeholder="Title (required)"
              />
              </Col>
              <Col size="md-2">
              <Button onClick = {this.handleFormSubmit} children = "Save Changes" className = "btn" id="pageButton"/>
              </Col>
              <Col size="md-5">
              <Select
        name="form-field-name2"
        placeholder="My Forms"
        value={userValue}
        onChange={this.handleChange}
        options= {this.state.templates.map(template => (
          { value: template.templateName, label: template.templateName } 
      ))}
      />
        </Col>
        </Row>
          {/* ====================================== */}
          {/* SIDE NAV */}
          {/* ===================================== */}
        <Row>
          <Col size="md 3">
          
          <SideNav title="Form Elements" children={[
              /* ===================================== */
              // Email Button
              /* ===================================== */
          <div id="pageButton" onClick = {() => this.singleInput({component: "EmailInput" ,props: {key: this.keyMaker(), value: "",name: "email"}})} children = "Email Input" className = "navBtn"/>,
              /* ===================================== */
              // Name Button 
              /* ===================================== */
          <div id="pageButton" onClick = {() => this.singleInput({component: "NameInput" ,props: {key:this.keyMaker(), value: "",name: "firstName"}})} children = "Name Input" className = "navBtn"/> ,
              /* ===================================== */
              // Address Button 
              /* ===================================== */
          <div id="pageButton" onClick = {() => this.multiInput([
            {component: "StreetAddressInput", props: {key:1, value: "",name: "streetAddress"}},
            {component: "CityInput", props: {key: 2, value: "",name: "city",width: "45%"}},
            {component: "StateInput", props: {key: 3, value: "",name: "state",width: "20%"}},
            {component: "ZipInput", props: {key: 4,value: "",name: "zip",width: "30%"}}
            ])} children = "Address Input" className = "navBtn"/>,
              /* ===================================== */
              // Language Button 
              /* ===================================== */
          <div id="pageButton" onClick = {() => this.singleInput({component: "LanguageInput" ,props: {key:this.keyMaker(), value: "",name: "language"}})} children = "Language Input"className = "navBtn"/>,
              /* ===================================== */
              // Nationality Button 
              /* ===================================== */
          <div id="pageButton" onClick = {() => this.singleInput({component: "NationalityInput" ,props: {key:this.keyMaker(), value: "",name: "nationality"}})} children = "Nationality Input" className = "navBtn"/>,
              /* ===================================== */
              // Gender Button 
              /* ===================================== */
          <div id="pageButton" onClick = {() => this.singleInput({component: "GenderInput" ,props: {key:this.keyMaker(), value: "",name: "gender"}})} children = "Gender Input" className = "navBtn"/>

        
        // End Button Array
        ]}/>
        {/* End Button Div */}
          </Col>
          <Col size="md 8">
        <Paper
        display = {this.state.paper}
        title = {this.state.templateName}
        children = {this.state.template.map(template => (
          this.createComponent(template.component,template.props)
        ))}
      />
        {/* End Button Array */}
        {/* End Button Div */}
          </Col>
          </Row>
  </Container>
  </div>
)}
}

export default BuildTemplate;
