import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaChartLine, FaGlobeAmericas, FaTrophy, FaUserFriends } from 'react-icons/fa';
import { Bg } from '@/assets';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Expert Team",
      description: "Our trainers and consultants are seasoned professionals with extensive experience in international trade.",
      icon: <FaUserTie className="text-3xl text-brand-green" />
    },
    {
      title: "Practical Approach",
      description: "We focus on real-world applications, ensuring our clients can immediately implement what they learn.",
      icon: <FaChartLine className="text-3xl text-brand-green" />
    },
    {
      title: "Global Reach",
      description: "With a network of partners and clients worldwide, we bring a truly international perspective.",
      icon: <FaGlobeAmericas className="text-3xl text-brand-green" />
    },
    {
      title: "Proven Track Record",
      description: "We have successfully trained and supported hundreds of businesses in achieving their export goals.",
      icon: <FaTrophy className="text-3xl text-brand-green" />
    },
    {
      title: "Client-Centric Solutions",
      description: "Every program and service is tailored to meet the unique needs of our clients.",
      icon: <FaUserFriends className="text-3xl text-brand-green" />
    }
  ];

  return (
    <section 
      id="why-us" 
      className="section-padding relative"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-brand-blue/80"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Why Choose Us
            <motion.span 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-brand-green"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            ></motion.span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            What sets us apart and why clients trust us for their export training and consulting needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" 
              }}
            >
              <motion.div 
                className="mr-4 bg-brand-blue rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 mt-1"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {reason.icon}
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-brand-blue mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
