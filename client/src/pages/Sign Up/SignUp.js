import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/InputField";
import Jumbotron from "../../components/Jumbotron";
import { Redirect } from 'react-router-dom'


class SignUp extends Component {
  constructor(){
    super()
    this.state = {
      firstName: "", 
      lastName: "",
      email: "",
      password:"",
      name: "signup",
      redirectTo: null
    }
}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("submit")
    if (this.state.email && this.state.firstName ) {
      API.saveUser({
        firstName: this.state.firstName,
        lastName:this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      })
      .then(response =>{
        if(!response.data.err){
          this.setState({
            redirectTo: "/login"
          })
        }else{
          alert("User already exists!")
        }
      })
        // .then(alert("User Saved"))
        // .catch(err => console.log(err));
    }
  };
  render() {
    if (this.state.redirectTo) {
    return <Redirect to={{ pathname: this.state.redirectTo }} />
} else {
  return(
  <div>
  <Jumbotron name = {this.state.name} children = {this.state.name} />
  <Container fluid>
    <Row>
      <Col size="md-12">
       
          <form>
            <center>
    
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name(required)"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="last name"
                placeholder= "Last name (required)"
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
                placeholder="password (required)"
              />
              <center><FormBtn
                disabled={!(this.state.email && this.state.firstName)}
                onClick={this.handleFormSubmit}
              >
                Submit  
              </FormBtn></center>
              </center>
            </form>
          
        
      </Col>
    </Row>
  </Container>
  </div>
    )}
  }
}
export default SignUp;