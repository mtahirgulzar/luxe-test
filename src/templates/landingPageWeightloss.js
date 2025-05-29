import React, { useState, useEffect } from 'react'
import Footer from '../components/General/footer.js'
import NavBar from '../components/General/navbar.js'
import Intro from '../components/LandingPages/IntroWeight.js'
import SocialProofWeight from '../components/LandingPages/SocialProofWeight.js'
import WeightLossBanner from '../components/LandingPages/WeightlossTreatmentBanner.js'
import HowGLPWorks from '../components/LandingPages/HowGLPWorks.js'
import Reviews from '../components/LandingPages/Reviews.js'
import SideEffects from '../components/LandingPages/SideEffects.js'
import FAQ from '../components/LandingPages/FAQ.js'
import WhatIsSema from '../components/LandingPages/WhatIsSema.js'
import WhatIsTirz from '../components/LandingPages/WhatIsTirz.js'
import ExceptionalMedicine from '../components/LandingPages/ExceptionalMedicine.js'
import AdCookie from '../components/General/AdCookie.js'
import Team from '../components/LandingPages/Team.js'
import Seo from '../components/General/seo.js'
import { graphql } from 'gatsby'
import '../components/master.css'

export const pageQuery = graphql`
  query {
    aishaImage: file(relativePath: { eq: "aisha.webp" }) {
      childImageSharp {
        gatsbyImageData
      }
    },
    rosinesImage: file(relativePath: { eq: "rosines.webp" }) {
      childImageSharp {
        gatsbyImageData
      }
    },
    allTreatmentImages: allFile(filter: {relativeDirectory: {eq: "treatments"}}) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const HomePage = ({ data, children, pageContext }) => {
  const [services, setServices] = useState([]);
  const imageFluidMap = data.allTreatmentImages.edges.reduce((acc, edge) => {
    // console.log(edge.node.relativePath)
    // console.log(edge.node.childImageSharp)
    acc[edge.node.relativePath] = edge.node.childImageSharp;
    return acc;
  }, {});

  const treatmentsWithImages = pageContext.treatmentsData.map(treatment => {
    // console.log(treatment)
    const lookupKey = `treatments/${treatment.imageUrl}`;
    const imageFluid = imageFluidMap[lookupKey];
    // console.log("imageFluid",imageFluid)
    return {
      ...treatment,
      imageFluid: imageFluid || null, // Attach fluid data or null if not found
    };
  });

  const tombstoneLookupKey = `treatments/${pageContext.tombstoneImage}`;
  const tombstone = imageFluidMap[tombstoneLookupKey];
  // console.log('tombstone', tombstone)
  // console.log('tombstone', pageContext)
  // const treatmentsWithImages = mapImagesToTreatments(pageContext.treatmentsData, data.allTreatmentImages.edges);

  // console.log(treatmentsWithImages)
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const url = 'api/getServices';
        // const url = `${process.env.GATSBY_API_URL}/api/getServices`;
        await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          }),

        })
          .then(response => response.json())
          .then(data => {
            // console.log(data);
            setServices(data);
          });
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  const teamMembers = {
    section: {
      title: 'MEET THE TEAM',
      subtitle: 'Expert care from experienced medical professionals.',
    },
    members: [
      {
        image: data.aishaImage, // Replace with your image data
        title: 'Nurse & Co-founder',
        name: 'Aisha Mashwani',
        description: 'RN. Treating more than 25,000 patients in Emergency Rooms and surgery centers before starting Luxe Mobile IV, Aisha is known for giving the most pain free IVs in Houston and regularly services big name musicians when in Houston. Now she offers services to all Houstonians.',
      },
      {
        image: data.rosinesImage,
        title: 'MD & Co-founder',
        name: 'Dr. Noam Rosines',
        description: 'Dr. Rosines, MD, Baylor College of Medicine. Medical Director of 7 Houston area emergency rooms. Board certified.',
      },
    ],
  };

  return (
    <>
    <AdCookie />
    <NavBar pageContext={pageContext}/>

      <Intro pageContext={pageContext} tombstone={tombstone}/>
      <SocialProofWeight/>
      <HowGLPWorks/>
      <WeightLossBanner/>
      <WhatIsSema/>
      <hr style={{ height: '1px', width: '100vw' }}/>
      <WhatIsTirz/>
      <Reviews/>
      <SideEffects/>
      <hr style={{ height: '1px', width: '100vw' }}/>
      <FAQ/>
      {/* <Treatments treatmentsData={treatmentsWithImages} /> */}
      {/* <ExceptionalMedicine/> */}
      <hr style={{ height: '1px', width: '100vw' }}/>
      <Team teamMembers={teamMembers} pageContext={pageContext}/>
      {/* <AllServices services={services}/> */}
      {/* <AdCookie />
      <Hero lpVariant={pageContext.name} variableContent={pageContext} />
      <Locations
        locationSectionJson={data.allDataJson.nodes[0].VEC.locations}
      />
      <Services />
      <Facility />
      <WhyUs locationSectionJson={data.allDataJson.nodes[0].VEC.locations}/>

      <Reviews locationSectionJson={data.allDataJson.nodes[0].VEC.locations} />
      <Insurance
        locationSectionJson={data.allDataJson.nodes[0].VEC.locations}
      />
      <About />

      */}
      <Footer/>
    </>
  )
}

export default HomePage

export const Head = ({ data, children, pageContext }) => (
  <Seo context={pageContext} />
)
