import React from 'react'
import { Link } from 'gatsby'
import debounce from 'lodash.debounce';

import Layout from '../components/layout';
import Image from '../components/image';
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
   * @return {Boolean} true if elem is in viewport otherwise false
   */
  isOnViewport = elem => {
    let rect = elem.getBoundingClientRect();
    return (
      rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top >= 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.left >= 0 
    )
  }

  /**
   * fired when user scroll
   * @param {DOMEvent} e domevevtn object 
   */
  _onScroll(e) {
    let animeNodes = document.querySelectorAll('.js-anime');
    animeNodes.forEach(nodeElem => {
      if (this.isOnViewport(nodeElem)) {
        nodeElem.className += ' anime-from-down';
        nodeElem.className = nodeElem.className.replace(' js-anime', '')
      }
    });
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
