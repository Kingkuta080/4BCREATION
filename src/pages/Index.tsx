
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CoreValues from '@/components/CoreValues';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  useEffect(() => {
    document.title = "4B Creation International Ltd - Where Knowledge Meets Global Opportunity";
  }, []);

  return (
    <div className="custom-scrollbar">
      <Navigation />
      <Hero />

      <ScrollReveal direction="up">
        <About />
      </ScrollReveal>

      <ScrollReveal direction="down" delay={0.2}>
        <CoreValues />
      </ScrollReveal>

      <ScrollReveal direction="left">
        <Services />
      </ScrollReveal>

      <ScrollReveal direction="right" delay={0.2}>
        <WhyChooseUs />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <Team />
      </ScrollReveal>

      <ScrollReveal direction="down">
        <Contact />
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default Index;
