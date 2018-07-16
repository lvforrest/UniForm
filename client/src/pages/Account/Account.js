import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../../components/InputField";
import Button from "../../components/Button";
import { Redirect } from 'react-router-dom';
import Logo from "../../components/Logo";
import "./SignUp.css";

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


<div id="landingPage">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Logo />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1 id="loginTitle">Uniform</h1>
          <h3 id="loginSubheading">Just like magic.</h3>
          <hr></hr>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
        <h5><i>Sign Up</i></h5>
          <hr></hr>
          <br></br>
          </div>
          </div>
          <div className="row">
      <div className="col-6">
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name (required)"
              />
      </div>
      <div className="col-6">
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name (required)"
              />
              </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-6">
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              </div>
        <div className="col-6">
        <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                type= "password"
                placeholder="Password (required)"
              />
</div></div>
<br></br>
<div className="row">
<div className="col-12">
              <Button onClick={this.signup} children= "Sign Up"/>
              </div></div>
            <br></br>
        </div>
      </div>
)}
}
}
export default Account;
