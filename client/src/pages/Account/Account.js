import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../../components/InputField";
import Button from "../../components/Button";

class Account extends Component {
  state = {
    lastName: "",
    password: "",
    email: "", 
    firstName: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  asdf =(event) =>{
    event.preventDefault();
    console.log(this.state);
  }

  signup = (event)=>{
    event.preventDefault();
    API.saveUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
      })
        .then(res => alert("user created!"))
        .catch(err => console.log(err));
  }
  
  
  render() {
  return(
  <Container fluid>
    <Row>
      <Col size="md-12">
       
          <h1>Account</h1>
          <form>
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name (required)"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password(required)"
      
              />
              <Button onClick={this.signup} children= "signup"/>
              <Button onClick={this.asdf} children= "asdf"/>
              

            </form>
          
        
      </Col>
    </Row>
  </Container>
)}
}
export default Account;
