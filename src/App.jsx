import { useState } from 'react'

import './App.css'
import Footer from './components/Footers.jsx'
import Testimonial from './components/Testimonial.jsx'
import Test1 from './components/Test1.jsx'
import Home from './components/Home.jsx'
import Stats from './components/Stats.jsx'
import WhyUs from './components/WhyUs.jsx'
import Solutions from './components/Solutions.jsx'
import Clients from './components/Clients.jsx'
import Bar from './components/Bar.jsx'

function App() {

  return (
    <>
      {/* <Navebar /> */}
      <Bar />
      <Home />
      <WhyUs />
      <Stats />
      <Solutions />
      {/* <Test1 /> */}
      <Testimonial />
      <Clients />
      <Footer />
    </>
  )
}

export default App
