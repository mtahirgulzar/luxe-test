/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Luxe Mobile IV',
    siteUrl: 'https://www.luxemobileiv.com'
  },
  plugins: ['gatsby-plugin-image', {
    resolve: 'gatsby-plugin-sitemap',
    options: {
      query: `
      {
        allSitePage {
          nodes {
            path
          }
        }
      }
      `,
      resolveSiteUrl: () => 'https://www.luxemobileiv.com',
      resolvePages: ({ allSitePage: { nodes: allPages } }) => {
        return allPages.filter(page => {
          // Filter out unwanted pages
          return !page.path.includes('-treatments') && 
                 !page.path.startsWith('/city/') &&
                 !page.path.endsWith('-drips/') &&
                 page.path !== '/alt/' &&
                 !page.path.includes('weight-loss-treatments');
        });
      },
      serialize: ({ path }) => {
        let priority = 0.5;
        let changefreq = 'weekly';

        if (path === '/') {
          priority = 1.0;
          changefreq = 'daily';
        } else if (path.startsWith('/service-pages/')) {
          priority = 0.8;
        } else if (path.includes('/houston') || path.includes('/maddisonville') || path.includes('/austin') || path.includes('/rgv')) {
          priority = 0.7;
        }

        return {
          url: `https://www.luxemobileiv.com${path}`,
          changefreq,
          priority,
        };
      },
    },
  }, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/luxeicon.png'
    }
  },  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://www.luxemobileiv.com`,
    },
  },{
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://www.luxemobileiv.com',
      sitemap: 'https://www.luxemobileiv.com/sitemap-index.xml',
      policy: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: '/static/' },
        { userAgent: '*', disallow: '/menu/' },
        { userAgent: '*', disallow: '/menu2/' },
        { userAgent: '*', disallow: '/app/' },
        { userAgent: '*', disallow: '/login' },
        { userAgent: '*', disallow: '/city/' },
        { userAgent: '*', disallow: '/*-treatments/' },

      ]
    }
  },'gatsby-plugin-sharp', 'gatsby-transformer-sharp', {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/'
    },
    __key: 'images'
  },
  // {
  //   resolve: 'gatsby-plugin-google-gtag',
  //   options: {
  //     trackingIds: ['GTM-5MQTLFWF'],
  //   },
  // },
  {
    resolve: 'gatsby-plugin-google-tagmanager',
    options: {
      id: 'GTM-5MQTLFWF',

      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,
      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      // Defaults to null
      // defaultDataLayer: { platform: 'gatsby' },

      // Specify optional GTM environment details.
      // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
      // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
      // dataLayerName: 'YOUR_DATA_LAYER_NAME',

      // Name of the event that is triggered
      // on every Gatsby route change.
      //
      // Defaults to gatsby-route-change
      // routeChangeEventName: 'YOUR_ROUTE_CHANGE_EVENT_NAME',
      // Defaults to false
      enableWebVitalsTracking: true,
      // Defaults to https://www.googletagmanager.com
      // selfHostedOrigin: 'YOUR_SELF_HOSTED_ORIGIN',
      // Defaults to gtm.js
      // selfHostedPath: 'YOUR_SELF_HOSTED_PATH',
    },
  }
  // {
  //   resolve: 'gatsby-plugin-hotjar',
  //   options: {
  //     includeInDevelopment: false,
  //     id: 3537776,
  //     sv: 6,
  //   },
  // },
  // {
  //   resolve: 'gatsby-plugin-preconnect',
  //   options: {
  //     domains: ['https://static.hotjar.com'],
  //   },
  // },
  ]
};
