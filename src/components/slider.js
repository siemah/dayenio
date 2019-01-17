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
