import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button"
import Paper from "../../components/Paper"
import "./ManageForms.css";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import EmailInput from "../../build.components/Email-input"
import NameInput from "../../build.components/Name-input"
import Jumbotron from "../../components/Jumbotron";
import FormManagerTable from "../../components/FormManagerTable";

class ManageForms extends Component {
 
  state = {
    templates: [],
    questrians: [],
    filled: [],
    questrianOption: "",
    templateOption: "", 
    name: "Manage Forms"
    
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
 
    API.getQuestrians()
      .then(res =>
        this.setState({ questrians: res.data}),
      )
      .catch(err => console.log(err));
  };
 
  handleChange = (questrianOption) => {
    this.setState({ questrianOption });
  }
  handleChangeB = (templateOption) => {
    this.setState({ templateOption });
    }
  
  createComponent = (componentName,props) => {
    const  components = {
      "EmailInput" : EmailInput,
      "NameInput" : NameInput,
    }
    const component = React.createElement(components[componentName], props);
    console.log(component)
    return component;
  }
  generate = () => {
 
    let filledquestrian = []
    let filledTemplate = []
    let filled = []
    for(let i =0; i < this.state.questrians.length; i++) {
      if(this.state.questrians[i].firstName === this.state.questrianOption.value){
        filledquestrian = this.state.questrians[i];
        console.log(this.state)
      }
    }
 
    for(let i =0; i < this.state.templates.length; i++) {
      if(this.state.templates[i].templateName === this.state.templateOption.value){
        filledTemplate = this.state.templates[i];      }
    }
    for(let i = 0; i < filledTemplate.template.length; i++){
      let object = {}
      object.component = filledTemplate.template[i].component
      object.props = filledTemplate.template[i].props
      object.props.value = filledquestrian[filledTemplate.template[i].fill]
      console.log(filledquestrian[filledTemplate.template[i].fill])
      filled.push(object);
      this.setState({filled: filled})
      console.log(this.state)
  
    }
  }
    save = () => {
      API.saveFilled({
        templateName: this.state.templateOption.value,
        filled: this.state.filled,
        firstName: this.state.questrianOption.value,
        filledName: `${this.state.questrianOption.value} ${this.state.templateOption.value}`
        })
          .then(res => alert("Filled saved!"))
          .catch(err => console.log(err));
    }
 
  render() {
    const { questrianOption } = this.state;
    const questrianValue = questrianOption && questrianOption.value;
    
    const { templateOption } = this.state;
    const templateValue = templateOption && templateOption.value;
  return(
  <div>
  <Jumbotron name = {this.state.name} children = {this.state.name} />
  <Container fluid>
    <Row>
      <Col size="md-6">
      <h2>My Forms</h2>
      </Col>
      <Col size="md-6">
      <Button href="/buildTemplate">Create a New Form</Button>
      </Col>
      </Row>
      <hr></hr>
      <Row>
      <Col size="md-12">
      <FormManagerTable />
      </Col>
    </Row>
  </Container>
  </div>
)}
}
export default ManageForms;