import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import 'materialize-css/dist/css/materialize.min.css';

import Header from './header'
import './layout.css'
import Footer from './footer'
import '../assets/css/shared.css'

import appleIcon from '../images/apple-touch-icon.png';
import faveicon32 from '../images/favicon-32x32.png';
import faveicon16 from '../images/favicon-16x16.png';

const Layout = ({ children, footerPaddingTop }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <link rel="apple-touch-icon" sizes="180x180" href={appleIcon} />
          <link rel="icon" type="image/png" sizes="32x32" href={faveicon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={faveicon16} />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            paddingTop: 0,
          }}
        >
          {children}
          <Footer footerPaddingTop/>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout