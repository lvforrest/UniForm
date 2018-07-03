import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import BuildTemplate from "./pages/BuildTemplate";
import BuildTemplateById from "./pages/BuildTemplateById"
import ViewTemplate from "./pages/ViewTemplate"
import NoMatch from "./pages/NoMatch";
import ButtonAppBar from "./components/NavigationBar/Navigation";
import Footer from "./components/Footer/Footer";
import Jumbotron from "./components/Jumbotron";

class App extends Component {

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

          {/* <Route exact path="/filled/:id" component={ViewFilled}/> */}

          {/* <Route exact path="/autofill" component={Autofill}/>
          <Route exact path ="/storage" component={FindForm}/> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    <Footer />
  </div>

  
)};
}

export default App;