import React from 'react'
import { Link } from 'gatsby'
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'react-materialize';
import IconItem from './IconItem';

import strategy from '../assets/images/strategy.svg';
import development from '../assets/images/development.svg';
import design from '../assets/images/design.svg';
import marketing from '../assets/images/marketing.svg';
// brands
import wellness from '../assets/images/logos/brands/wellness.png'
import shahrani from '../assets/images/logos/brands/shahrani.png'
import inptic from '../assets/images/logos/brands/inptic.jpg'
import aalladine from '../assets/images/logos/brands/aalladine.com.png'

import '../assets/css/main-section.css'
import Button from 'react-materialize/lib/Button';

const MainSection = props => {
  return (
    <div>

      <Container className='custom-container'>
        <Row className='whatwedo-section'>
          <Col s={12} l={5} className='left-section js-anime anime'>
            <h2 className='before-after-content' data-content='WHAT WE DO'><FormattedMessage id='home-mainsection-title-1' /></h2>
            <p>
              <FormattedMessage id='home-mainsection-description-1' /><br />
              <FormattedMessage id='home-mainsection-description-2' />
            </p>
            <div>
              <Link to='/what-we-do' ><FormattedMessage id='home-jumbotron-description-button' /></Link>
            </div>
          </Col>
          <Col s={12} l={7} className='right-section'>
            <Row>
              <Col s={12} m={6}>
                <IconItem source={strategy} label='Strategy' descriptionId='home-mainsection-strategy' />
              </Col>
              <Col s={12} m={6}>
                <IconItem source={marketing} label='Marketing' descriptionId='home-mainsection-marketing' />
              </Col>
            </Row>
            <Row>
              <Col s={12} m={6}>
                <IconItem source={design} label='Design' descriptionId='home-mainsection-design' />
              </Col>
              <Col s={12} m={6}>
                <IconItem source={development} label='Developement' descriptionId="home-mainsection-development" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <div className='brands-section'>

        <div className='left-section col s12 m7 js-parallax' data-direction='up'>

          <Container>


            <h2 className="before-after-content" data-content='BRANDS'><FormattedMessage id='home-mainsection-brands-title-1' /></h2>

            <p><FormattedMessage id='home-mainsection-brands-description-1' /></p>

            <div className="brands-logo row">
              <Col s={6} m={3} className='center'>
                <img src={aalladine} height='80' alt="aalladine" /><br />
                <strong>Aalladine</strong>
              </Col>
              <Col s={6} m={3} className='center'>
                <img src={wellness} height='80' alt="wellness" /><br />
                <strong>Wellness qatar</strong>
              </Col>
              <Col s={6} m={3} className='center'>
                <img src={shahrani} height='115' height='80' alt="al shahrani" /><br />
                <strong>Al Shahrani</strong>
              </Col>
              <Col s={6} m={3} className='center'>
                <img src={inptic} height='80' alt="I.N.P.T.I.C" /><br />
                <strong>I.N.P.T.IC</strong>
              </Col>
            </div>

          </Container>

        </div>

        <div className='right-section js-parallax' data-direction='down'>
          <Button className='z-depth-0'>
            <Link to='/our-works' alt='See what we build to this brands'><FormattedMessage id='home-jumbotron-description-button' /></Link>
          </Button>
        </div>

      </div>

    </div>
  )
};

export default MainSection;
