import React from 'react';

import { Container } from 'react-materialize';
import Layout from '../components/layout';
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
    <Layout footerPaddingTop >
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
            title='Hire membre/s of our team'
            description={`You need a developer (front-end, back-end or full-stack), designer or our team, 
            so you are at the right place. We can work to help your brand/agency to grow up & reach more costumers.
            We work remotly or on office it depend to you & your entreprise.`}
            />


          <ServiceItem
            number='2'
            title='Build Web application &amp; website'
            description={`We build websites that make an impact and create true Internet Presence.
            From responsive websites, content management systems to enterprise builds, 
            we provide full stack development to meet any creative and technological requirements. 
            The result is a better user experience, accessibility and enhanced brand recognition for our customers.`}
            />

          <ServiceItem
            number='3'
            title='Ecommerce'
            description={`If your Web presence requires eCommerce, we will guide you to the right solution.
            We have years of experience working with a variety of platforms, including woocommerce,
            and will recommend the best platform based on your budget and requirements. 
            Or maybe hire a on or more than on developer of our team to help you & will build your product
            to enhance your agency or brand & to grow up.`}
            />

          <ServiceItem
            number='4'
            title='Mobile Apps'
            description={`We make Android & IOS applications. We take your idea (no matter how crazy) 
            and build it into a stunning mobile application that your users will love.
            Our focus is on product driven apps (apps that do something) rather 
            than campaign driven apps (apps that sell something). `}
          />

          <ServiceItem
            number='5'
            title='Concepting & Strategy'
            description={`There are numerous reasons why we’ve had multiple apps featured in app store. 
            Probably one of the biggest is the solid design behind everything we do. In a crowded marketplace, 
            the perfect design will help your product stand out. It’s the first touchpoint you’ll have
             with users, and it’s important to make it count. `}
          />

          <ServiceItem
            number='6'
            title='Design & UI/UX'
            className='mb-0'
            description={`ogos are certainly a strong, symbolic asset for any brand. 
            At the same time, a logo isn’t the only way to define an organisation. 
            Visual language, such as colours, graphics, imagery, 
            typography & tone-of-voice all culminate in creating a 
            consistent and cohesive identity that will communicate 
            your values, positioning and personality.We temper our belief in change with 
            a conviction that it must be carefully managed. 
            We study the options. We identify precisely where you need to go. 
            Then, and only then, do we look at ways of getting you there.`}
          />

        </Container>

        <GetStarted />

      </div>

    </Layout>
  )
}
