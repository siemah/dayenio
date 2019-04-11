import React from 'react'
import { Link } from 'gatsby'
import { FormattedMessage } from 'react-intl';

import { LinkItem } from './sharedui';

import '../assets/css/navbar.css';

const header = (props) => {
  let { currentLang, langs } = props;
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
  const LangsLinkItem = langs.map(lang =>
    currentLang.toLowerCase() !== lang.langKey.toLowerCase() &&
    <LinkItem
      to={lang.link}
      key={lang.langKey}
      label={lang.langKey}
      className='navbar-link'
      selected={lang.selected}
     />
 );
  currentLang = currentLang === 'en'? '' : currentLang;

  return (
    <>
    <nav className='top-navbar z-depth-0' id='main-menu'>
      <div className="nav-wrapper">
        <Link to={`/${currentLang}`} className="brand-logo">DAYENIO</Link>
        <a href="#main-menu" aria-labelledby='main-menu' onClick={_onClickMobileBtn} id='btn-mobile' className="btn-mobile-menu js-mobile-menu-trigger" role="button">
          <span></span>
        </a>
        <ul id="" className="hide-on-medium-and-down">
          <LinkItem to={`/${currentLang}`} labelId='home' className='navbar-link' />
          <LinkItem to={`/${currentLang}/what-we-do`} labelId='What We Do' className='navbar-link' />
          <LinkItem to={`/${currentLang}/our-works`} labelId='our works' className='navbar-link' />
        </ul>
        <ul className="right hide-on-medium-and-down">
          { LangsLinkItem }
          <LinkItem to={`/${currentLang}/about-us`} labelId='about us' className='navbar-link' />
          <LinkItem to={`/${currentLang}/get-in-touch`} labelId='Get In Touch' className='navbar-link estimate-btn green-bg white-text' />
        </ul>
      </div>
    </nav>
    <div className="fixed-fake"></div>
    </>
  );

}
export default header
