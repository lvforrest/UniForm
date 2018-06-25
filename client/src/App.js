import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Build from "./pages/Build";
import NoMatch from "./pages/NoMatch"
import Button from "./components/Button"
import Navbar from "./components/Navbar"
import Questionaire from "./pages/Questionaire";

class App extends Component {

  render() {
    return(
  
  <Router>
    <div>
{/* <Navbar body = {<Button children = "Sign Out" className = "btn btn-outline-dark" key="signOut"/>}/> */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/questionaire" component={Questionaire}/>
        <Route exact path="/build" component={Build}/>
        {/* <Route exact path="/autofill" component={Autofill}/> */}
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)};
}

export default App;
