import React from 'react';
import  Navbar from './components/Navbar/Navbar';
// import Section from './components/Section/Section';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Links from './components/Links/Links';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App =()=>{
  return(
    <div>

      <Navbar/>
      <Intro/>
      <About/>
      <Experience/>
      <Links/>
      <Contact/>
      <Footer/>
     
    </div>
  )
}
export default App ;