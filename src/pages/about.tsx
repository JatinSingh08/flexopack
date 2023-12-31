import AboutBanner from '@/components/AboutUs/Banner'
import CompanyStats from '@/components/AboutUs/CompanyStats'
import Leadership from '@/components/AboutUs/Leadership'
import MissionVision from '@/components/AboutUs/MissionVision'
import OurCompany from '@/components/AboutUs/OurCompany'
import Tagline from '@/components/AboutUs/Tagline'
import Banner from '@/components/Layout/Banner'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import React from 'react'

const About = () => {
  return (
    <>
    <main>
      <Banner />
      <Header />
      <div className='min-h-[100vh]'>
        <AboutBanner />
        <OurCompany />
        <CompanyStats />
        <MissionVision />
        <Leadership />
        <Tagline />
      </div>
      <Footer />
    </main>
   </>
  )
}

export default About
