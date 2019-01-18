
import React from 'react'
import { Container, Row, Col } from 'react-materialize';
import { SocialContactItem, LinkItem } from './sharedui';
import telegram from '../assets/images/telegram.svg';
import whatsapp from '../assets/images/whatsapp.svg';
import twitter from '../assets/images/twitter.svg'; 
import envelope from '../assets/images/envelope.svg'; 
import smartphone from '../assets/images/smartphone.svg'; 
import problem from '../assets/images/problem.svg'; 

import '../assets/css/footer.css';

export default class Footer extends React.Component {
  componentDidMount = () => {
    /*if( typeof window !== `undefined` )
      window.addEventListener("scroll",  e => {
        
      })*/
  }
  
  render () {
    return (
      <div className={`main-footer ${this.props.footerPaddingTop? 'pt-0' : ''}`}>

        <div className="">

          <ul className="social-media left">
            <SocialContactItem href='mailto:hamsikpastore@gmail.com' label='dayenio email' className='s-email red' source={envelope} />
            <SocialContactItem href='//whatsapp.com' label='dayenio whatsapp contact' source={whatsapp} />
            <SocialContactItem href='//twitter.com' label='dayenio twitter contact' source={twitter} />
            <SocialContactItem href='//telegram.com' label='dayenio telegram contact' source={telegram} />
          </ul>

          <div className='website-links left'>

            <Container>
              <Row className='website-contacts'>

                <Col s={12} m={3} className="website-logo">
                  <h2>DayenIO.</h2>
                </Col>

                <Col s={12} m={5} className="website-talk">
                  <p id="strategy" className='mb-0'>
                    We Use Technology to Develop and help a simple or big brand to grow up to achieve
                    their goal (reach more customers).<br />
                    All that with a great strategie digital.
                  </p>
                </Col>

                <Col className='s-disapear' s={12} m={4}>
                  <ul className='old-contacts mb-0 ml-0'>
                    <li>
                      <img src={smartphone} alt='smartphone' />
                      <a href='tel:+231771356409' title='call us'>+231 771 356 409</a>
                    </li>
                    <li>
                      <img src={problem} alt='problem' />
                      <a href='tel:+231771356409' title='call us'>Get in touch</a>
                    </li>
                  </ul>
                </Col>

              </Row>
            </Container>

          </div>

        </div>
        <br clear='both' />
        <ul className="footer-breadcrumb mb-0 ml-0 s-disapear">
          <LinkItem to='/' label='Home' containerClass='breadcrumb-item' />
          <LinkItem to='/page-2' label='What we do' containerClass='breadcrumb-item' />
          <LinkItem to='/page-2' label='Who we are' containerClass='breadcrumb-item' />
          <LinkItem to='/page-2' label='Our works' containerClass='breadcrumb-item' />
          <LinkItem to='/page-2' label='Get in touch' containerClass='breadcrumb-item mb-0' />
        </ul>

      </div>
    )
  }
}
