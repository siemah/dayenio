import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

// import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';

import 'materialize-css/dist/css/materialize.min.css';

import Header from './header'
import './layout.css'
import Footer from './footer'
import '../assets/css/shared.css'

const Layout = ({ children, location, footerPaddingTop, i18nMessages }) => {
  return (
    <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            languages {
              defaultLangKey
              langs
            }
          }
        }
      }
    `}
      render={data => {
        const url = location.pathname;
        const { langs, defaultLangKey } = data.site.siteMetadata.languages;
        const langKey = getCurrentLangKey(langs, defaultLangKey, url);
        const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/');
        const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));

        return (
          <IntlProvider
            locale={langKey}
            messages={i18nMessages}
          >
          <>
            <Header
              currentLang={langKey}
              siteTitle={data.site.siteMetadata.title}
              langs={langsMenu} />
            <div
              style={{
                margin: `0 auto`,
                paddingTop: 0,
              }}
             >
              {children}
            </div>
            <Footer footerPaddingTop />
          </>
          </IntlProvider>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
