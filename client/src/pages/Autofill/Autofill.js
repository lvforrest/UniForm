import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button"
import Paper from "../../components/Paper"
import "./Autofill.css";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import EmailInput from "../../build.components/Email-input"
import NameInput from "../../build.components/Name-input"
import CityInput from "../../build.components/City-input";
import StateInput from "../../build.components/State-input";
import ZipInput from "../../build.components/Zip-input";
import StreetAddressInput from "../../build.components/StreetAddress-input";
import LanguageInput from "../../build.components/Language-input";
import NationalityInput from "../../build.components/Nationality-input";
import GenderInput from "../../build.components/Gender-input";
import Jumbotron from "../../components/Jumbotron";

class Autofill extends Component {
 
  state = {
    templates: [],
    patrons: [],
    filled: [],
    patron: [],
    template: [],
    patronOption: "",
    templateOption: "",
    title: "Autofill"
    
  }
  componentDidMount() {
    this.loadData();
   
  }
  loadData= () => {
    API.getTemplates()
      .then(res =>
        this.setState({ templates: res.data}),
      )
      .catch(err => console.log(err));
 
    API.getPatrons()
      .then(res =>
        this.setState({ patrons: res.data}),
      )
      .catch(err => console.log(err));
  };
 
  handleChange = (patronOption) => {
    this.setState({ patronOption });
  }
  handleChangeB = (templateOption) => {
    this.setState({ templateOption });
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
    save = () => {
      API.saveFilled({
        templateId: this.state.templateOption.value,
        patronId: this.state.patronOption.value,
        filledName: `${this.state.patronOption.label} ${this.state.templateOption.label}`
        })
          .then(this.generate())
          .catch(err => console.log(err));
    }
    generate = () => {
 
      let patronData = []
      let templateData = []
      let filled = []
      for(let i =0; i < this.state.patrons.length; i++) {
        if(this.state.patrons[i]._id === this.state.patronOption.value){
          patronData = this.state.patrons[i].patronData;
        }
      }
   
      for(let i =0; i < this.state.templates.length; i++) {
        if(this.state.templates[i]._id === this.state.templateOption.value){
          templateData = this.state.templates[i].template;
          }
      }
      for(let i = 0; i < templateData.length; i++){
        let object = {}
        object.component = templateData[i].component
        object.props = templateData[i].props
        object.props.value = patronData[templateData[i].props.name]
        filled.push(object);
        this.setState({filled: filled})
    
      }
    }
  render() {
    const { patronOption } = this.state;
    const patronValue = patronOption && patronOption.value;
    
    const { templateOption } = this.state;
    const templateValue = templateOption && templateOption.value;
  return(
    <div>
      <Jumbotron name = "Autofill"/>
  <Container fluid>
    <Row>
      <Col size="md-12">
          <h2>Patron</h2>
          <p><i>Select a patron to import their information...</i></p>
          <div style={{width: '50%', margin: 'auto'}}>           
          <Select
          name="form-field-name2"
          value={patronValue}
          onChange={this.handleChange}
          options= {this.state.patrons.map(patron => (
            { value: patron._id , label: patron.patronName } 
        ))}
        /> 
        </div>
        </Col>
    </Row>
    <hr></hr>
    <Row>
      <Col size="md-12">
        <h2>Template</h2>
        <p><i>Then select the form you want their data to autofill!</i></p> 
        <div style={{width: '50%', margin: 'auto'}}> 
        <Select 
          name="form-field-name2"
          value={templateValue}
          onChange={this.handleChangeB}
          options= {this.state.templates.map(template => (
            { value: template._id , label: template.templateName } 
        ))}
        />
        </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
        <hr></hr>
        <Button children = "Save" onClick = {this.save}/>
      </Col>
    </Row>
  </Container>
  {/* Force footer to bootom */}
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>

  </div>
)}
}
export default Autofill;