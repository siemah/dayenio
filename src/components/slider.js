
import React from 'react'
import debounce from 'lodash.debounce';

import '../assets/css/slider.css'
import { Container } from 'react-materialize';

import sliderItems from '../assets/files/about-us';

const SliderItem = ({ description, post, name, location, active, ...rest }) => (
  <div className={`slider-item js-slider-item ${active? 'active' : ''}`} {...rest}>

    <p className="paroles">{description}</p>

    <div className="citation">
      <cite>{name}</cite> <br />
      <strong>{post}</strong>, {location}
    </div>

  </div>
);

export default class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.emitDebouce = debounce(this.initSlider, 15000);
  }

  /**
   * initialize slider
   */
  initSlider = () => {
    let _activeItem = document.querySelector('.js-slider-item.active');
    if (_activeItem) {
      setTimeout(() => {
        _activeItem.className = _activeItem.className.replace(' active', '');
        let nextItem = _activeItem.nextElementSibling;
        if ( !nextItem ) {
          let items = document.querySelectorAll('.js-slider-item');
          if( items.length ) items[0].className += " active";
        } else {
          nextItem.className += " active";
        }
        this.initSlider();
      }, 15000);
    }
  }

  componentDidMount = () => {
    if (typeof window !== `undefined`) {
      this.emitDebouce();
    }
  }
  
  render() {
    return (
      <div className='slider relative grey lighten-4'>
        <Container className='before-after-content' data-content='WHAT SAY ABOUT US'>
          {
            sliderItems.map(({name, location, description, post, key, index}) => (
              <SliderItem
                key={key}
                name={name}
                location={location}
                description={description}
                post={post}
                data-index={index}
                active
              />
            ))
          }
          
        </Container>
      </div>
    )
  }
}
