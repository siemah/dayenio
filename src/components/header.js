import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { LinkItem } from './sharedui';
import 'materialize-css';
import '../assets/css/navbar.css';
import 'materialize-css/dist/css/materialize.min.css';

export default class header extends React.Component {
  
  mobileBtn = React.createRef()

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
  

  render() {
    return (
      <nav className='top-navbar z-depth-0'>
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
    );
  }
}
