import React, { useState, useEffect } from 'react'
import Footer from '../components/General/footer.js'
import NavBar from '../components/General/navbar.js'
import Intro from '../components/LandingPages/IntroSpecific.js'
import SocialProof from '../components/LandingPages/SocialProof.js'
// import Treatments from '../components/LandingPages/TreatmentsSpecific.js'
import Reviews from '../components/LandingPages/Reviews.js'
// import Testimonials from '../components/LandingPages/Testimonials.js'
import AllServices from '../components/LandingPages/AllServices.js'
import ExceptionalMedicine from '../components/LandingPages/ExceptionalMedicine.js'
import Team from '../components/LandingPages/Team.js'
import Seo from '../components/General/seo.js'
import HowItWorks from '../components/LandingPages/HowItWorks.js'
import AdCookie from '../components/General/AdCookie.js'
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
    },
    tombstoneImage: file(relativePath: { eq: "tombstone.webp" }) {
      childImageSharp {
        gatsbyImageData
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

  //   const treatmentsWithImages = pageContext.treatmentsData.map(treatment => {
  //     // console.log(treatment)
  //     const lookupKey = `treatments/${treatment.imageUrl}`;
  //     const imageFluid = imageFluidMap[lookupKey];
  //     // console.log("imageFluid",imageFluid)
  //     return {
  //       ...treatment,
  //       imageFluid: imageFluid || null, // Attach fluid data or null if not found
  //     };
  //   });
  const tombstoneLookupKey = `treatments/${pageContext.tombstoneImage}`;
  const tombstone = imageFluidMap[tombstoneLookupKey];
  // console.log('tombstone', tombstone)
  // console.log('tombstone', pageContext)
  // const treatmentsWithImages = mapImagesToTreatments(pageContext.treatmentsData, data.allTreatmentImages.edges);

  // console.log(treatmentsWithImages)
  useEffect(() => {
    const fetchServices = async () => {
      try {
        // const url = `${process.env.GATSBY_API_URL}/api/getServices`;
        const url = '/api/getServices';
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

      <Intro pageContext={pageContext} tombstoneImage={data.tombstoneImage}/>
      <SocialProof/>
      {/* <Testimonials/> */}
      {/* <Treatments treatmentsData={treatmentsWithImages} /> */}
      <ExceptionalMedicine pageContext={pageContext}/>
      <hr className='sectionhr'/>
      <HowItWorks pageContext={pageContext} />
      <Reviews/>
      <Team teamMembers={teamMembers} pageContext={pageContext}/>
      <hr className='sectionhr'/>
      <AllServices services={pageContext.servicesData}/>
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
