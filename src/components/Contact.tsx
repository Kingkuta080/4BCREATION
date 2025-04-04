import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const formAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="contact" 
      className="section-padding relative py-16 md:py-24 lg:py-32"
      style={{
        backgroundImage: 'url(../public/bg.png)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-brand-blue/80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Reach out to us to learn how we can help your business succeed in the global marketplace.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          <motion.div 
            className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-brand-blue mb-6">Send us a message</h3>
            <motion.form
              variants={formAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="space-y-4 sm:space-y-6">
                <motion.div variants={itemAnimation}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="w-full"
                  />
                </motion.div>
                <motion.div variants={itemAnimation}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full"
                  />
                </motion.div>
                <motion.div variants={itemAnimation}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Subject"
                    className="w-full"
                  />
                </motion.div>
                <motion.div variants={itemAnimation}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="w-full min-h-[150px]"
                  />
                </motion.div>
                <motion.div 
                  variants={itemAnimation}
                  whileHover={{ scale: 1.02 }}
                >
                  <Button 
                    className="w-full bg-brand-blue hover:bg-brand-blue/90 flex items-center justify-center gap-2"
                    whileTap={{ scale: 0.98 }}
                    as={motion.button}
                  >
                    <FaPaperPlane className="mr-1" /> Send Message
                  </Button>
                </motion.div>
              </div>
            </motion.form>
          </motion.div>

          <div className="space-y-6 md:space-y-8">
            <motion.div 
              className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-brand-blue mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Address</h4>
                    <p className="text-gray-600">No 5 Alexander Street, Life Camp, Abuja</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaPhone className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">+234 90 333 26601</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaEnvelope className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">4bcreationn@gmail.com</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-brand-blue mb-4 sm:mb-6">Business Hours</h3>
              <div className="space-y-2 sm:space-y-3">
                <motion.div 
                  className="flex justify-between"
                  whileHover={{ backgroundColor: "rgba(110, 209, 136, 0.1)", padding: "0.5rem", borderRadius: "0.25rem" }}
                >
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="text-gray-800 font-medium">9:00 AM - 5:00 PM</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between"
                  whileHover={{ backgroundColor: "rgba(110, 209, 136, 0.1)", padding: "0.5rem", borderRadius: "0.25rem" }}
                >
                  <span className="text-gray-600">Saturday:</span>
                  <span className="text-gray-800 font-medium">9:00 AM - 1:00 PM</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between"
                  whileHover={{ backgroundColor: "rgba(110, 209, 136, 0.1)", padding: "0.5rem", borderRadius: "0.25rem" }}
                >
                  <span className="text-gray-600">Sunday:</span>
                  <span className="text-gray-800 font-medium">Closed</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
