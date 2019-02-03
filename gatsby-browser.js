/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
//import Layout from "./src/components/Layout"
import { Helmet } from 'react-helmet'

import appleIcon from './src/images/apple-touch-icon.png';
import faveicon32 from './src/images/favicon-32x32.png';
import faveicon16 from './src/images/favicon-16x16.png';

// add some link to page
export const wrapPageElement = ({element, props}) => {
  return (
    <>
      <Helmet>
        <link rel="apple-touch-icon" sizes="180x180" href={appleIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={faveicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={faveicon16} />
      </Helmet>
      {element}
    </>
  )
}

// PWA setup
export const onServiceWorkerUpdateFound = () => { 
  // uncomment this section when website is deployed	
  /*const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }*/
}
