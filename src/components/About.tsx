
import React from 'react';
import { FaChartLine, FaGlobeAfrica } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-primary relative inline-block">
            Mission & Vision
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-brand-green"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8 lg:p-10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mr-4">
                <FaChartLine className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-brand-blue">Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to bridge the gap between local businesses and global 
              markets by providing world-class export training programs, tailored 
              consulting services, and actionable insights. We aim to equip our 
              clients with the expertise and confidence to expand their reach, 
              optimize their operations, and thrive in the competitive international 
              trade landscape.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 lg:p-10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mr-4">
                <FaGlobeAfrica className="text-brand-blue text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-brand-blue">Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be a leader in export training and consulting, recognized for our 
              commitment to excellence, innovation, and the success of our clients. 
              We envision a world where businesses of all sizes can seamlessly 
              access and excel in international markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
