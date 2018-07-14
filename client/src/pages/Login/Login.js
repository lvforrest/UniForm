import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../../components/InputField";
import Button from "../../components/Button";
import { Redirect } from 'react-router-dom'
 

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

  <Container fluid>
    <Row>
      <Col size="md-12">
       
          <h1>Login</h1>
          <form>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="Password"
              />
              

              <Button onClick={this.login} children= "login"/>
              {/* <Button onClick={this.asdf} children= "asdf"/> */}
              

            </form>
          
        
      </Col>
    </Row>
  </Container>
    )
    }
  }
}
export default Login;