import React from 'react';
import { Link } from 'gatsby';
import { Row, Col, Button } from 'react-materialize';
import { FormattedMessage } from 'react-intl';

//import debounce from 'lodash.debounce';
import '../assets/css/jumbotron.css';
import heroDevelopers from '../assets/images/hero-developers.svg';
import blueBg from '../assets/images/bg-blue.svg';


export default class Jumbotron extends React.Component {

  constructor(props){
    super(props);
    this.emitDebouce = this.slideUpCurrentBadge;
  }

  /**
   * slide some badges element list from bottom
   * & show them to user after 1.5s between each one
   */
  slideUpCurrentBadge = () => {
    if( document !== undefined ) {
      let badge = document.querySelector('.badge.slideup');
      if (badge) {
        let index = parseInt(badge.getAttribute('data-index'));
        setTimeout(() => {
          let badge = document.querySelector('.badge.slideup');
          if (badge) {
            index = index < 3 ? (index + 1) : 0;
            badge.className = badge.className.replace(' slideup', '');
            document.querySelectorAll('.badge')[index].className += ' slideup';
            this.slideUpCurrentBadge()
          }
        }, 1500);
      }
    }
  }

  componentDidMount = () => {
    this.emitDebouce();
  }

  render() {
    return (
      <div className="jumbotron">
        <>
          <Row>
            <Col s={12} m={6} className='jumbotron-left'>
              <h1 className='jumbotron-title before-after-content' data-content='We Are'>
                <span className="full-width-disapear js-desapear-bg"></span>
                DayenIO.
            </h1>
              <div className='section'>
                <FormattedMessage id='home-jumbotron-description-1' />&nbsp;
                <div className='services-list'>
                    <strong className='badge website slideup' data-index='0'>Website.</strong>
                    <strong className='badge ios' data-index='2'>Web app.</strong>
                    <strong className='badge android' data-index='1'>Android app.</strong>
                    <strong className='badge graphic' data-index='3'>Flayer &amp; logo.</strong>
                    <strong className='badge graphic' data-index='4'>Videos.</strong>
                  </div><br />
                <FormattedMessage id='home-jumbotron-description-2' />&nbsp;
                <strong className='badge-underline'><FormattedMessage id='home-jumbotron-description-3' /></strong>&nbsp;
                <FormattedMessage id='home-jumbotron-description-4' /><br />
                <FormattedMessage id='home-jumbotron-description-5' />
                <strong className='badge-underline' ><FormattedMessage id='home-jumbotron-description-6' /></strong>
            </div>
            </Col>
            <Col s={12} m={6} className='jumbotron-right'>
              <img src={blueBg} className='responsive-image bg-blue' alt='blue wgradient background' />
              <img src={heroDevelopers} className='responsive-image' alt='building web app' />
            </Col>
          </Row>
          <Button className="scroll-indicator z-depth-4">
            <Link to='/what-we-do'><FormattedMessage id='home-jumbotron-description-button' /></Link>
          </Button>
        </>
      </div>
    );
  }
}
