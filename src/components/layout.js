import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
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
            siteUrl
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
        const url = typeof window !== `undefined`? location.pathname : '/';
        const { langs, defaultLangKey } = data.site.siteMetadata.languages;
        const langKey = getCurrentLangKey(langs, defaultLangKey, url);
        const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/');
        const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));
        console.log(data)
        return (
          <IntlProvider
            locale={langKey}
            messages={i18nMessages}
          >
          <>
          <Helmet>
            <meta name="google-site-verification" content="Axmmeh5cg_593zSqOLOHEeUM2N-TSLXW53jWwD0H0nU" />
            <meta name="robots" content="index,follow" />
            <link rel="canonical" href={`${data.site.siteMetadata.siteUrl}${location.pathname}`} />
            <meta name="og:url" content={`${data.site.siteMetadata.siteUrl}${location.pathname}`} />
           </Helmet>
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
