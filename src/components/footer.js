
import React from 'react'
import debounce from 'lodash.debounce';
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

  constructor(props) {
    super(props);
    this.emitDebounce = debounce(this._onScroll, 200); // prevent executing imediatly of callback  
    this._onScroll = this._onScroll.bind(this);
  }

  /**
   * check of elem is in viewport of browser window
   * @param {HTMLElement} elem dom element
   * @param {Boolean} inViewport check HTMLElement in viewport is visible to user or is note passed
   * @param {Boolean} lazyLoad verify if use this function to lazy load some external file like image,script ... 
   * @return {Boolean} true if elem is in viewport otherwise false
   */
  isOnViewport = (elem, inViewport = false, lazyLoad = false) => {
    let rect = elem.getBoundingClientRect();
    if (typeof window !== `undefined`) {
      if (inViewport)
        return rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.top >= 0;
      else if (lazyLoad)
        return (
          rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top >= 0 &&
          rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
          rect.left >= 0
        );
      else
        return rect.top < (window.innerHeight || document.documentElement.clientHeight);
    }
  }

  slideUpElements = () => {

    let animeNodes = document.querySelectorAll('.js-anime');

    animeNodes.forEach(nodeElem => {
      //console.log("scrolling", this.isOnViewport(nodeElem, true))
      if (this.isOnViewport(nodeElem, true)) {
        nodeElem.className += ' anime-from-down';
        nodeElem.className = nodeElem.className.replace(' js-anime', '')
      }
    });

  }

  indexParallaxeInverse = () => {

    let parallaxNode = document.querySelector('.js-parallax.right-section');
    let parallaxNodeLeft = document.querySelector('.js-parallax.left-section');
    let scrollY = window.scrollY;    
    if (parallaxNode && parallaxNodeLeft && window.innerWidth > 600 && this.isOnViewport(parallaxNode)) {
      //console.log('index page parallaxe session: %f, windowSrool %f', parseInt(sessionStorage.__parallaxe_scrollY), scrollY );
      if (scrollY > parseInt(sessionStorage.__parallaxe_scrollY)) {
        let lastTop = window.getComputedStyle(parallaxNode).getPropertyValue('top');
        let lastTopLeft = window.getComputedStyle(parallaxNodeLeft).getPropertyValue('top');
        parallaxNode.style.top = `${parseInt(lastTop) + 5}px`;
        parallaxNodeLeft.style.top = `${parseInt(lastTopLeft) - 5}px`;
      } else if (scrollY < parseInt(sessionStorage.__parallaxe_scrollY)) {
        let lastTop = window.getComputedStyle(parallaxNode).getPropertyValue('top');
        let lastTopLeft = window.getComputedStyle(parallaxNodeLeft).getPropertyValue('top');
        parallaxNode.style.top = `${parseInt(lastTop) - 5}px`;
        parallaxNodeLeft.style.top = `${parseInt(lastTopLeft) + 5}px`;
      }
      sessionStorage.__parallaxe_scrollY = scrollY;
    }
  }

  /**
   * fired when user scroll after 200ms for performance
   * @param {DOMEvent} e domevevtn object 
   */
  _onScroll() {
    if (typeof window !== `undefined`) {
      
      // aniate some element from bottom (like element in slider showed from bottom )
      this.slideUpElements();
      // parallax efect at home page
      this.indexParallaxeInverse();
      // show top navbar when user scroll to top of window
      this.showTopNavbar();
      // show fading element 
      this.showFidingElements();
    }
  }

  showTopNavbar = () => {

    // show top navbar when user scroll up
    let navbarElem = document.querySelector('.top-navbar');
    let currentClasses = navbarElem.className;
    let scrollY = window.scrollY;
    if (
      sessionStorage.__last_scrollY > scrollY &&
      !~currentClasses.indexOf(' fixed-top')
    ) {
      navbarElem.className += ' fixed-top';
    } else if (
      sessionStorage.__last_scrollY < scrollY &&
      currentClasses.indexOf(' fixed-top')
    ) {
      navbarElem.className = currentClasses.replace(' fixed-top', '');
    }
    sessionStorage.__last_scrollY = scrollY;
  }

  showFidingElements = () => {
    let _fadingNodes = document.querySelectorAll('.js-fading');
    _fadingNodes.forEach((nodeElem) => {
      if (this.isOnViewport(nodeElem, false)) {
        nodeElem.className += ' anime-fading';
        nodeElem.className = nodeElem.className.replace('js-fading', '');
      }
    });
  }

  /**
     * window load to init some sessionstorage value
     */
  _onLoad = () => {
    if (typeof window !== `undefined`) {
      sessionStorage.__last_scrollY = window.scrollY; 
      sessionStorage.__parallaxe_scrollY = window.scrollY; 
      window.addEventListener("scroll", e => this.emitDebounce(e));
    }
  }

  componentDidMount = () => {
    if (typeof window !== `undefined`) {
      this._onLoad();
      //var elems = document.querySelectorAll('.parallax');
      //Parallax.init(elems);
    }
  }

  
  render () {
    return (
      <div className={`main-footer ${this.props.footerPaddingTop? 'pt-0' : ''}`}>

        <div className="">

          <ul className="social-media left">
            <SocialContactItem href='mailto:hamsikpastore@gmail.com' label='dayenio email' className='s-email red' source={envelope} />
            <SocialContactItem href='https://wa.me/213696581187' label='dayenio whatsapp contact' source={whatsapp} />
            <SocialContactItem href='https://twitter.com/siemahlsidem' label='dayenio twitter contact' source={twitter} />
            <SocialContactItem href='https://t.me/khezetawina' label='dayenio telegram contact' source={telegram} />
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
                      <a href='tel:+213696581187' title='call us'>+231 771 356 409</a>
                    </li>
                    <li>
                      <img src={problem} alt='problem' />
                      <a href='/get-in-touch/' title='get in touch'>Get in touch</a>
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
          <LinkItem to='/what-we-do' label='What we do' containerClass='breadcrumb-item' />
          <LinkItem to='/about-us' label='Who we are' containerClass='breadcrumb-item' />
          <LinkItem to='/our-works' label='Our works' containerClass='breadcrumb-item' />
          <LinkItem to='/get-in-touch' label='Get in touch' containerClass='breadcrumb-item mb-0' />
        </ul>

      </div>
    )
  }
}
