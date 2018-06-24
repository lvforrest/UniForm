import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Logo from '../../components/Logo';
import Button from '@material-ui/core/Button';

const Home = () => (
  <Container>
    <Row>
      <Col size="md-12">
      <Logo />
       </Col>
       <Col size="md-12">
       <Button variant="contained" color="default">
      Login
    </Button>
    </Col>
    <Col size="md-12">
    <Button variant="contained" color="default">
      Sign Up
    </Button>
      </Col>
    </Row>
  </Container>
);

export default Home;