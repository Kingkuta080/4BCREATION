
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Staggered animation for text elements
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(../public/bg1.png)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <motion.div 
        className="container mx-auto px-4 z-10 text-center py-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-3xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            variants={item}
          >
            4B CREATION INTERNATIONAL LTD
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8"
            variants={item}
          >
            Where Knowledge Meets Global Opportunity
          </motion.p>
          
          <motion.p 
            className="text-lg text-white/90 mb-12 max-w-2xl mx-auto"
            variants={item}
          >
            We empower businesses and professionals with the skills and tools needed to succeed in the global marketplace.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            variants={item}
          >
            <Button 
              className="bg-brand-green hover:bg-brand-green/90 text-brand-blue text-lg px-8 py-6"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              as={motion.button}
            >
              Our Services
            </Button>
            
            <Button
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white text-lg px-8 py-6 flex items-center gap-2"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              as={motion.button}
            >
              Contact Us <FaArrowRight className="ml-1" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
