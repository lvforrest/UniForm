import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../../components/InputField";
import Button from "../../components/Button";
import { Redirect } from 'react-router-dom';
import Logo from "../../components/Logo";
import "./Login.css";

 

class Login extends Component {
  constructor(){
    super()
  this.state = {
    email:"", 
    password: "",
    redirectTo: null,
  }
}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // asdf =(event) =>{
  //   event.preventDefault();
  //   console.log(this.state);
  // }

  login = (event)=>{
    event.preventDefault();
    
    API.getUserLogin(
      this.state.email,
      this.state.password,
      
    )
        .then(res => {
          if (res.status === 200) {
            console.log(res.data);
            this.props.updateUser({
                loggedIn: true,
                email: res.data.username
        // state is getting updated with user login info
            })
          alert("logged in!")
          this.setState({
            redirectTo: "/"
          });
        }
      }).catch(err => console.log(err));
       
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
        <h5><i>Login</i></h5>
        <hr></hr>
        <br></br>
          <div className="row">
          <div className="col-6">
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email"
              />
              </div>
              <div className="col-6">
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="Password"
              />
              </div>
              </div>
              <br></br>
          <div className="row">
          <div className="col-12">
              <Button onClick={this.login} children= "Login"/>
              {/* <Button onClick={this.asdf} children= "asdf"/> */}

            </div></div>
            <br></br>
        </div>
      </div>
    </div>
  </div>
    )
    }
  }
}
export default Login;