import React from "react";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Services from "./components/Services/services";
import MyWork from "./components/MyWork/mywork";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Resume from './components/Hero/resume'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
      <Resume/>
    </div>
  )
}

export default App