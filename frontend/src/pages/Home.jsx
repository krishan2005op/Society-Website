import React from 'react'
import HeroSection from '../components/HomeComponents/HeroSection'
import AboutUs from '../components/HomeComponents/AboutUs'
import OurProjects from '../components/HomeComponents/OurProjects'
import OurTeam from '../components/HomeComponents/OurTeam'
import Form from '../components/HomeComponents/Form'


const Home = () => {
  return (
    <div>
        <div className="herosection">
            <HeroSection />
        </div>
        <div className="flex w-full justify-center ">
            <AboutUs/>
        </div>
        <div className=" mt-20 h-[80vh]">
            <OurProjects/>
        </div>
        <div className=" mt-40 h-[90vh]">
            <OurTeam/>
        </div>
        <div className=" mt-40 h-[100vh]">
            <Form />
        </div>
    </div>
  )
}

export default Home