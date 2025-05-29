/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const JSONData = require('./src/data/lpvariants.json')
const servicesData = require('./src/data/services.json')
const treatmentPages = require('./src/data/treatmentPages.json')
const specificTreatmentPages = require('./src/data/specificTreatmentPages.json')
const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const landingPageIVTemplate = path.resolve('src/templates/landingPageIV.jsx')
  const landingPageNADTemplate = path.resolve('src/templates/landingPageNAD.js')
  const landingPageWeightlossTemplate = path.resolve('src/templates/landingPageWeightloss.js')
  const landingPageHomeTemplate = path.resolve('src/templates/landingPageHome.jsx')
  const landingPageHomeAltTemplate = path.resolve('src/templates/landingPageHomeAlt.js')
  const specificTreatmentPageTemplate = path.resolve('src/templates/landingPageSpecificIV.jsx')
  const treatmentsPageTemplate = path.resolve('src/templates/treatmentsPage.js')
  const aboutPage = path.resolve('src/pages/about.js')
  const page404 = path.resolve('src/pages/404.js')

  // const cities = ['houston', 'maddisonville', 'austin', 'rgv'];
  // City-specific data
  const cities = [
    { slug: 'houston', name: "Houston's", demonym: 'Houstonians' },
    { slug: 'maddisonville', name: "Madisonville's", demonym: 'Maddisonville residents' },
    { slug: 'austin', name: "Austin's", demonym: 'Austinites' },
    { slug: 'rgv', name: "Rio Grande Valley's", demonym: 'Rio Grande Valley residents' },
  ];

  JSONData.lpVariants.forEach((item, index) => {
    if (item.name === 'weightloss') {
      createPage({
        path: item.path,
        component: landingPageWeightlossTemplate,
        context: {
          id: item.index,
          name: item.name,
          title: item.title,
          introHead: item.introHead,
          introDesc: item.introDesc,
          ctaBenefits: item.ctaBenefits,
          benefitsSubtext: item.benefitsSubtext,
          seoTitle: item.seoTitle,
          helmet: item.helmet,
          seoDescription: item.seoDescription,
          treatmentsData: item.treatmentsData,
          tombstoneImage: item.tombstoneImage,
          servicesData,
          pagePath: item.path,
        },
      })

      // Create city-specific weight loss pages
      cities.forEach(({ slug, name, demonym }) => {
        createPage({
          path: `${item.path}/${slug}`,
          component: landingPageWeightlossTemplate,
          context: {
            id: item.index,
            name: item.name,
            title: item.title,
            introHead: item.introHead,
            introDesc: item.introDesc,
            ctaBenefits: item.ctaBenefits,
            benefitsSubtext: item.benefitsSubtext,
            seoTitle: item.seoTitle,
            helmet: item.helmet,
            seoDescription: item.seoDescription,
            treatmentsData: item.treatmentsData,
            tombstoneImage: item.tombstoneImage,
            servicesData,
            city: slug,
            cityName: name,
            cityDemonym: demonym,
            pagePath: `${item.path}/${slug}`,
          },
        })
      })
      // cities.forEach(city => {
      //   createPage({
      //     path: `${item.path}/${city}`,
      //     component: landingPageWeightlossTemplate,
      //     context: {
      //       id: item.index,
      //       name: item.name,
      //       title: item.title,
      //       introHead: item.introHead,
      //       introDesc: item.introDesc,
      //       ctaBenefits: item.ctaBenefits,
      //       benefitsSubtext: item.benefitsSubtext,
      //       seoTitle: item.seoTitle,
      //       helmet: item.helmet,
      //       seoDescription: item.seoDescription,
      //       treatmentsData: item.treatmentsData,
      //       tombstoneImage: item.tombstoneImage,
      //       servicesData,
      //       city,
      //     },
      //   })
      // })
    } else if (cities.some(city => city.slug === item.name)) {
      const cityDetails = cities.find(city => city.slug === item.name); // Find the city details dynamically

      createPage({
        path: item.path,
        component: landingPageHomeTemplate,
        context: {
          id: item.index,
          name: item.name,
          title: item.title,
          introHead: item.introHead,
          introDesc: item.introDesc,
          ctaBenefits: item.ctaBenefits,
          benefitsSubtext: item.benefitsSubtext,
          seoTitle: item.seoTitle,
          helmet: item.helmet,
          seoDescription: item.seoDescription,
          treatmentsData: item.treatmentsData,
          tombstoneImage: item.tombstoneImage,
          servicesData,
          city: cityDetails.slug, // Use the slug for city-specific paths or logic
          cityName: cityDetails.name, // Pass the city name for display
          cityDemonym: cityDetails.demonym, // Pass the city demonym for descriptions
          pagePath: item.path,
        },
      });
    } else if (item.name === 'alt') {
      console.log(item.path)
      createPage({
        path: item.path,
        component: landingPageHomeAltTemplate,
        context: {
          id: item.index,
          name: item.name,
          title: item.title,
          introHead: item.introHead,
          introDesc: item.introDesc,
          ctaBenefits: item.ctaBenefits,
          benefitsSubtext: item.benefitsSubtext,
          seoTitle: item.seoTitle,
          helmet: item.helmet,
          seoDescription: item.seoDescription,
          treatmentsData: item.treatmentsData,
          tombstoneImage: item.tombstoneImage,
          servicesData,
          pagePath: item.path
        },
      })
    } else if (item.name === 'nad') {
      createPage({
        path: item.path,
        component: landingPageNADTemplate,
        context: {
          id: item.index,
          name: item.name,
          title: item.title,
          introHead: item.introHead,
          treatHead: item.treatHead,
          introDesc: item.introDesc,
          ctaBenefits: item.ctaBenefits,
          benefitsSubtext: item.benefitsSubtext,
          seoTitle: item.seoTitle,
          helmet: item.helmet,
          seoDescription: item.seoDescription,
          treatmentsData: item.treatmentsData,
          tombstoneImage: item.tombstoneImage,
          tombstoneAlt: item.tombstoneAlt,
          faqData: item.faqData,
          treatmentsPage: item.treatmentsPage,
          servicesData,
          pagePath: item.path
        },
      })

      cities.forEach(({ slug, name, demonym }) => {
        createPage({
          path: `${item.path}/${slug}`,
          component: landingPageNADTemplate,
          context: {
            id: item.index,
            name: item.name,
            title: item.title,
            introHead: item.introHead,
            treatHead: item.treatHead,
            introDesc: item.introDesc,
            ctaBenefits: item.ctaBenefits,
            benefitsSubtext: item.benefitsSubtext,
            seoTitle: item.seoTitle,
            helmet: item.helmet,
            seoDescription: item.seoDescription,
            treatmentsData: item.treatmentsData,
            tombstoneImage: item.tombstoneImage,
            tombstoneAlt: item.tombstoneAlt,
            faqData: item.faqData,
              treatmentsPage: item.treatmentsPage,
            servicesData,
            city: slug,
            cityName: name,
            cityDemonym: demonym,
            pagePath: `${item.path}/${slug}`,
            test: 'test'
          },
        })
      })
    } else {
      createPage({
        path: item.path,
        component: landingPageIVTemplate,
        context: {
          id: item.index,
          name: item.name,
          title: item.title,
          introHead: item.introHead,
          treatHead: item.treatHead,
          introDesc: item.introDesc,
          ctaBenefits: item.ctaBenefits,
          benefitsSubtext: item.benefitsSubtext,
          seoTitle: item.seoTitle,
          helmet: item.helmet,
          seoDescription: item.seoDescription,
          treatmentsData: item.treatmentsData,
          tombstoneImage: item.tombstoneImage,
          tombstoneAlt: item.tombstoneAlt,
          faqData: item.faqData,
          treatmentsPage: item.treatmentsPage,
          servicesData,
          pagePath: item.path
        },
      })

      cities.forEach(({ slug, name, demonym }) => {
        createPage({
          path: `${item.path}/${slug}`,
          component: landingPageIVTemplate,
          context: {
            id: item.index,
            name: item.name,
            title: item.title,
            introHead: item.introHead,
            treatHead: item.treatHead,
            introDesc: item.introDesc,
            ctaBenefits: item.ctaBenefits,
            benefitsSubtext: item.benefitsSubtext,
            seoTitle: item.seoTitle,
            helmet: item.helmet,
            seoDescription: item.seoDescription,
            treatmentsData: item.treatmentsData,
            tombstoneImage: item.tombstoneImage,
            tombstoneAlt: item.tombstoneAlt,
            faqData: item.faqData,
            treatmentsPage: item.treatmentsPage,
            servicesData,
            city: slug,
            cityName: name,
            cityDemonym: demonym,
            pagePath: `${item.path}/${slug}`
          },
        })
      })
    }
  })
  specificTreatmentPages.forEach((item, index) => {
    createPage({
      path: 'service-pages/' + item.path,
      component: specificTreatmentPageTemplate,
      context: {
        id: item.index,
        name: item.name,
        title: item.title,
        seoTitle: item.title,
        helmet: item.helmet,
        seoDescription: item.seoDescription,
        treatmentsData: item.treatments,
        ctaBenefits: item.ctaBenefits,
        introHead: item.introHead,
        introDesc: item.introDesc,
        benefitsSubtext: item.benefitsSubtext,
        tombstoneImage: item.tombstoneImage,
        treatmentsPage: item.treatmentsPage,
        servicesData,
        pagePath: 'service-pages/' + item.path,
        treatmentUuid: item.treatmentUuid,
      },
    })
  })
  treatmentPages.treatmentsData.forEach((item, index) => {
    createPage({
      path: item.path,
      component: treatmentsPageTemplate,
      context: {
        id: item.index,
        name: item.name,
        title: item.title,
        seoTitle: item.title,
        helmet: item.helmet,
        seoDescription: item.seoDescription,
        treatmentsData: item.treatments,
        pagePath: item.path,
      },
    })
  })
}
