import React from 'react'
import { Link } from 'gatsby'

import debounce from 'lodash.debounce';
import PropTypes from 'prop-types'

import { LinkItem } from './sharedui';

import 'materialize-css';
import '../assets/css/navbar.css';
import 'materialize-css/dist/css/materialize.min.css';

export default class header extends React.Component {
  
  mobileBtn = React.createRef()
  navbarRef = React.createRef()

  
  constructor(props) {
    super(props);
    this.emitScroll = debounce(this.windowScrollListener, 250);
    //this.windowScrollListener = this.windowScrollListener.bind(this);
  }

  /**
   * show menu when user click a burger button
   * @param {DOMEvent} e domevent receive when a listener has been triggered 
   */
  _onClickMobileBtn = (e) => {
    e.preventDefault();
    let { target } = e;
    if (!~target.className.indexOf('active') ) {
      target.className += ' active fullscreen';
      document.querySelector(".top-navbar").className += ' visible'
    } else {
      target.className = target.className.replace(' active fullscreen', ' ');
      document.querySelector(".top-navbar").className = 'top-navbar z-depth-0';
    } 
  }

  /**
   * window scroll listener triggered when user scroll
   * @param {DOMEvent} e domevent @see firefox.docs
   */
  windowScrollListener (e) {
    console.log("______________", this)
    let currentClasses = this.navbarRef.current.className;
    let scrollY = window.scrollY;
    console.log("scroll")
    if (
      sessionStorage.__last_scrollY > scrollY &&
      !~currentClasses.indexOf(' fixed-top')
    ) {
      this.navbarRef.current.className += ' fixed-top';
    } else if (
      sessionStorage.__last_scrollY < scrollY &&
      currentClasses.indexOf(' fixed-top')
    ) {
      this.navbarRef.current.className = currentClasses.replace(' fixed-top', '');

    }
    sessionStorage.__last_scrollY = scrollY;
  }

  _onScroll = () => {
    let { current : navbarElem } = this.navbarRef;
    window.addEventListener('scroll', (e) => {
      //console.log("------------------->  ", navbarElem)
      let currentClasses = navbarElem.className;
      let scrollY = window.scrollY;
      let styledElem = navbarElem.style;
      //console.log("scroll")
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
    })
  } 

  /**
   * window load to init some sessionstorage value
   */
  _onLoad = () => {
    window.addEventListener('load', e => {
      sessionStorage.__last_scrollY = window.scrollY;
      this._onScroll()
    })
  }

  componentWillMount = () => {
    this._onLoad();
  }
  

  render() {
    return (
      <>
      <nav className='top-navbar z-depth-0' ref={this.navbarRef}>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">DAYENIO</Link>
          <a href="#" onClick={this._onClickMobileBtn} ref={this.mobileBtn} id='btn-mobile' className="btn-mobile-menu js-mobile-menu-trigger" role="button">
            <span></span>
          </a>
          <ul id="" className="hide-on-medium-and-down">
            <LinkItem to='/' label='Home' className='navbar-link' />
            <LinkItem to='/page-2' label='About' className='navbar-link' />
            <LinkItem to='/page-2' label='Services' className='navbar-link' />
          </ul>
          <ul className="right hide-on-medium-and-down">
            <LinkItem to='/page-2' label='Contact Us' className='navbar-link' />
            <LinkItem to='/page-2' label='Estimate' className='navbar-link estimate-btn green-bg white-text' />
          </ul>
        </div>
      </nav>
      <div className="fixed-fake"></div>
      </>
    );
  }
}
