
import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaLightbulb, FaHandshake, FaUsers } from 'react-icons/fa';

const CoreValues = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our training programs to our consulting services.",
      icon: <FaStar className="text-3xl text-brand-green" />
    },
    {
      title: "Innovation",
      description: "We embrace innovation and continuously seek new ways to help our clients succeed in the global marketplace.",
      icon: <FaLightbulb className="text-3xl text-brand-green" />
    },
    {
      title: "Integrity",
      description: "We conduct our business with the highest ethical standards and maintain transparent relationships with our clients.",
      icon: <FaHandshake className="text-3xl text-brand-green" />
    },
    {
      title: "Collaboration",
      description: "We believe in the power of collaboration and work closely with our clients to achieve mutual success.",
      icon: <FaUsers className="text-3xl text-brand-green" />
    }
  ];

  return (
    <section 
      className="section-padding relative"
      style={{
        backgroundImage: 'url(../public/bg2.PNG)',
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
            Our Core Values
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Our commitment to your success extends beyond service delivery.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-8 text-center shadow-lg transform transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1
              }}
              whileHover={{ 
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                y: -8
              }}
            >
              <motion.div 
                className="mb-6 flex justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {value.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-brand-blue mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
