import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button"
import Paper from "../../components/Paper"
import { Input, } from "../../components/InputField";
import "./ViewFilled.css";
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
import CustomInput from "../../build.components/Custom-input"
import TextInput from "../../build.components/Text-input"
import Jumbotron from "../../components/Jumbotron";
import RadioInput from "../../build.components/Radio-input";

class ViewFilled extends Component {
 
  state = {
    patron: {}, 
    template: [],
    filled: [],
    templateName: "",
    _id: "",
    patron_id: '',
    url: ""
  }
  componentDidMount() {
    
    this.loadData();
  }
 
  loadData= () => {
  API.getFilled(this.props.match.params.id)
  .then(res => this.setState({
    patronId: res.data.patronId,
    templateId: res.data.templateId,
    filledName: res.data.filledName
  }, () => {
    this.setPatron()
  }
))
    .catch(err => console.log(err));
  };

  setTemplate = () => {
    API.getTemplate(this.state.templateId)
      .then(res => this.setState({ template: res.data.template, _id: res.data._id, templateName: res.data.templateName} //, () => {this.setPatron()}
    ))
      .catch(err => console.log(err));
  }
  setPatron = () => {
    API.getPatron(this.state.patronId)
    .then(res => this.setState({ patron: res.data.patronData}, () => {this.setTemplate()}
    )) 
      .catch(err => console.log(err));
  }
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
      "LanguageInput" : LanguageInput,
      "CustomInput" : CustomInput,
      "TextInput" : TextInput,
      "RadioInput" : RadioInput,
    }
    props.onClick = this.nothing
    console.log(props)
    if(componentName === "TextInput"){
      props.value = props.value
      props.onChange = this.nothing
    } 
    else if(componentName === "RadioInput"){
      props.onChange = this.onChange
      props.disabled = false
      let string = this.state.patron[props.value]
      let boolean = (string === "true")
      console.log(boolean)
      props.defaultChecked = boolean
    } else {
      props.value = this.state.patron[props.name]
      props.onChange = this.handleFillableChange
    }
    
    const component = React.createElement(components[componentName], props);
    return component;
  }
  nothing = () => {

  }
  onChange = (e) => {
    const {value,checked} = e.target;
    const string = checked.toString()
    let newPatronData = this.state.patron
    newPatronData[value] = string
    this.setState({
      patron: newPatronData
    })
  }
  handleFillableChange = event => {
    const { name, value } = event.target;
    let newPatronData = this.state.patron
    newPatronData[name] = value    
    this.setState({
      patron : newPatronData
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
    if(!this.state.patron.firstName || !this.state.patron.lastName){
      alert("First and Last names are requried!")
    } else {
    const name = `${this.state.patron.firstName} ${this.state.patron.lastName}`
    this.updatePatron(name)
    }
 
  }; 
  combinePatronData = data => {
    Object.assign(data.patronData,this.state.patron)
    this.setState({patron: data.patronData, patron_id: data._id}, () => {
      API.updatePatron(this.state.patron_id, {
        patronName: `${this.state.patron.firstName} ${this.state.patron.lastName}`,
        patronData: this.state.patron
      })
        .then(res => alert("Patrons and form updated!"))
        .catch(err => console.log(err))
    });
    
    
  }
  updatePatron = (name) => {
    API.getPatronName(name)
      .then(res => this.combinePatronData(res.data))
      .catch(err =>
        API.savePatron({
          patronName: name,
          patronData: this.state.patron
          })
            .then(res => 
                API.saveFilled({
                  patronId: res.data._id,
                  templateId: this.state._id,
                  filledName: `${this.state.patron.firstName} ${this.state.patron.lastName} ${this.state.templateName}`
                })
                  .then(res => alert("Patrons and form created!"))
                  .catch(err => console.log(err))
              )
            .catch(err => console.log(err))
      );
  }

  render() {
  return(
  <div>
    <Jumbotron name = "Update Form Data" />
  <Container fluid>
    <Row>
      <Col size="md-12">
      <div style={{width: '50%', margin: 'auto'}}> 
              <Input
                // width= "35%"
                value={this.state.patron.firstName}
                onChange={this.handleFillableChange}
                name="firstName"
                placeholder="First Name"
              />
              <Input
                // width= "35%"
                value={this.state.patron.lastName}
                onChange={this.handleFillableChange}
                name="lastName"
                placeholder="Last Name"
              />
        <Button onClick = {this.handleFormSubmit} children = "Post" className = "btn" id="pageButton"
        />
        </div>
        <Paper
        left = '35vh'
        display = {this.state.paper}
        children = {this.state.template.map(template => (
          this.createFillableComponent(template.component,template.props)
        ))}
      />
        
    </Col>
    </Row>
  </Container>
  </div>
)
}}
export default ViewFilled;
