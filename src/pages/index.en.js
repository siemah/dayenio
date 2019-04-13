
import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from '../components/layout/en';
import SEO from '../components/seo';
import Jumbotron from '../components/jumbotron';
import MainSection from '../components/MainSection';

const IndexPage = props => {
  return (
    <PageTransition
      defaultStyle={{
        transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
        left: '100%',
        position: 'absolute',
        width: '100%',
      }}
      transitionStyles={{
        entering: { left: '0%' },
        entered: { left: '0%' },
        exiting: { left: '100%' },
      }}
      transitionTime={500} >
      <Layout
        location={props.location}
       >
        <SEO title="DayenIO" keywords={[
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
        <Jumbotron />
        <MainSection />
      </Layout>
    </PageTransition>
  )
}

export default IndexPage
