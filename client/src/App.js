import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import BuildTemplate from "./pages/BuildTemplate";
import BuildTemplateById from "./pages/BuildTemplateById"
import ViewTemplate from "./pages/ViewTemplate"
import NoMatch from "./pages/NoMatch";
import ButtonAppBar from "./components/NavigationBar/Navigation";
import Footer from "./components/Footer/Footer";
import FindForm from "./pages/FindForm";
import Autofill from "./pages/Autofill";
import ManageForms from "./pages/ManageForms"
import ManagePatrons from "./pages/ManagePatrons"
import Jumbotron from "./components/Jumbotron";
import Account from "./pages/Account";
import Login from "./pages/Login";
class App extends Component {
  constructor(){
    super()
    this.state ={user: null, loggedIn: false}
  
  // this.login =this.login.bind(this)
  // this.signup=this.signup.bind(this)
 
} 

auth(user) {
  return this.setState({user})
}

componentDidMount(){
  // 
  if (!this.state) {
    redirectTo: "/Account"

  } else {
    redirectTo: "/"
  }
}
  render() {
    return(

    <div className="bodyContainer">
      <Router>
      <div>
      <ButtonAppBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/buildTemplate" component={BuildTemplate}/>
          <Route exact path="/buildTemplate/:id" component={BuildTemplateById} />
          <Route exact path="/template/:id" component={ViewTemplate}/>
          <Route exact path="/manageForms" component={ManageForms}/>
          <Route exact path="/managePatrons" component={ManagePatrons}/>
          <Route exact path="/autofill" component={Autofill}/>
          <Route exact path ="/storage" component={FindForm}/>
          <Route exact path = "/Account" component ={Account}/>
          <Route
            path='/Login'
            component={() => <Login auth={true} />}
            />

          {/* <Route exact path="/filled/:id" component={ViewFilled}/> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    <Footer />
  </div>

  
)};
}

export default App;