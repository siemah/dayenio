import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Navbar, Button } from 'react-materialize'
import { LinkItem } from './sharedui';
import 'materialize-css';
import '../assets/css/navbar.css';
import 'materialize-css/dist/css/materialize.min.css';


const Header = ({ siteTitle }) => (
  <nav className='top-navbar z-depth-0'>
    <div class="nav-wrapper z-depth-0">
      <ul id="" class="hide-on-med-and-down">
        <LinkItem to='/' label='Home' className='navbar-link' />
        <LinkItem to='/About' label='About' className='navbar-link' />
        <LinkItem to='/Services' label='Services' className='navbar-link' />
      </ul>
      <a href="#" class="brand-logo">DAYENIO</a>
      <ul class="right hide-on-med-and-down">
        <LinkItem to='/Services' label='Contact Us' className='navbar-link' />
        <LinkItem to='/Services' label='Estimate' className='navbar-link green-bg white-text' />
      </ul>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
