import React from 'react';
import { Container, Row, Col } from 'react-materialize';
import '../assets/css/jumbotron.css';

export default props => {
  return (
    <div className="jumbotron">
      <Container>
        <Row>
          <Col s={12} m={6} className='jumbotron-left'>
            <h1 className='jumbotron-title' data-content='We Are'>
              <span className="full-width-disapear js-desapear-bg"></span>
              DayenIO.
          </h1>
            <p className='section'>
              You want to make a website, android and/or ios app or graphic design,
              you are in a good hands
          </p>
          </Col>
          <Col s={12} m={6}>
            <h1>msqkd qs dqls dkqs dkq dkqmsdkqmsdqms dqms dkqsdk</h1>
          </Col>
        </Row>
      </Container>
    </div>    
  );
}