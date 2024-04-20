import * as React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero'
import Divider from '@mui/material/Divider';
import Features from './components/features/Features'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/newsletter/Newsletter';

export default function App() {

  return (
    <>
      <Navbar />
      <Hero />
          <Divider />
          <Features />
          <Divider />
          <Testimonials />
          <Divider />
      <Footer />
    </>
  );
}