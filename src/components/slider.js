<<<<<<< HEAD
import React from 'react'

import '../assets/css/slider.css'
import { Container } from 'react-materialize';

export default props => {
  return (
    <div className='slider relative grey lighten-4'>
      <Container className='before-after-content' data-content='WHAT SAY ABOUT US'>
        
        <div className="slider-item red">

          <p className="paroles">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quisquam
            sequi ducimus error est debitis necessitatibus
            iusto ea, facere ut tempora nam.
        </p>

          <div className="citation">
            <cite>Sven Bender</cite> <br />
            <strong>CEO OF DAYENIO</strong>, Setif Ageria
          </div>

        </div>

        <div className="slider-item green">

          <p className="paroles">
            22222222222222222222222 consectetur adipisicing elit. Laboriosam quisquam
            sequi ducimus error est debitis necessitatibus
            iusto ea, facere ut tempora nam.
        </p>

          <div className="citation">
            <cite>2222222222222222r</cite> <br />
            <strong>CEO OF DAYENIO</strong>, Setif Ageria
          </div>

        </div>

        <div className="slider-item blue">

          <p className="paroles">
            3333333333333333 consectetur adipisicing elit. Laboriosam quisquam
            sequi ducimus error est debitis necessitatibus
            iusto ea, facere ut tempora nam.
        </p>

          <div className="citation">
            <cite>2222222222222222r</cite> <br />
            <strong>CEO OF DAYENIO</strong>, Setif Ageria
          </div>

        </div>


      </Container>
    </div>
  )
}
=======
import React from 'react'
import debounce from 'lodash.debounce';

import '../assets/css/slider.css'
import { Container } from 'react-materialize';

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

          <SliderItem
            name='Sven bender'
            location='Setif Algeria'
            description={`1111111111111111 consectetur adipisicing elit. Laboriosam quisquam
            sequi ducimus error est debitis necessitatibus
            iusto ea, facere ut tempora nam.`}
            post='CEO DAYENIO'
            active
            data-index='1'
          />

          <SliderItem
            name='Sven bender'
            location='Setif Algeria'
            description={`22222222222222222222222 consectetur adipisicing elit. Laboriosam quisquam
            sequi ducimus error est debitis necessitatibus
            iusto ea, facere ut tempora nam.`}
            post='CEO DAYENIO'
            data-index='2'
          />

          <SliderItem
            name='Sven bender'
            location='Setif Algeria'
            description={`333333333333333333333 consectetur adipisicing elit. Laboriosam quisquam
            sequi ducimus error est debitis necessitatibus
            iusto ea, facere ut tempora nam.`}
            post='CEO DAYENIO'
            data-index='2'
          />

          <SliderItem
            name='Sven bender'
            location='Setif Algeria'
            description={`444444444444444444442222222222222 consectetur adipisicing elit. Laboriosam quisquam
            sequi ducimus error est debitis necessitatibus
            iusto ea, facere ut tempora nam.`}
            post='CEO DAYENIO'
            data-index='2'
          />

        </Container>
      </div>
    )
  }
}
>>>>>>> Finished a get in touch but contact form donsnt work yet
