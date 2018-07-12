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
    firstName: "",
    name: "Account"
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
  <div>
  <Jumbotron name = {this.state.name} children = {this.state.name}/>
  <Container fluid>
  {/* <form> */}
    <Row>
      <Col size="md-6">
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name (required)"
              />
      </Col>
      <Col size="md-6">
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name (required)"
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
                placeholder="Password (required)"
      
              />
              </Col>
              </Row>
              <br></br>
              <Row>
                <Col size="md-12">
              <Button onClick={this.signup} children= "Sign Up"/>
              {/* </form> */}
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
export default Account;
