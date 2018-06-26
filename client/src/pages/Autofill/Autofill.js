import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button"
import Paper from "../../components/Paper"
import "./Autofill.css";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import EmailInput from "../Build/build.components/Email-input"
import NameInput from "../Build/build.components/Name-input"
class Autofill extends Component {

  state = {
    templates: [],
    users: [],
    filled: [], 
    
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

    API.getUsers()
      .then(res =>
        this.setState({ users: res.data}),
      )
      .catch(err => console.log(err));
  };

  handleChange = (userOption) => {
    this.setState({ userOption });
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

    let filledUser = []
    let filledTemplate = []
    let filled = []
    for(let i =0; i < this.state.users.length; i++) {
      if(this.state.users[i].firstName === this.state.userOption.value){
        filledUser = this.state.users[i];
        console.log(filledUser);
      }
    }

    for(let i =0; i < this.state.templates.length; i++) {
      if(this.state.templates[i].templateName === this.state.templateOption.value){
        filledTemplate = this.state.templates[i];
        console.log(filledTemplate);
      }
    }
    for(let i = 0; i < filledTemplate.template.length; i++){
      let object = {}
      object.component = filledTemplate.template[i].component
      object.props = filledTemplate.template[i].props
      object.props.value = filledUser[filledTemplate.template[i].fill]
      filled.push(object);
      this.setState({filled: filled})
  
    }
  }
    save = () => {
      API.saveFilled({
        templateName: this.state.templateOption.value,
        filled: this.state.filled,
        firstName: this.state.userOption.value,
        filledName: `${this.state.userOption.value} ${this.state.templateOption.value}`
        })
          .then(res => alert("Filled saved!"))
          .catch(err => console.log(err));
    }
 
  render() {
    const { userOption } = this.state;
    const userValue = userOption && userOption.value;
    
    const { templateOption } = this.state;
    const templateValue = templateOption && templateOption.value;
  return(
  <Container fluid>
    <Row>
      <Col size="md-12">
        <h1>Autofill</h1>
        <h2>User</h2>          
        <Select
        name="form-field-name2"
        value={userValue}
        onChange={this.handleChange}
        options= {this.state.users.map(user => (
          { value: user.firstName , label: user.firstName } 
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
      <Paper 
        children = {this.state.filled.map(fills => (
          this.createComponent(fills.component,fills.props)
        ))}
      />
      </Col>
    </Row>
  </Container>
)}
}
export default Autofill;
