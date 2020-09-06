import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import ContactInfo from './components/ContactInfo';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Experience />

      <Projects />

      <ContactInfo />
    </div>
  );
}

export default App;
