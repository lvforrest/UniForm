import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../../components/InputField";
import Button from "../../components/Button";


class Login extends Component {
  state = {
    username:"", 
    password: "",
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

  login = (event)=>{
    event.preventDefault();
    API.saveUser({
      username: this.state.username,
      password: this.state.password
      })
        .then(res => alert("logged in!"))
        .catch(err => console.log(err));
  };
  // export default React.createClass({

  //   submitHandler(event) {
  //     event.preventDefault();
  
  //     // Using ref: secret
  //     console.log("Using ref:", this.refs.pswd.value);
  
  //     // From form: password=secret
  //     console.log("From form:", serialize(this.refs.form));
  //   },
  
  render() {
  return(
  <Container fluid>
    <Row>
      <Col size="md-12">
       
          <h1>Login</h1>
          <form>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="User Name"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password"
              />
              

              <Button onClick={this.login} children= "login"/>
              <Button onClick={this.asdf} children= "asdf"/>
              

            </form>
          
        
      </Col>
    </Row>
  </Container>
)}
}
export default Login;