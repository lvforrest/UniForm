import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import BuildTemplate from "./pages/BuildTemplate";
import BuildTemplateById from "./pages/BuildTemplateById"
import ViewTemplate from "./pages/ViewTemplate"
import NoMatch from "./pages/NoMatch";
import ButtonAppBar from "./components/NavigationBar/Navigation";
import Footer from "./components/Footer/Footer";
import Autofill from "./pages/Autofill";
import ViewFilled from "./pages/ViewFilled";
import ManagePatronData from "./pages/ManagePatronData";
import ManageForms from "./pages/ManageForms";
import ManagePatrons from "./pages/ManagePatrons"
import Jumbotron from "./components/Jumbotron";
import Account from "./pages/Account";
import Login from "./pages/Login";
import API from "./utils/API";
import Landing from "./pages/Landing/landing";
import Presentation from "./pages/Presentation/presentation";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      email: ''
    }

    this.login = this.login.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.login()
  }

  updateUser (obj) {
    this.setState(obj);
  }

  login = ()=>{
    API.getUserLogin(this.state.email)

      if (this.state.email) {
        console.log('user is already saved')

        this.setState({
          loggedIn: true,
          email: this.state.email
        })
      } else {
        this.setState({
          loggedIn: false,
          email: null
        })
      }
    }


  render() {
    return(

    <div className="bodyContainer">
      <Router>
      <div>
      <ButtonAppBar />
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/buildTemplate" component={BuildTemplate}/>
          <Route exact path="/buildTemplate/:id" component={BuildTemplateById} />
          <Route exact path="/template/:id" component={ViewTemplate}/>
          <Route exact path="/manageForms" component={ManageForms}/>
          <Route exact path="/managePatrons" component={ManagePatrons}/>
          <Route exact path="/autofill" component={Autofill}/>   
          <Route exact path ="/signup" component={Account}/>
          <Route
          path="/Login"
          render = {() =>
            <Login
              updateUser={this.updateUser}
            />}
        />
          <Route exact path="/filled/:id" component={ViewFilled}/>
          <Route exact path="/managePatronData" component={ManagePatronData}/>
          <Route exact path ="/login" component={Home}/>
          <Route exact path = "/presentation" component ={Presentation}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    <Footer />
  </div>

             
  );
    }
  }




export default App;