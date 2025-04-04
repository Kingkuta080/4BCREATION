import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#29518f",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-black/30 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xl font-bold">
            <span className="text-brand-blue">4B</span> <span className="text-brand-green">CREATION</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <motion.a
            href="#about"
            className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-brand-blue transition-colors`}
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            About
          </motion.a>
          <motion.a
            href="#services"
            className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-brand-blue transition-colors`}
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Services
          </motion.a>
          <motion.a
            href="#why-us"
            className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-brand-blue transition-colors`}
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Why Us
          </motion.a>
          <motion.a
            href="#team"
            className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-brand-blue transition-colors`}
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Team
          </motion.a>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#contact">
              <Button className="bg-brand-blue hover:bg-brand-blue/90">
                Contact Us
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Mobile Navigation Toggle */}
        <motion.button
          className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'} focus:outline-none`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4 p-4">
            <motion.a
              href="#about"
              className="text-gray-800 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ x: 5, color: "#29518f" }}
            >
              About
            </motion.a>
            <motion.a
              href="#services"
              className="text-gray-800 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ x: 5, color: "#29518f" }}
            >
              Services
            </motion.a>
            <motion.a
              href="#why-us"
              className="text-gray-800 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ x: 5, color: "#29518f" }}
            >
              Why Us
            </motion.a>
            <motion.a
              href="#team"
              className="text-gray-800 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ x: 5, color: "#29518f" }}
            >
              Team
            </motion.a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">
                Contact Us
              </Button>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
