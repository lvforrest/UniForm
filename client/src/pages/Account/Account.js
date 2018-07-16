import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../../components/InputField";
import Button from "../../components/Button";
import { Redirect } from 'react-router-dom'

class Account extends Component {
  state = {
    lastName: "",
    password: "",
    email: "", 
    firstName: "",
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  signup = (event)=>{
    event.preventDefault();
    API.saveUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
      })
        .then(response =>{
          if(!response.data.err){
            this.setState({
              redirectTo: "/Login"
            })
          }else{
            alert("User already exists!")
          }
        })
        .catch(err => console.log(err));
      
  };
  
  
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
  } else {
  return(
  <div>
  <Jumbotron name = "Account"/>
  <Container fluid>
    <Row>
      <Col size="md-12">
       
          <h1>Account</h1>
          </Col>
      <Col size="md-6">
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name (Required)"
              />
      </Col>
      <Col size="md-6">
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name (Required)"
              />
              </Col>
              </Row>
              <br></br>
              <Row>
                <Col size="md-6">
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              </Col>
        <Col size="md-6">
        <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                type= "password"
                placeholder="Password (required)"
              />

              <Button onClick={this.signup} children= "signup"/>              
        
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
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  </div>
)}
}
}
export default Account;
