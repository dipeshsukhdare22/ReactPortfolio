import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Services from '../Components/Service/Services'
import Projects from '../Components/Projects/project'
import ContactUs from '../Components/Contact/ContactUs'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Projects/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Home