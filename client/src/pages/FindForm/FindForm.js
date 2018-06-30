import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button"
import Paper from "../../components/Paper"
import "./FindForm.css";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import EmailInput from "../../build.components/Email-input"
import NameInput from "../../build.components/Name-input"

class FindForm extends Component {

  state = {
    filled: [],
    search: [],
    results: [],
    userOption: "val",
    generate: [],
  }
  componentDidMount() {
    this.loadData();
  }
  loadData= () => {
    API.getFilleds()
      .then(res =>
        this.searchData(res)
      )
      .catch(err => console.log(err));
  };
  searchData = res => {
    let array = []
    for(let i = 0; i < res.data.length; i++){
      array.push(res.data[i].filledName,res.data[i].firstName,res.data[i].templateName)
    }
    array = array.filter( function( item, index, inputArray ) {
      return inputArray.indexOf(item) === index;
    })
    this.setState({search: array,filled: res.data})
    }
  
  handleChange = (userOption) => {
    this.setState({ userOption });
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
  find = () => {
    let results = []
    for(let i = 0; i < this.state.filled.length; i++){

      let firstName = this.state.filled[i].firstName.includes(this.state.userOption.value)
      let templateName = this.state.filled[i].templateName.includes(this.state.userOption.value)
      let filledName = this.state.filled[i].filledName.includes(this.state.userOption.value)
      if(firstName || templateName || filledName) {
        results.push(this.state.filled[i]);
      }
      this.setState({results: results})
    }
  }
  render() {
    const { userOption } = this.state;
    const userValue = userOption && userOption.value;
  return(
  <Container fluid>
    <Row>
      <Col size="md-12">
        <h1>Storage</h1>
        <h2>Find Form</h2>          
        <Select
        name="form-field-name2"
        value={userValue}
        onChange={this.handleChange}
        options= {this.state.search.map(search => (
          { value: search, label: search } 
      ))}
      />
      <Button onClick = {this.find} children = "Find"/>
      <div> {this.state.results.map(result => (
        <div>
        <span>{result.filledName}{'\u00A0'}{'\u00A0'}{'\u00A0'}
        <Button onClick = {() => this.setState({generate: result.filled})} children = "Generate"/></span>
        <br />
        </div>
      ))}
      </div>
      <Paper 
        children = {this.state.generate.map(generate => (
          this.createComponent(generate.component,generate.props)
        ))}
      />
      </Col>
    </Row>
  </Container>
)}
}
export default FindForm;
