import React, { useState, useEffect } from 'react'
import Footer from '../components/General/footer.js'
import NavBar from '../components/General/navbaralt.js'
import HowItWorks from '../components/LandingPages/HowItWorks.js'
import Intro from '../components/LandingPages/Intro.js'
import SocialProof from '../components/LandingPages/SocialProof.js'
import Treatments from '../components/LandingPages/TreatmentsAlt.js'
import Testimonials from '../components/LandingPages/Testimonials.js'
import Reviews from '../components/LandingPages/Reviews.js'
import AllServices from '../components/LandingPages/AllServices.js'
import ExceptionalMedicine from '../components/LandingPages/ExceptionalMedicine.js'
import Team from '../components/LandingPages/Team.js'
import Seo from '../components/General/seo.js'
import AdCookie from '../components/General/AdCookie.js'
import servicesData from '../data/services.json';

// add cookie tracking
import { graphql } from 'gatsby'
import '../components/master.css'

export const pageQuery = graphql`
  query {
    aishaImage: file(relativePath: { eq: "aisha.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 3000, layout: CONSTRAINED)
      }
    },
    rosinesImage: file(relativePath: { eq: "rosines.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 3000, layout: CONSTRAINED)
      }
    },
  }
`;

const HomePage = ({ data, children, pageContext }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Replace URL with your actual API endpoint
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
            console.log(data);
            setServices(data);
          });
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  console.log('data.aishaImage', data.aishaImage)
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
      // ... more team members
    ],
  };

  return (
    <>
    <AdCookie />
    <NavBar pageContext={pageContext}/>

<Intro pageContext={pageContext}/>
<SocialProof/>
{/* <h1>Kathy</h1> */}
<Treatments treatmentsData={pageContext.treatmentsData}  pageContext={pageContext}/>
<HowItWorks/>
{/* <hr className='sectionhr'/> */}
<Testimonials pageContext={pageContext}/>
<ExceptionalMedicine/>
<Reviews/>
<Team teamMembers={teamMembers} pageContext={pageContext}/>
<hr className='sectionhr'/>
<AllServices services={servicesData}/>
      <Footer/>
    </>
  )
}

export default HomePage

export const Head = ({ data, children, pageContext }) => (
  <Seo context={pageContext} />
)
