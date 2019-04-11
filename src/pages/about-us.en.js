import React from 'react'
import { FormattedMessage } from 'react-intl';

import Layout from '../components/layout/en';
import SEO from '../components/seo';
import Container from 'react-materialize/lib/Container';

import '../assets/css/about-us.css'
import { Row, Col } from 'react-materialize';
import GetStarted from '../components/get-started';

const AboutPage = props => (
  <Layout location={props.location} >
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
            <h1><FormattedMessage id="about-you" /></h1>
            <p><FormattedMessage id="about-us-description" /></p>
          </div>
        </Container>
      </div>

      <div className="team-numbers">
        <Row className='mb-0'>
          <Col s={12} l={6} className="left-section white-text">
            <div className='content-item'>
              <h3 className='question'><FormattedMessage id="about-us-said-question" /></h3>
              <p className="answers">
                "<FormattedMessage id='about-us-said-answer'/>"
              </p>
            </div>
          </Col>
          <Col s={12} l={6} className="mt-0  right-section white">
            <Row className='mb-0'>
              <Col s={6} className='relative center'>
                <div>
                  <span>+5</span>
                  <h4>designers &amp; developers</h4>
                </div>
              </Col>
              <Col s={6} className='relative center even'>
                <div className='white-text'>
                  <span>+10</span>
                  <h4><FormattedMessage id='brands' /></h4>
                </div>
              </Col>
            </Row>
            <Row className='mb-0'>
              <Col s={6} className='relative center even'>
                <div className='white-text'>
                  <span>+20</span>
                  <h4>Technologies</h4>
                </div>
              </Col>
              <Col s={6} className='relative center'>
                <div className=''>
                  <span>+6</span>
                  <h4><FormattedMessage id='years' /></h4>
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
