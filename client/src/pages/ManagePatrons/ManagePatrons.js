import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid"; 
import Jumbotron from "../../components/Jumbotron";
import PatronsTable from "./ManagePatronsTable/table";

class ManagePatrons extends Component {

    state = {
        username: "",
        firstName: "", 
        name: "Manage Patrons"
      }

render() {
    return(

        <div>
            <Jumbotron name={this.state.name} children={this.state.name} />
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <input class="form-control form-control-lg" type="text" placeholder="Search Your Patrons"></input>
                        <PatronsTable />
                        

                    </Col>
                </Row>
            </Container>
        </div>

    )
}
};

export default ManagePatrons;