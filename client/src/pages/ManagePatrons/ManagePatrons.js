import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button"
import 'react-select/dist/react-select.css';
import Jumbotron from "../../components/Jumbotron";
import FormManagerTable from "../../components/FormManagerTable";
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class ManagePatrons extends Component {
 
  state = {
   patrons: [],
    filled: [],
    filleds: [],
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

  newForm = () => {
    window.location = `http://${window.location.host}/buildTemplate`
  };
  
  handleChange = (userOption) => {
    let link = `http://${window.location.host}/buildTemplate/${userOption.value}`
    this.setState({userOption: userOption, link: link})
    API.getFilledByPatron(userOption.value)
      .then(res =>
        this.setState({ filleds: res.data}),
      )
      .catch(err => console.log(err));
    }
 onDelete = (id,patronId) => {
   let object = {
     value:patronId
   }
  API.deleteFilled(id)
  .then(res => this.handleChange(object) )
  .catch(err => console.log(err))
  }
  asdf = () => console.log(this.state)
  render() {
    const { userOption } = this.state;
    const userValue = userOption && userOption.value;
  return(
  <div>
  <Jumbotron name = "Manage Patrons" />
  <Container fluid>
    <Row>
      <Col size="md-6">
      <h2>My Patrons</h2>
      </Col>
      <Col size="md-6">
      <Button onClick = {this.newForm}>Create a New Form</Button>
      </Col>
      <Col size = "md-6">
      <Select
        name="form-field-name2"
        value={userValue}
        onChange={this.handleChange}
        options= {this.state.patrons.map(patron => (
          { value:patron._id, label:patron.patronName } 
      ))}
      /> 
      </Col>
      
      </Row>
      <hr></hr>
      <Row>
      <Col size="md-12">
      <FormManagerTable 
      children = {this.state.filleds} onDelete = {this.onDelete}
      />
      </Col>
    </Row>
  </Container>
  {/* Force footer to bootom */}
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
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

export default ManagePatrons;