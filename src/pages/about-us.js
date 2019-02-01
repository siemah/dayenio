import React from 'react'

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from 'react-materialize/lib/Container';

import '../assets/css/about-us.css'
import { Row, Col } from 'react-materialize';
import GetStarted from '../components/get-started';

const AboutPage = props => (
  <Layout >
    <SEO title="About DayenIO" keywords={[
      `dayenio`, `dayenio tech`, `web`, `web application`, `freelance developer`, `developers`, `designers`, `freelance designers`, 
      `make logo`, `build mobile app`, `android`, `ios`, `android app`, `ios app`, `website`, `hire a developer`, `front-end developers`, 
      `back-end developers`, `hire fullstack developer`, `fullstack developer`, `ui`, `ux`, `ui front-end developer`, `flayer designer`, 
      `logo maker`, `remote job`, `work from world`, 'digital', `marketing digital`, `strategy digital`, `javascript`, `php`, `wordpress`, 
      `nodejs`, `react`, `react.js`, `reactJS`, `mysql`, `mongodb`, `react-native`, `javascript developer`, `php developer`, `wordpress developer`,
      `nodejs developer`, `react developer`, `react.js developer`, `reactJS developer`, `mysql developer`, `mongodb developer`, 
      `react-native developer`, `javascript freelancer`, `php freelancer`, `wordpress freelancer`,
      `nodejs freelancer`, `react freelancer`, `react.js freelancer`, `reactJS freelancer`, `mysql freelancer`, `mongodb freelancer`,
      `react-native freelancer`, 'JAM stack', 'JAM stack freelancer', 'JAM stack developer'
      ]} />
    
    <div className="about-us-page">
      
      <div className="relative hero-quote">
        <Container>
          <div className="quote-container anime-slideUp center">
            <h1>It's not about us. It's about you.</h1>
            <p>
              We bring together creative thinking and production expertise to amplify brands 
              and their stories from our state-of-the-art production facilities in The world.
              We are a team of developers, designers and digital nerds. , trying to make you satisfied.
              &nbsp;We hope to work remotly but if you hire us it depend to you.
            </p>
          </div>
        </Container>
      </div>

      <div className="team-numbers">
        <Row className='mb-0'>
          <Col s={12} l={6} className="left-section white-text">
            <div className='content-item'>
              <h3 className='question'>What they said about our works?</h3>
              <p className="answers">
                "They delivered high quality and excellent end-to-end 
                digital solutions, anchored in elegance yet functional.
                The way they approach each project: no matter how crazy and urgent are the 
                ideas and the requests we come up with, DayenIO finds solutions which always deliver."
              </p>
            </div>
          </Col>
          <Col s={12} l={6} className="mt-0  right-section white">
            <Row className='mb-0'>
              <Col s={6} className='relative center'>
                <div>
                  <span>5</span>
                  <h4>designers &amp; developers</h4>
                </div>
              </Col>
              <Col s={6} className='relative center even'>
                <div className='white-text'>
                  <span>+10</span>
                  <h4>clients &amp; brands</h4>
                </div>
              </Col>
            </Row>
            <Row className='mb-0'>
              <Col s={6} className='relative center even'>
                <div className='white-text'>
                  <span>+20</span>
                  <h4>Technologies we use</h4>
                </div>
              </Col>
              <Col s={6} className='relative center'>
                <div className=''>
                  <span>+6</span>
                  <h4>years of experience</h4>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <GetStarted />

    </div>

  </Layout>
);

export default AboutPage