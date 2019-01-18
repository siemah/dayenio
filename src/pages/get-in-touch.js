
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
            <Container>

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
              

              <form className='contact-form relative' onSubmit={_onSubmit}>


                <Row>
                  <h2><span>Contact</span> DayenIO.</h2>
                </Row>
                <Row>
                  <Input s={12} m={6} ref={fnameRef} name='fname' label="Full Name*" />
                  <Input s={12} m={6} ref={emailRef} name='email' type="email" label="Email*" />
                  <Input s={12} m={6} ref={telRef} name='tel' type='tel' label="Phone*" />
                  <Input s={12} m={6} ref={subjectRef} name='subject' label="Subject*" />
                </Row>
                <Row className='relative'>
                  <Input s={12} name='message' ref={messageRef} label='Message*' rows='15' type='textarea' />
                  <Button className='z-depth-0'>Send</Button>
                </Row>
                <Row className='phone-contact'>
                  <div className='col s12 m6'>
                    <img src={mobile} alt="mobile image"/>
                    Or just pick up the phone.
                  </div>
                  <div className='col s12 m6'>
                    <a href="tel:+213771356409">+ 213 771 356 409</a>
                  </div>
                </Row>
                <Row>
                  <p>
                    This form is protected by Invisible reCAPTCHA
                    (<a href="https://policies.google.com/privacy?hl=en">Privacy</a>,&nbsp;
                    <a href="https://policies.google.com/terms?hl=en">Terms</a>)
                  </p>
                </Row>
              </form>

            </Container>
          </Col>

        </Row>

        <Slider />

      </div>
      
    </Layout>
  )
}
