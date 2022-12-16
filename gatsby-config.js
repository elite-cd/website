/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Elite`,
    siteUrl: `https://www.elite.cd`,
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
        additionalData: `@import "${__dirname}/src/assets/styles/main.scss";`,
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon.png',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-plugin-fontawesome-css',
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/src/locales`,
        languages: ['fr'],
        defaultLanguage: 'fr',
        redirect: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/pages/home`,
        name: 'carousel',
      },
    },
  ],
};