import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../../components/InputField";
import Button from "../../components/Button";

// class Auth extends Component {
//   constructor(){
//     super()
//   this.state = {
//     vistor:{
//       firstName: "",
//       lastName: "",
//       email:"", 
//       password: "",
//     }
//   }
// }


//   newVistor(event){
//     console.log( att + "==" + event.target.value)
//     const newVistor = object.assign({}, this.state.vistor)
//     newVistor[attr]= event.target.value

//     this.setState({
//       vistor:newVistor
//     })
//   }
//   register(event){
//     event.preventDefault();
//     console.log("register");

//   }
//   login(event){
//     event.preventDefault();
//     console.log("login")

//   }
//   // asdf =(event) =>{
//   //   event.preventDefault();
//   //   console.log(this.state);
//   // }

//   // login = (event)=>{
//   //   event.preventDefault();
//   //   API.getUserLogin({
//   //     email: this.state.email,
//   //     password: this.state.password,
      
//   //     })
//   //       .then(res => alert("logged in!"))
//   //       .catch(err => console.log(err));
       
//   // };

  
//   render() {
//   return(
//   <Container fluid>
//     <Row>
//       <Col size="md-12">
       
//           <h1>Register</h1>
//           <form>
//               <Input
//                 value={this.state.firstName}
//                 onChange={this.newVistor.bind(this, firstName)}
//                 name="firstName"
//                 placeholder="First Name"
//               />
//               <Input
//                 value={this.state.lastName}
//                 onChange={this.newVistor.bind(this, lastName)}
//                 name="lastName"
//                 placeholder="Last Name"
//               />
//               <Input
//                 value={this.state.email}
//                 onChange={this.newVistor.bind(this, email)}
//                 name="email"
//                 placeholder="Email"
//               />
//               <Input
//                 value={this.state.password}
//                 onChange={this.newVistor.bind(this,password)}
//                 name="password"
//                 placeholder="Password"
//               />

//               <Button onClick={this.register.bind(this)} children= "register"/>
//               {/* <Button onClick={this.asdf} children= "asdf"/> */}
              

//             </form>
          
//             <h1>Login</h1>
//           <form>
//               <Input
//                 value={this.state.email}
//                 onChange={this.newVistor.bind(this, email)}
//                 name="email"
//                 placeholder="Email"
//               />
//               <Input
//                 value={this.state.password}
//                 onChange={this.newVistor.bind(this, password)}
//                 name="password"
//                 placeholder="Password"
//               />
              

//               <Button onClick={this.login.bind(this)} children= "login"/>
//               {/* <Button onClick={this.asdf} children= "asdf"/> */}
              

//             </form>
        
//       </Col>
//     </Row>
//   </Container>
// )}
// }
// export default Login;

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
      [event.target.name]: event.target.value
    });
  };

  // asdf =(event) =>{
  //   event.preventDefault();
  //   console.log(this.state);
  // }

  login = (event)=>{
    event.preventDefault();
    API.getUserLogin({
      email: this.state.email,
      password: this.state.password,
      
      })
        .then(res => {
          const { user } = res;
          this.props.auth(user);
          alert("logged in!")
        })
        .catch(err => console.log(err));
       
  };

  
  render() {
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
                placeholder="Password"
              />
              

              <Button onClick={this.login(this.state.email)} children= "login"/>
              {/* <Button onClick={this.asdf} children= "asdf"/> */}
              

            </form>
          
        
      </Col>
    </Row>
  </Container>
)}
}
export default Login;