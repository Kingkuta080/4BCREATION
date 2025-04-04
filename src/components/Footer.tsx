
import React from 'react';
import { Button } from '@/components/ui/button';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">4B CREATION</h3>
            <p className="text-gray-300 mb-4">
              Where Knowledge Meets Global Opportunity
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-green transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-green transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-green transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-green transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-brand-green transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-brand-green transition-colors">Services</a></li>
              <li><a href="#why-us" className="text-gray-300 hover:text-brand-green transition-colors">Why Choose Us</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-brand-green transition-colors">Our Team</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-brand-green transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>No 5 Alexander Street, Life Camp, Abuja</p>
              <p>Phone: +234 90 333 26601</p>
              <p>Email: 4bcreationn@gmail.com</p>
            </address>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center">
          <p className="text-gray-400 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} 4B Creation International Ltd. All rights reserved.
          </p>
          <Button 
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="self-end md:self-auto"
          >
            <FaArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
