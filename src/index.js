import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Awards from './components/Awards';
import Explore from './components/Explore';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero/>
    <Awards/>
    <Explore/>
    <Footer/>
  </React.StrictMode>
);
