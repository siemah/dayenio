import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';

import { Container } from 'react-materialize';
import Layout from '../components/layout/en';
import SEO from '../components/seo';
import Hero from '../components/hero';
import ServiceItem from '../components/serviceItem';
import ImageIcon from '../components/imageIcon';
import GetStarted from '../components/get-started';

import mysql from '../assets/images/logos/mysql.svg';
import nodejs from '../assets/images/logos/nodejs.svg';
import js from '../assets/images/logos/js.svg';
import reactjs from '../assets/images/logos/reactjs.svg';
import expressjs from '../assets/images/logos/expressjs.svg';
import php from '../assets/images/logos/php.svg';
import android from '../assets/images/logos/android.svg';
import ios from '../assets/images/logos/ios.svg';
import photoshop from '../assets/images/logos/photoshop.svg';
import laravel from '../assets/images/logos/laravel.svg';
import python from '../assets/images/logos/python.svg';
import html from '../assets/images/logos/html.svg';
import bootstrap from '../assets/images/logos/bootstrap.svg';
import mongodb from '../assets/images/logos/mongodb.svg';
import webpack from '../assets/images/logos/webpack.svg';
import wordpress from '../assets/images/logos/wordpress.svg';

import '../assets/css/what-we-do.css';

export default props => {


  return (
    <PageTransition
      defaultStyle={{
        transition: 'right 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
        right: '100%',
        position: 'absolute',
        width: '100%',
      }}
      transitionStyles={{
        entering: { right: '0%' },
        entered: { right: '0%' },
        exiting: { right: '100%' },
      }}
      transitionTime={500} >
    <Layout
      location={props.location}
      footerPaddingTop >
      <SEO title="Waht We Do - DayenIO services" keywords={[
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

      <div className='what-we-do-page'>

        <Hero />

        <div className="technos-use grey lighten-5 center">

          <Container>

            <h2 className='technos-title grey lighten-5 relative anime js-anime'>
              We use the <strong>right tools</strong> and <strong>technologies </strong>
              to achieve the <strong>best products</strong>
            </h2>

            <div className="techs">
              <ImageIcon className='js-fading opacity-0' source={mysql} alt='mysql logo' />
              <ImageIcon className='js-fading opacity-0' source={js} alt='javascript logo' />
              <ImageIcon className='js-fading opacity-0' source={nodejs} alt='nodejs logo' />
              <ImageIcon className='js-fading opacity-0' source={reactjs} alt='reactjs logo' />
              <ImageIcon className='js-fading opacity-0' source={expressjs} alt='expressjs logo' />
              <ImageIcon className='js-fading opacity-0' source={php} alt='php logo' />
              <ImageIcon className='js-fading opacity-0' source={android} alt='android logo' />
              <ImageIcon className='js-fading opacity-0' source={ios} alt='ios logo' />
              <ImageIcon className='js-fading opacity-0 photoshop' source={photoshop} alt='photoshop logo' />
              <ImageIcon className='js-fading opacity-0' source={laravel} alt='laravel logo' />
              <ImageIcon className='js-fading opacity-0' source={python} alt='python logo' />
              <ImageIcon className='js-fading opacity-0' source={html} alt='html logo' />
              <ImageIcon className='js-fading opacity-0' source={bootstrap} alt='bootstrap logo' />
              <ImageIcon className='js-fading opacity-0' source={mongodb} alt='mongodb logo' />
              <ImageIcon className='js-fading opacity-0' source={webpack} alt='webpack logo' />
              <ImageIcon className='js-fading opacity-0' source={wordpress} alt='wordpress logo' />
            </div>

          </Container>

        </div>

        <Container className='services'>

          <ServiceItem
            number='1'
            titleId='what-we-do-title-1'
            descriptionId={`what-we-do-description-1`}
            />


          <ServiceItem
            number='2'
            titleId='what-we-do-title-2'
            descriptionId={`what-we-do-description-2`}
            />

          <ServiceItem
            number='3'
            titleId='what-we-do-title-3'
            descriptionId={`what-we-do-description-3`}
            />

          <ServiceItem
            number='4'
            titleId='what-we-do-title-4'
            descriptionId={`what-we-do-description-4`}
          />

          <ServiceItem
            number='5'
            titleId='what-we-do-title-5'
            descriptionId={`what-we-do-description-5`}
          />

          <ServiceItem
            number='6'
            className='mb-0'
            titleId='what-we-do-title-6'
            descriptionId={`what-we-do-description-6`}
          />

        </Container>

        <GetStarted />

      </div>

    </Layout>
    </PageTransition>
  )
}
