import React from 'react';
import { useContext } from 'react';
import Home from './Home';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>About Page</h1>
          <p>Welcome to About</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
