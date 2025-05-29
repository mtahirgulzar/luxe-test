import * as React from 'react'
import locationsData from '../../data/locations.json'

function Seo (props) {
  function generateSchemaMarkup (props) {
    const { context } = props;
    const baseUrl = 'https://www.luxemobileiv.com/';
    const pagePath = context?.name === 'homepage' ? '' : `${context?.pagePath}/`;

    // Determine which location data to use based on the page path
    let locationKey = null; // Default to null instead of 'houston'
    if (pagePath.includes('houston')) {
      locationKey = 'houston';
    } else if (pagePath.includes('austin')) {
      locationKey = 'austin';
    } else if (pagePath.includes('rgv')) {
      locationKey = 'rgv';
    }
    
    // If no valid location is found, return null (no schema)
    if (!locationKey) {
      return null;
    }
    
    // Get the location data
    const locationData = locationsData[locationKey];
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'HealthAndBeautyBusiness',
      name: context?.title || 'Luxe Mobile IV',
      description: context?.seoDescription || 'Feel better, faster with Luxe Mobile IV. From hangovers to colds, migraines, and more, our advanced IV medicine will help you recover.',
      url: `${baseUrl}${pagePath}`,
      telephone: context?.phoneNumber,
      openingHours: locationData.openingHours,
      priceRange: 'From $150',
      address: locationData.address,
      areaServed: locationData.areaServed,
      sameAs: [
        locationData.googleBusinessUrl,
      ]
    };
    // Add a note about mobile service
    schema.additionalProperty = {
      '@type': 'PropertyValue',
      name: 'Service Type',
      value: 'Mobile IV Therapy - We come to you!'
    };
    // Add service areas if available
    if (context?.serviceAreas) {
      schema.areaServed = context.serviceAreas.map(area => ({
        '@type': 'City',
        name: area
      }));
    }

    if (context?.treatmentsData) {
      schema.makesOffer = context.treatmentsData.map(treatment => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: treatment.title,
          description: treatment.description,
          url: `${baseUrl}${treatment.link.startsWith('/') ? treatment.link.slice(1) : treatment.link}`,
          howPerformed: 'Intravenous administration',
          procedureType: 'IV Therapy'
        }
      }));
    }

    return schema;
  }

  const { context } = props;
  const metaDescription = context?.seoDescription || 'Feel better, faster with Luxe Mobile IV. From hangovers to colds, migraines, and more, our advanced IV medicine will help you recover.'
  const defaultTitle = 'Luxe Mobile IV'
  const pageTitle = context?.seoTitle || defaultTitle;
  const canonicalUrl = `https://www.luxemobileiv.com/${context?.name === 'homepage' ? '' : context?.pagePath + '/'}`
  // console.log('canonicalUrl', canonicalUrl)
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Luxe Mobile IV",
    image: "https://…/luxe_logo.webp",
    description: "Luxe Mobile IV delivers…",
    genre: "Luxe Mobile IV",
    author: { "@type": "Organization", name: "Luxe Mobile IV" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "531"
    }
  }
  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={'twitterCreator'} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {/* <link rel="canonical" href={canonicalUrl} /> */}
      <meta
        name="viewport"
        content="height=device-height,
                      width=device-width, initial-scale=1.0,
                      minimum-scale=1.0, maximum-scale=5.0,
                      target-densitydpi=device-dpi"
      />
      {generateSchemaMarkup(props) && (
        <script type="application/ld+json">
          {JSON.stringify(generateSchemaMarkup(props))}
        </script>
      )}
       <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
    </>
  )
}

export default Seo
