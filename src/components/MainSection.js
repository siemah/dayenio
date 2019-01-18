<<<<<<< HEAD
import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-materialize';
import IconItem from './IconItem';

import strategy from '../assets/images/strategy.svg';
import development from '../assets/images/development.svg';
import design from '../assets/images/design.svg';
import marketing from '../assets/images/marketing.svg';
import '../assets/css/main-section.css'
import Button from 'react-materialize/lib/Button';

const MainSection = props => {
  return (
    <div>

      <Container className='custom-container'>
        <Row className='whatwedo-section'>
          <Col s={12} l={5} className='left-section js-anime anime'>
            <h2 className='before-after-content' data-content='WHAT WE DO'>Innovation and impact.</h2>
            <p>
              Our team has two goals: optimise every user’s experience, 
              and create real impact for our clients. <br />
              We worked with several client from diffirent countries 
              like Qatar, Frensh, Algeria and many others countries.
            </p>
            <div>
              <Link to='/services' >Discover more</Link>
            </div>
          </Col>
          <Col s={12} l={7} className='right-section'>
            <Row>
              <Col s={12} m={6}>
                <IconItem source={strategy} label='Strategy' description='From concept to execution, we create digital campaigns from scratch and show you the way to expand your online presence and make it shine.' />
              </Col>
              <Col s={12} m={6}>
                <IconItem source={marketing} label='Marketing' description='Successful brands anticipate change. So we are always exploring the latest online marketing trends, keeping you ahead of the game.' />
              </Col>
            </Row>
            <Row>
              <Col s={12} m={6}>
                <IconItem source={design} label='Design' description='Smart and responsive are not just buzzwords. It’s the way we act and design. Delivering attention-grabbing graphics that just work is what we do best.' />
              </Col>
              <Col s={12} m={6}>
                <IconItem source={development} label='Developement' description="Beauty is nothing without usability and that's why our in-house devs work together with creatives. We use the latest technology and we never stop learning." />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <div className='brands-section'>

        <div className='left-section col s12 m7 js-parallax' data-direction='up'>

          <Container>
          

            <h2 className="before-after-content" data-content='BRANDS'>Our happy clients.</h2>

            <p>
              Hey, we’re old romantics at heart. For 12+ years, we’ve
              cultivated long-term relationships with leading brands
              and companies.
            </p>

            <div className="brands-logo row">
              <Col s={6} m={3} className='center'>
                <img src={marketing} width='80' alt="brand name" /><br />
                <strong>wellness qatar</strong>
              </Col>
              <Col s={6} m={3} className='center'>
                <img src={marketing} width='80' alt="brand name" /><br />
                <strong>wellness events</strong>
              </Col>
              <Col s={6} m={3} className='center'>
                <img src={marketing} width='80' alt="brand name" /><br />
                <strong>horizon</strong>
              </Col>
              <Col s={6} m={3} className='center'>
                <img src={marketing} width='80' alt="brand name" /><br />
                <strong>wellness qatar</strong>
              </Col>
            </div>

          </Container>

        </div>
        
        <div className='right-section js-parallax' data-direction='down'>
          <Button className='z-depth-0'>
            <Link to='/our-work' alt='See what we build to this brands'>Discover more</Link>
          </Button>
        </div>

      </div>

    </div>
  )
};

export default MainSection; 
=======
import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-materialize';
import IconItem from './IconItem';

import strategy from '../assets/images/strategy.svg';
import development from '../assets/images/development.svg';
import design from '../assets/images/design.svg';
import marketing from '../assets/images/marketing.svg';
import '../assets/css/main-section.css'
import Button from 'react-materialize/lib/Button';

const MainSection = props => {
  return (
    <div>

      <Container className='custom-container'>
        <Row className='whatwedo-section'>
          <Col s={12} l={5} className='left-section js-anime anime'>
            <h2 className='before-after-content' data-content='WHAT WE DO'>Innovation and impact.</h2>
            <p>
              Our team has two goals: optimise every user’s experience, 
              and create real impact for our clients. <br />
              We worked with several client from diffirent countries 
              like Qatar, Frensh, Algeria and many others countries.
            </p>
            <div>
              <Link to='/services' >Discover more</Link>
            </div>
          </Col>
          <Col s={12} l={7} className='right-section'>
            <Row>
              <Col s={12} m={6}>
                <IconItem source={strategy} label='Strategy' description='From concept to execution, we create digital campaigns from scratch and show you the way to expand your online presence and make it shine.' />
              </Col>
              <Col s={12} m={6}>
                <IconItem source={marketing} label='Marketing' description='Successful brands anticipate change. So we are always exploring the latest online marketing trends, keeping you ahead of the game.' />
              </Col>
            </Row>
            <Row>
              <Col s={12} m={6}>
                <IconItem source={design} label='Design' description='Smart and responsive are not just buzzwords. It’s the way we act and design. Delivering attention-grabbing graphics that just work is what we do best.' />
              </Col>
              <Col s={12} m={6}>
                <IconItem source={development} label='Developement' description="Beauty is nothing without usability and that's why our in-house devs work together with creatives. We use the latest technology and we never stop learning." />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <div className='brands-section'>

        <div className='left-section col s12 m7 js-parallax' data-direction='up'>

          <Container>
          

            <h2 className="before-after-content" data-content='BRANDS'>Our happy clients.</h2>

            <p>
              Hey, we’re old romantics at heart. For 12+ years, we’ve
              cultivated long-term relationships with leading brands
              and companies.
            </p>

            <div className="brands-logo row">
              <Col s={6} m={3} className='center'>
                <img src={marketing} width='80' alt="brand name" /><br />
                <strong>wellness qatar</strong>
              </Col>
              <Col s={6} m={3} className='center'>
                <img src={marketing} width='80' alt="brand name" /><br />
                <strong>wellness events</strong>
              </Col>
              <Col s={6} m={3} className='center'>
                <img src={marketing} width='80' alt="brand name" /><br />
                <strong>horizon</strong>
              </Col>
              <Col s={6} m={3} className='center'>
                <img src={marketing} width='80' alt="brand name" /><br />
                <strong>wellness qatar</strong>
              </Col>
            </div>

          </Container>

        </div>
        
        <div className='right-section js-parallax' data-direction='down'>
          <Button className='z-depth-0'>
            <Link to='/our-work' alt='See what we build to this brands'>Discover more</Link>
          </Button>
        </div>

      </div>

    </div>
  )
};

export default MainSection; 
>>>>>>> Finished a get in touch but contact form donsnt work yet
