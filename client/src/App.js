import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Build from "./pages/Build";
import NoMatch from "./pages/NoMatch";
import Button from "./components/Button";

import Questionaire from "./pages/Questionaire";
import FindForm from "./pages/FindForm";
import Autofill from "./pages/Autofill";
import ButtonAppBar from "./components/NavigationBar/Navigation";
import Footer from "./components/Footer/Footer";

class App extends Component {

  render() {
    return(

    <div className="bodyContainer">
      <Router>
      <div>
      <ButtonAppBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/questionaire" component={Questionaire}/>
          <Route exact path="/build" component={Build}/>
          <Route exact path="/autofill" component={Autofill}/>
          <Route exact path ="/storage" component={FindForm}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    <Footer />
  </div>

  
)};
}

export default App;