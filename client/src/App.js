import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import BuildQuestionnaire from "./pages/BuildQuestionnaire";
import BuildTemplate from "./pages/BuildTemplate";
import NoMatch from "./pages/NoMatch";
import Questionaire from "./pages/Questionaire";
import FindForm from "./pages/FindForm";
import Autofill from "./pages/Autofill";
import ButtonAppBar from "./components/NavigationBar/Navigation";
import Footer from "./components/Footer/Footer";
import Jumbotron from "./components/Jumbotron";
import ManagePatrons from "./pages/ManagePatrons";
import ManageForms from "./pages/ManageForms";
import BuildTemplateById from "./pages/BuildTemplateById";
import ViewTemplate from "./pages/ViewTemplate";


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
          <Route exact path="/buildTemplate" component={BuildTemplate}/>
          <Route exact path="/ManagePatrons" component={ManagePatrons}/>
          <Route exact path="/manageForms" component={ManageForms}/>
          <Route exact path="/autofill" component={Autofill}/>
          <Route exact path ="/storage" component={FindForm}/>
          <Route exact path="/buildTemplate/:id" component={BuildTemplateById} />
          <Route exact path="/template/:id" component={ViewTemplate}/>
          <Route component={NoMatch} />
          {/* <Route exact path="/filled/:id" component={ViewFilled}/> */}
        </Switch>
      </div>
    </Router>
    <Footer />
  </div>

  
)};
}

export default App;