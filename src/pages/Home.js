import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Home Page</h1>
          <p>Welcome to my React Router App!</p>
          <p>You clicked {count} times</p>
          <Button onClick={handleClick}>Click me</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
