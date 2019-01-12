import React from 'react'
import { Container, Row, Col } from 'react-materialize';
import { SocialContactItem, LinkItem } from './sharedui';
import telegram from '../assets/images/telegram.svg';
import whatsapp from '../assets/images/whatsapp.svg';
import twitter from '../assets/images/twitter.svg';

import '../assets/css/shared.css';
import '../assets/css/footer.css';

export default (props) => {
  return (
    <div className='main-footer'>
      <Row className='mb-0'>
        <ul className="social-media">
          <SocialContactItem href='whatsapp.com' label='dayenio whatsapp contact' source={whatsapp} />
          <SocialContactItem href='twitter.com' label='dayenio twitter contact' source={twitter} />
          <SocialContactItem href='telegram.com' label='dayenio telegram contact' source={telegram} />
        </ul>
        <div className='website-links'>
          <Row className='mb-0 website-contacts'>
            <Col s={12} m={3} className="website-logo">
              <h2>DayenIO</h2>
            </Col>
            <Col s={12} m={5} className="website-talk">
              <p className='mb-0'>
                We Use Technology to Develop and help a simple or big brand to grow up to achieve
                their goal (reach more customers).<br />
                All that with a great strategie digital.
              </p>
            </Col>
              <Col s={12} m={4}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit culpa minus atque rem.
            </Col>
          </Row>
          <Row className='fake-elem'></Row>
          <Row className='mb-0'>
            <ul className="breadcrumb mb-0">
              <LinkItem  to='/' label='Home' containerClass='breadcrumb-item' />
              <LinkItem  to='/page-2' label='What we do' containerClass='breadcrumb-item' />
              <LinkItem  to='/page-2' label='Who we are' containerClass='breadcrumb-item' />
              <LinkItem  to='/page-2' label='Our works'  containerClass='breadcrumb-item' />
              <LinkItem  to='/page-2' label='Get in touch' containerClass='breadcrumb-item' />
            </ul>
          </Row>
        </div>
      </Row>
    </div>
  )
}
