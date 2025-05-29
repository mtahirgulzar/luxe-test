import React, { useState, useEffect } from 'react'
// import { Link } from "gatsby"
import Footer from '../components/General/footer.js'
import NavBar from '../components/General/navbar.js'
// import About from "../components/Landing Pages/Doctors2"
// import Accreditations from "../components/Landing Pages/Accreditations"
// import WhyUs from "../components/Landing Pages/WhyUs2"
// import Locations from "../components/Landing Pages/Locations2"
import Intro from '../components/LandingPages/IntroAbout'
// import SocialProof from '../components/LandingPages/SocialProof'
// import Treatments from '../components/LandingPages/Treatments'
// import Reviews from '../components/LandingPages/Reviews'
// import AllServices from '../components/LandingPages/AllServices.js'
// import ExceptionalMedicine from '../components/LandingPages/ExceptionalMedicine.js'
import Team from '../components/LandingPages/TeamAbout.js'
// import Facility from "../components/Landing Pages/Facility"
// import Insurance from "../components/Landing Pages/Insurance2"
import Seo from '../components/General/seo.js'
// import AdCookie from "../components/General/AdCookie"
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
    christiaanImage: file(relativePath: { eq: "christiaan.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 3000, layout: CONSTRAINED)
      }
    },
    haydenImage: file(relativePath: { eq: "hayden.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 3000, layout: CONSTRAINED)
      }
    },
  }
`;

const HomePage = ({ data, children, pageContext }) => {
  const teamMembers = {
    section: {
      title: 'MEET THE TEAM',
      subtitle: 'Expert care from experienced medical professionals.',
    },
    members: [
      {
        image: data.aishaImage, // Replace with your image data
        title: 'Nurse, Co-founder, & CEO',
        name: 'Aisha Mashwani',
        description: 'RN. Treating more than 25,000 patients in Emergency Rooms and surgery centers before starting Luxe Mobile IV, Aisha is known for giving the most pain free IVs in Houston and regularly services big name musicians when in Houston. Now she offers services to all Houstonians.',
      },
      {
        image: data.rosinesImage,
        title: 'MD, Co-founder, & CMO',
        name: 'Dr. Noam Rosines',
        description: 'Dr. Rosines, MD, Baylor College of Medicine. Medical Director of 7 Houston area emergency rooms. Board certified.',
      },
      // {
      //   image: data.christiaanImage,
      //   title: 'COO',
      //   name: 'Christiaan Best',
      //   description: 'Advertiser. Data Scientist. Engineer. Many Patents. Started several companies with a few exists.',
      // },
      // {
      //   image: data.haydenImage,
      //   title: 'CTO',
      //   name: 'Hayden Luckadoo',
      //   description: 'Advertiser. Award winning mathematician. Programmer. Data scientist.',
      // },
    ],
  };

  return (
    <>
      <NavBar/>
      <Intro/>
<Team teamMembers={teamMembers}/>
      <Footer/>
    </>
  )
}

export default HomePage

export const Head = ({ data, children, pageContext }) => (
  <Seo context={pageContext} />
)
