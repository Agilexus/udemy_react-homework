// import { Component } from 'react';

import HeroSection from '../hero-section/hero-section'
import About from '../about-section/about-section'
import OurBestSection from '../our-best-section/our-best-section'
import Footer from '../footer/footer'

import './app.css';

const App = () => {
  const cardData = [
      {imgSrc: './img/card/1-1.png', label: 'Solimo Coffee Beans 2 kg', price: '10.73$', id: '1'},
      {imgSrc: './img/card/1-2.png', label: 'Presto Coffee Beans 1 kg', price: '15.99$', id: '2'},
      {imgSrc: './img/card/1-3.png', label: 'AROMISTICO Coffee 1 kg', price: '6.99$', id: '3'}
    ]

    return (
      <div className="App">
        <HeroSection />
        <About />
        <OurBestSection cardData={cardData}/>
        <Footer/>
      </div>
    );
  }

export default App;
