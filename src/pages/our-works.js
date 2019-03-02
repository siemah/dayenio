
import React from 'react'

import Layout from '../components/layout';
import SEO from '../components/seo';

import ourWorksData from '../assets/files/our-works-data';

import { Container } from 'react-materialize';
import { CaseItem } from '../components/sharedui';
import GetStarted from '../components/get-started'

import '../assets/css/our-works.css'
import '../assets/css/shared.css'

const OurWorksPage = props => (
  <Layout footerPaddingTop={'mb-0'}>
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
    
    <div className="our-works-page grey lighten-5 pt-0">



      <h2 className='technos-title relative center mt-0'>
        <Container className='anime-slideUp'>
          Take a tour and see what we’ve created in the past so we may &nbsp;
          <strong>create something together</strong> in the future!
        </Container>
      </h2>

      {
        ourWorksData.map( work => <CaseItem {...work} />)
      }
        
      <GetStarted />

    </div>

  </Layout>
);

export default OurWorksPage
