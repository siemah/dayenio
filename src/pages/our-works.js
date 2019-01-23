
import React from 'react'

import Layout from '../components/layout';
import SEO from '../components/seo';

import office from '../assets/images/office-work.jpg';
import '../assets/css/our-works.css'
import '../assets/css/shared.css'
import { Container } from 'react-materialize';
import { CaseItem } from '../components/sharedui';


const OurWorksPage = props => (
  <Layout >
    <SEO title="DayenIO works" keywords={[
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
    
    <div className="our-works-page grey lighten-5">

      <Container className='custom-container'>

        <h2 className='technos-title relative '>
          Take a tour and see what we’ve created in the past so we may 
          <strong>create something together</strong> in the future!
        </h2>
        <CaseItem
          brand='Wellness Inc.'
          altLogo='wellnessqatar'
          caseImg={office}
          logo={office}
          link='wellnessqatar.com'
          caseImgAlt='wellnessqatar.com'
          techs={['html5', 'nodejs', 'mongodb']}
          caseDescription='Wellness is a Qatar corporation 
            specialized in healthy and lifestyle.
            Wellness connect between a fitness, body therapy
            and healthy food centers with customers by there website
            wellnessqatar.com. Each customer register can find a banchs of centers 
            choose and reserve. '
      />

      </Container>


    </div>

  </Layout>
);

export default OurWorksPage