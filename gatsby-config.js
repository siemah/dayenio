module.exports = {
  siteMetadata: {
    siteUrl: `https://dayenio.ml`,
    title: `DayenIO`,
    description: `dayenio is a team of developers, designers and marketers. 
    We help brands with conversion-focused marketing campaigns through strategy, design and development.
    We are in digital field for more than 10 years, 
    work hard to satisfact our clients and give to user a better experience. We work with more than 10 brands, and we achieve to 
    make those grow up faster than others. We make communication between costumers and brands smooth and `,
    author: `@siemah`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DayenIO digital team`,
        short_name: `DayenIO`,
        start_url: `/`,
        background_color: `#4a00d8`,
        theme_color: `#4a00d8`,
        display: `standalone`,
        icon: `src/images/icon-384x384.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Varela Round']
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-133717096-1"
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://dayenio.ml',
        sitemap: 'https://dayenio.ml/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
        output: '/robots.txt'
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
