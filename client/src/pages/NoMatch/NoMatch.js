import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import "./NoMatch.css";

const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
            <span role="img" aria-label="Sad Unicorn">
            <img src={require('./404.png')}  id="sadunicorn" />
            </span>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;
