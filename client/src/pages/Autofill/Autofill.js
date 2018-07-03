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
import Jumbotron from "../../components/Jumbotron";


class Autofill extends Component {
 
  state = {
    templates: [],
    questrians: [],
    filled: [],
    questrianOption: "",
    templateOption: "", 
    name: "Autofill Template"
    
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
    asdf = () => {
      API.saveUser({
        email: this.state.email,
        password: this.state.password
      })
        .then(response => {
          console.log(response)
          if (!response.data.err) {
            console.log('successful signup')
          
          } else {
            console.log('username already taken')
          }
        }).catch(error => {
          console.log('signup error: ')
          console.log(error)
  
        })
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
      <Col size="md-12">
        <h2>Questrian</h2>          
        <Select
        name="form-field-name2"
        value={questrianValue}
        onChange={this.handleChange}
        options= {this.state.questrians.map(questrian => (
          { value: questrian.firstName , label: questrian.firstName } 
      ))}
      /> 
      <h2>Template</h2>
      <Select 
        name="form-field-name2"
        value={templateValue}
        onChange={this.handleChangeB}
        options= {this.state.templates.map(template => (
          { value: template.templateName , label: template.templateName } 
      ))}
      />
      <Button children = "Generate" onClick = {this.generate}/>
      <Button children = "Save" onClick = {this.save}/>
      <Button children = "asdf" onClick = {this.asdf}/>
      <Paper 
        children = {this.state.filled.map(fills => (
          this.createComponent(fills.component,fills.props)
        ))}
      />
      </Col>
    </Row>
  </Container>
  </div>
)}
}
export default Autofill;