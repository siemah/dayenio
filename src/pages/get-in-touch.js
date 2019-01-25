
import React from 'react'

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Container, Row, Col, Input, Button, Preloader } from 'react-materialize';

import Slider from '../components/slider'

import '../assets/css/get-in-touch.css';
import mobile from '../assets/images/mobile.svg'

const emailRef = React.createRef();
const telRef = React.createRef();
const fnameRef = React.createRef();
const subjectRef = React.createRef();
const messageRef = React.createRef();

export default props => {
  
  const _onSubmit = e => {
    e.preventDefault();
    if( typeof window !== `undefined`) {
      let _activityIndicator = document.querySelector('.js-show');
      _activityIndicator.className = _activityIndicator.className.replace(' hide', '');
      
    } 
  }

  return (
    <Layout footerPaddingTop >
      <SEO title="Get In Touch" keywords={[
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
      
      <div className='get-in-touch-page'>

        <Row className='mb-0'>

          <Col s={12} l={5} className='left-section white'>
            <Container className="anime-slideUp">

              <h2 className='before-after-content' data-content='GET IN TOUCH'>
                <span>Start the </span> Conversation.
              </h2>
                <p>
                  Every beautiful relationship starts with a <strong>simple hello</strong>.
                  So let’s chat. It might just be the start of something memorable.
              </p>
            </Container>
          </Col>

          <Col s={12} l={7} className='right-section relative'>
            
            {
              <Row className="cover-parent shadow js-show hide">
                <div className='child-container'>
                  <Preloader flashing />
                </div>
              </Row>
            }

            <Container>
      <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
  <p>
    <label>Email: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type='submit'>Send</button>
  </p>
</form>

            </Container>
          </Col>

        </Row>

        <Slider />

      </div>
      
    </Layout>
  )
}
