import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import sadPanda from "../../assets/images/404.png";

const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
      <img src={sadPanda} alt="404: Page Not Found"/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;
