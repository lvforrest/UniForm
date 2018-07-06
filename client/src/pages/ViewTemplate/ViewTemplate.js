import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button"
import Paper from "../../components/Paper"
import { Input, } from "../../components/InputField";
import "./ViewTemplate.css";
import EmailInput from "../../build.components/Email-input";
import NameInput from "../../build.components/Name-input";
import 'react-select/dist/react-select.css';
import CityInput from "../../build.components/City-input";
import StateInput from "../../build.components/State-input";
import ZipInput from "../../build.components/Zip-input";
import StreetAddressInput from "../../build.components/StreetAddress-input";
import LanguageInput from "../../build.components/Language-input";
import NationalityInput from "../../build.components/Nationality-input";
import GenderInput from "../../build.components/Gender-input";

class ViewTemplate extends Component {
 
  state = {
    patronData: {},
    template: [],
    templateName: "",
    _id: "",
    patron_id: '',
    url: "",
  }
  componentDidMount() {
    
    this.loadData();
  }
  loadData= () => {
  API.getTemplate(this.props.match.params.id)
  .then(res => this.setState({ template: res.data.template, templateName: res.data.templateName, _id: res.data._id,}))
    .catch(err => console.log(err));
  };
  createFillableComponent = (componentName,props) => {
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
    props.onChange = this.handleFillableChange
    props.value = this.state.patronData[props.name]
    const component = React.createElement(components[componentName], props);
    return component;
  }
  handleFillableChange = event => {
    const { name, value } = event.target;
    console.log(value)
    let newPatronData = this.state.patronData
    newPatronData[name] = value    
    this.setState({
      patronData : newPatronData
    });
  };
  
  handleInputChange = event => {
    const { name, value } = event.target;
 
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    if(!this.state.patronData.firstName || !this.state.patronData.lastName){
      alert("First and Last names are requried!")
    } else {
    const name = `${this.state.patronData.firstName} ${this.state.patronData.lastName}`
    this.updatePatron(name)
    }
 
  }; 
  combinePatronData = data => {
    Object.assign(data.patronData,this.state.patronData)
    this.setState({patronData:data.patronData, patron_id: data._id}, () => {
      API.updatePatron(this.state.patron_id, {
        patronName: `${this.state.patronData.firstName} ${this.state.patronData.lastName}`,
        patronData: this.state.patronData
      })
      .then(res => alert("Patrons data was successfully updated!"))
      .catch(err => console.log(err));
    });
    
    
  }
  updatePatron = (name) => {
    let updateData;
    API.getPatronName(name)
      .then(res => this.combinePatronData(res.data))
      .catch(err =>
        API.savePatron({
          patronName: name,
          patronData: this.state.patronData
          })
            .then(alert("Patron added to the database"))
            .catch(err => console.log(err))
      );
  }

  render() {
  return(
  <Container fluid>
    <Row>
      <Col size="md-12">

              <Input
                width= "35%"
                value={this.state.patronData.firstName}
                onChange={this.handleFillableChange}
                name="firstName"
                placeholder="First Name"
              />
              <Input
                width= "35%"
                value={this.state.patronData.lastName}
                onChange={this.handleFillableChange}
                name="lastName"
                placeholder="Last Name"
              />
        <Button onClick = {this.handleFormSubmit} children = "Post" className = "btn" id="pageButton"/>
        <Paper
        display = {this.state.paper}
        children = {this.state.template.map(template => (
          this.createFillableComponent(template.component,template.props)
        ))}
      />
        
    </Col>
    </Row>
  </Container>
)
}}
export default ViewTemplate;
