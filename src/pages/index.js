import React from 'react'
//import { Link } from 'gatsby'
import debounce from 'lodash.debounce';

import Layout from '../components/layout';
//import Image from '../components/image';
import SEO from '../components/seo';
import Jumbotron from '../components/jumbotron';
import MainSection from '../components/MainSection';

class IndexPage extends React.Component {

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
    if( window !== undefined ) {
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

  /**
   * fired when user scroll
   * @param {DOMEvent} e domevevtn object 
   */
  _onScroll() {
    if( window !== undefined) {
      let animeNodes = document.querySelectorAll('.js-anime');
      let parallaxNode = document.querySelector('.js-parallax.right-section');
      let parallaxNodeLeft = document.querySelector('.js-parallax.left-section');

      animeNodes.forEach(nodeElem => {
        if (this.isOnViewport(nodeElem, true)) {
          nodeElem.className += ' anime-from-down';
          nodeElem.className = nodeElem.className.replace(' js-anime', '')
        }
      });

      sessionStorage.__last_parallax_scrollY = sessionStorage.__last_parallax_scrollY || 0;


      if (parallaxNode && parallaxNodeLeft && window.innerWidth > 600 && this.isOnViewport(parallaxNode)) {

        if (window.scrollY > parseInt(sessionStorage.__last_parallax_scrollY)) {
          let lastTop = window.getComputedStyle(parallaxNode).getPropertyValue('top');
          let lastTopLeft = window.getComputedStyle(parallaxNodeLeft).getPropertyValue('top');
          parallaxNode.style.top = `${parseInt(lastTop) + 8}px`;
          parallaxNodeLeft.style.top = `${parseInt(lastTopLeft) - 8}px`;
        } else {
          let lastTop = window.getComputedStyle(parallaxNode).getPropertyValue('top');
          let lastTopLeft = window.getComputedStyle(parallaxNodeLeft).getPropertyValue('top');
          parallaxNode.style.top = `${parseInt(lastTop) - 8}px`;
          parallaxNodeLeft.style.top = `${parseInt(lastTopLeft) + 8}px`;
        }

      }
      sessionStorage.__last_parallax_scrollY = window.scrollY;

    }
  }

  componentDidMount = () => {
    if( window !== undefined ) 
      window.addEventListener("scroll", e => this.emitDebounce(e));

  }
  

  render() {
    return (
      <Layout>
        <SEO title="DayenIO" keywords={[
          `dayenio`, `dayenio tech`, `web`, `web application`, `freelance developer`, `developers`, `designers`, `freelance designers`, 
          `make logo`, `build mobile app`, `android`, `ios`, `android app`, `ios app`, `website`, `hire a developer`, `front-end developers`, 
          `back-end developers`, `hire fullstack developer`, `fullstack developer`, `ui`, `ux`, `ui front-end developer`, `flayer designer`, 
          `logo maker`, `remote job`, `work from world`, 'digital', `marketing digital`, `strategy digital`, `javascript`, `php`, `wordpress`, 
          `nodejs`, `react`, `react.js`, `reactJS`, `mysql`, `mongodb`, `react-native`, `javascript developer`, `php developer`, `wordpress developer`,
          `nodejs developer`, `react developer`, `react.js developer`, `reactJS developer`, `mysql developer`, `mongodb developer`, 
          `react-native developer`, `javascript freelancer`, `php freelancer`, `wordpress freelancer`,
          `nodejs freelancer`, `react freelancer`, `react.js freelancer`, `reactJS freelancer`, `mysql freelancer`, `mongodb freelancer`,
          `react-native freelancer`, 'JAM stack', 'JAM stack freelancer', 'JAM stack developer'
          ]} />
        <Jumbotron />
        <MainSection />
      </Layout>
    )
  }
} 

export default IndexPage
