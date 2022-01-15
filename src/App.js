import React from 'react';
import Navbar from './components/navBar';
// import Background from './components/background';
import Intro from './components/intro';
import About from './components/about';
import Skill from './components/skill';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';


function App(){
  return (
    <div className="container0">
      <section className="container1">
        <Navbar />
        {/* <Background /> */}
        <Intro />
      </section>
      
      <section>
        <About />
      </section>
      
      <section>
        <Skill />
      </section>
      
      <section>
        <Projects /> 
      </section>
      
      <section>
        <Contact />
        <Footer />
      </section>
    </div>
  );
}

export default App;