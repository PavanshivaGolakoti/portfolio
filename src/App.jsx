import React from 'react';
import Header from './component/header/Header';
import About from './component/about/About';
import Nav from './component/nav/Nav';
import Experience from './component/experience/Experience';
import Services from './component/services/Services';
import Portfolio from './component/portfolio/Portfolio';
import Testimonio from './component/testimonio/Testimonio';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonio />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
