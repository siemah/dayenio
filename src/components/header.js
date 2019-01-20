
import React from 'react'
import { Link } from 'gatsby'

import { LinkItem } from './sharedui';

//import 'materialize-css';
import '../assets/css/navbar.css';

const header = props => {

  
  let _onClickMobileBtn = (e) => {
    e.preventDefault();
    let { target } = e;
    if (typeof window !== `undefined` ) {
      if (!~target.className.indexOf('active')) {
        target.className += ' active fullscreen';
        document.querySelector(".top-navbar").className += ' visible'
      } else {
        target.className = target.className.replace(' active fullscreen', ' ');
        document.querySelector(".top-navbar").className = 'top-navbar z-depth-0';
      } 
    }
  }

  return (
    <>
    <nav className='top-navbar z-depth-0' id='main-menu'>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">DAYENIO</Link>
          <a href="#main-menu" aria-labelledby='main-menu' onClick={_onClickMobileBtn}  id='btn-mobile' className="btn-mobile-menu js-mobile-menu-trigger" role="button">
          <span></span>
        </a>
        <ul id="" className="hide-on-medium-and-down">
          <LinkItem to='/' label='Home' className='navbar-link' />
          <LinkItem to='/what-we-do' label='What We Do' className='navbar-link' />
          <LinkItem to='/page-2' label='Services' className='navbar-link' />
        </ul>
        <ul className="right hide-on-medium-and-down">
          <LinkItem to='/page-2' label='' className='navbar-link' />
          <LinkItem to='/get-in-touch' label='Get In Touch' className='navbar-link estimate-btn green-bg white-text' />
        </ul>
      </div>
    </nav>
    <div className="fixed-fake"></div>
    </>
  );

}
export default header
