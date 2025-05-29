import React, { useState, useEffect } from 'react'
import Footer from '../components/General/footer.js'
import NavBar from '../components/General/navbar.js'
import HowItWorks from '../components/LandingPages/HowItWorks.js'
import Intro from '../components/LandingPages/Intro.js'
import SocialProof from '../components/LandingPages/SocialProof.js'
import Treatments from '../components/LandingPages/Treatments.js'
import Testimonials from '../components/LandingPages/Testimonials.js'
import Reviews from '../components/LandingPages/Reviews.js'
import AllServices from '../components/LandingPages/AllServices.js'
import ExceptionalMedicine from '../components/LandingPages/ExceptionalMedicine.js'
import Team from '../components/LandingPages/Team.js'
import Seo from '../components/General/seo.js'
import JSONData from '../data/lpvariants.json';
import servicesData from '../data/services.json';
import AdCookie from '../components/General/AdCookie.js'
import Locations from '../components/LandingPages/locations.jsx'

// add cookie tracking
import { graphql } from 'gatsby'
import '../components/master.css'
import FAQ from '../components/LandingPages/FAQ.js'
import Faq from '../components/LandingPages/faq/faq.js'
const homePageData = JSONData.lpVariants.find(variant => variant.name === 'homepage');

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

  useEffect(() => {
    // const fetchServices = async () => {
    //   try {
    //     // Replace URL with your actual API endpoint
    //     // const url = `${process.env.GATSBY_API_URL}/api/getServices`;
    //     const url = '/api/getServices';
    //     await fetch(url, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //       }),

    //     })
    //       .then(response => response.json())
    //       .then(data => {
    //         // console.log(data);
    //         setServices(data);
    //       });
    //   } catch (error) {
    //     console.error('Error fetching services:', error);
    //   }
    // };

    // fetchServices();
  }, []);
  const imageFluidMap = data.allTreatmentImages.edges.reduce((acc, edge) => {
    // console.log(edge.node.relativePath)
    // console.log(edge.node.childImageSharp)
    acc[edge.node.relativePath] = edge.node.childImageSharp;
    return acc;
  }, {});

  const treatmentsWithImages = homePageData.treatmentsData.map(treatment => {
    // console.log('treatment', treatment)
    const lookupKey = `treatments/${treatment.imageUrl}`;
    const imageFluid = imageFluidMap[lookupKey];
    // console.log('imageFluid', imageFluid)
    return {
      ...treatment,
      imageFluid: imageFluid || null, // Attach fluid data or null if not found
    };
  });
  const teamMembers = {
    section: {
      title: 'MEET THE TEAM',
      subtitle: 'Expert care from experienced medical professionals.',
    },
    members: [
      {
        image: data.aishaImage,
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
      <NavBar pageContext={homePageData}/>
      <AdCookie />

      <Intro pageContext={homePageData} />
      <SocialProof pageContext={homePageData}/>
      <Treatments pageContext={homePageData} treatmentsData={treatmentsWithImages}/>

      <HowItWorks pageContext={homePageData}/>
      <Locations />
      <Faq/>
      <Testimonials pageContext={homePageData}/>
      <ExceptionalMedicine pageContext={homePageData}/>
      <Reviews pageContext={homePageData}/>
      <Team teamMembers={teamMembers} pageContext={homePageData}/>
      <hr className='sectionhr'/>

      <AllServices services={servicesData} pageContext={homePageData}/>
      <Footer pageContext={homePageData}/>
    </>
  )
}

export default HomePage

export const Head = ({ data, children, pageContext }) => (
  <Seo context={homePageData}/>
)
