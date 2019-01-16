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
    if( inViewport )
      return rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.top >= 0 ;
    else if(lazyLoad)
      return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top >= 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.left >= 0 
      );
    else 
      return rect.top < (window.innerHeight || document.documentElement.clientHeight) ;
  }

  /**
   * fired when user scroll
   * @param {DOMEvent} e domevevtn object 
   */
  _onScroll() {
    let animeNodes   = document.querySelectorAll('.js-anime'); 
    let parallaxNode = document.querySelector('.js-parallax.right-section'); 
    let parallaxNodeLeft = document.querySelector('.js-parallax.left-section'); 
    
    animeNodes.forEach(nodeElem => {
      if (this.isOnViewport(nodeElem, true)) {
        nodeElem.className += ' anime-from-down';
        nodeElem.className = nodeElem.className.replace(' js-anime', '')
      }
    });

    sessionStorage.__last_parallax_scrollY = sessionStorage.__last_parallax_scrollY || 0;
    

    if (parallaxNode && parallaxNodeLeft && window.innerWidth > 600 && this.isOnViewport(parallaxNode) ) {
      
      if ( window.scrollY > parseInt(sessionStorage.__last_parallax_scrollY) ) {
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

  componentDidMount = () => {
    
    window.addEventListener("scroll", e => this.emitDebounce(e));

  }
  

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Jumbotron />
        <MainSection />
      </Layout>
    )
  }
} 

export default IndexPage
