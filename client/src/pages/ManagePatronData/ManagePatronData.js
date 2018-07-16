import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button"
import 'react-select/dist/react-select.css';
import Jumbotron from "../../components/Jumbotron";
import PatronManagerTable from "../../components/PatronManagerTable";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Input, } from "../../components/InputField";
import "./ManagePatronData.css";


class ManagePatronData extends Component {
 
  state = {
   patrons: [],
    patron: [],
    patronOption: ""
  }
  componentDidMount() {
    this.loadData();
   
  }
  loadData= () => {
    API.getPatrons()
      .then(res =>
        this.setState({patrons: res.data}),
      )
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const { name, value } = event.target;
 
    this.setState({
      [name]: value
    });
  };

  handleChange = (userOption) => {
    this.setState({userOption: userOption})
    API.getPatron(userOption.value)
      .then(res =>
        this.setState({ patron: res.data}),
      )
      .catch(err => console.log(err));
    }
 onDelete = id => {
  API.deletePatron(id)
  .then(res => window.location.reload())
  .catch(err => console.log(err))
  }

  deleteKey = key => {
    if(key === "firstName" || key === "lastName"){
      alert("Cannot Delete first or last name!")
    } else {
    let object = this.state.patron.patronData
    delete object[key]
    console.log(this.state.patron.patronData)
    this.setState({ patron: { ...this.state.patronData, patronData: object} }, () => {
      API.updatePatron(this.state.userOption.value, {
        patronName: `${this.state.patron.patronData.firstName} ${this.state.patron.patronData.lastName}`,
        patronData: this.state.patron.patronData
      })
    });
  }
}
  patronUpdate = () => {
      let data = this.state.dataType
      let value = this.state.dataValue
      let newData = {[data]: value}
      let object = (this.state.patron.patronData)
      Object.assign(object,newData)
      this.setState({ patron: { ...this.state.patronData, patronData: object} }, () => {
        API.updatePatron(this.state.userOption.value, {
          patronName: `${this.state.patron.patronData.firstName} ${this.state.patron.patronData.lastName}`,
          patronData: this.state.patron.patronData
        })
      });
  }
  
  asdf = () => console.log(this.state)
  render() {
    const { userOption } = this.state;
    const userValue = userOption && userOption.value;
  return(
  <div>
  <Jumbotron name = "Manage Patron Data" />
  <Container fluid>
    <Row>
      <Col size="md-12">
        <h2>My Patrons</h2>
      </Col>
      <Col size="md-12">
      <p><i>Select a patron...</i></p>
      </Col>
    </Row>
      {/* <Col size="md-6">
      <Button onClick = {this.asdf}>asdf</Button>
      </Col> */}
    <Row>
      <Col size = "md-12">
      <div style={{width: '50%', margin: 'auto'}}> 
        <Select
          name="form-field-name2"
          value={userValue}
          onChange={this.handleChange}
          options= {this.state.patrons.map(patron => (
            { value:patron._id, label:patron.patronName } 
        ))} />
        </div>
        </Col>
    </Row>
    <Row>
      <Col size="md-12">
      <br></br>
        <Button onClick = {() => this.onDelete(this.state.userOption.value)} children = "Delete Patron"/>
      </Col>
    </Row>
      <hr></hr>
      <Row>
      <Col size="md-12">
        <h2>Update Patron Data</h2>
      </Col>
      <Col size="md-12">
      <p><i>...and update their information!</i></p>
      </Col>
    </Row>
    <Row>
      <Col size="md-5">
      <Input
                value={this.state.dataType}
                onChange={this.handleInputChange}
                name="dataType"
                placeholder="Key (Email, Address, etc.)"
              />
      </Col>
      <Col size="md-5">
              <Input
                value={this.state.dataValue}
                onChange={this.handleInputChange}
                name="dataValue"
                placeholder="New Information"
              />
      </Col>
      <Col size="md-2">
              <Button onClick = {this.patronUpdate} children = "Update"/>
      {/* ========================================== */}
      {/* Patron Manager Table */}
      {/* ========================================== */}
      </Col>
    </Row>
    <PatronManagerTable 
      children = {this.state.patron.patronData} deleteKey = {this.deleteKey}
      />
  </Container>
  {/* Force footer to bootom */}
  <br></br>
  <br></br>
  <br></br>
  </div>
)}
}

// render() {
//     return(

//         <div>
//             <Jumbotron name={this.state.name} children={this.state.name} />
//             <Container fluid>
//                 <Row>
//                     <Col size="md-12">
//                         <input class="form-control form-control-lg" type="text" placeholder="Search Your Patrons"></input>
//                         <PatronsTable />
                        

//                     </Col>
//                 </Row>
//             </Container>
//         </div>

//     )
// }
// };

export default ManagePatronData;