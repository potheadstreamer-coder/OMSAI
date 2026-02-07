import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { BrowserRouter } from 'react-router-dom';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Hero />
        <WhyChooseUs />
        <Products />
        <Services />
        <Contact />
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </BrowserRouter>
  );
}

export default App;
