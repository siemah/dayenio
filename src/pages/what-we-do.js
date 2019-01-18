import React from 'react'

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';

//import '../assets/css/what-we-do.css';
import mobile from '../assets/images/mobile.svg'


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

      </div>

    </Layout>
  )
}
