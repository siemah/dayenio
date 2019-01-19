import React from 'react'
import { Container, Row, Col, } from 'react-materialize';

import '../assets/css/hero.css'

const hero = props => {
  return (
    <div className='hero'>
      <Row className='mb-0'>
        <Col s={12} m={6} className='left-section'>
          <Container className='relative anime-slideUp'>
            <h2 className='before-after-content' data-content='Our Jobs'>
              Apps Development
            </h2>
            <p>To help brands and people for grow up and be succeesfull</p>
            <ul className='services'>
              <li className='relative'>Build both <strong>Android</strong> and/or <strong>IOS</strong> app</li>
              <li className='relative'>Make a <strong>website</strong> or <strong>web app</strong></li>
              <li className='relative'><strong>Hire a developers</strong> (frot/back)-end</li>
            </ul>
          </Container>
        </Col>
        <Col s={12} m={6} className='right-section mt-0 white'>
          <Container className='relative anime-slideUp'>
            <h2 className='before-after-content' data-content='Our Jobs'>
              Design &amp; Marketing
            </h2>
            <p>You are an entreprise or not we can work with you</p>
            <ul className='services'>
              <li className='relative'>Create a <strong>Logo</strong> of your brand</li>
              <li className='relative'>Make a <strong>flayer</strong>, <strong>videos</strong></li>
              <li className='relative'>Make your <strong>digital strategy</strong></li>
            </ul>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default hero
