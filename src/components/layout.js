import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
if( typeof window !== `undefined`) {
import $ from 'jquery';

import 'materialize-css/dist/css/materialize.min.css';

}


import Header from './header'
import './layout.css'
import Footer from './footer'
import '../assets/css/shared.css'

const Layout = ({ children }) => (
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            paddingTop: 0,
          }}
        >
          {children}
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
