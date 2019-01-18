import React from 'react'
import { Container, Row, Col, } from 'react-materialize';

import '../assets/css/hero.css'

const hero = props => {
  return (
    <div className='hero'>
      <Row>
        <Col s={12} m={6} className='left-section'>
          <Container>
            <h2 className='before-after-content' data-content='Our Jobs'>
              Apps Development
            </h2>
            <p>To help brands and people for grow up and be succeesfull</p>
            <ul className='services'>
              <li>Build both <strong>Android</strong> and/or <strong>IOS</strong> app</li>
              <li>Make a <strong>website</strong> or <strong>web app</strong></li>
              <li><strong>Hire a developers</strong> (frot/back)-end</li>
            </ul>
          </Container>
        </Col>
        <Col s={12} m={6} className='right-section mt-0 white'>
          <Container>
            <h2 className='before-after-content' data-content='Our Jobs'>
              Design &amp; Marketing
            </h2>
            <p>Flayers, logo, videos or market strategy</p>
            <ul className='services'>
              <li>Build both <strong>Android</strong> and/or <strong>IOS</strong> app</li>
              <li>Make a <strong>website</strong> or <strong>web app</strong></li>
              <li><strong>Hire a developers</strong> (frot/back)-end</li>
            </ul>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default hero
