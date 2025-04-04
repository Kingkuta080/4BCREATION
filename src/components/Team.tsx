import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Bg3, Bg4, Bg5 } from '@/assets';

const Team = () => {
  const teamMembers = [
    {
      name: "ABDULLAHI SIDI-ALIYU",
      position: "CEO",
      bio: "Over 30 years of experience in export development and promotion, business strategy and consulting. Highly accomplished retired civil servant with 35 years of experience in export promotion, economic planning, and research. Proven track record of success in leadership roles, including 10 years as Director at the Nigerian Export Promotion Council (NEPC).",
      image: Bg4,
      shortBio: "Over 30 years of experience in export development and promotion, business strategy and consulting."
    },
    {
      name: "COLLINS EZEIRUAKU NWOSU",
      position: "Trade Ambassador",
      bio: "Collins Ezeiruaku Nwosu is currently the Trade Ambassador to the International Trade Facilitation Association (ITFA). The focus is helping businesses to boost sales, improve market share through strategic and safe global expansion.",
      image: Bg3,
      shortBio: "Trade Ambassador to the International Trade Facilitation Association (ITFA)."
    },
    {
      name: "BASHIR ADAMU ALIYU",
      position: "Senior Executive",
      bio: "12 years successful experience providing fiscal, strategic and operational leadership in dynamic and changing markets. Proven achievements with strong technical background in international trade, commodities, regulation and quality assurance. Bilingual - English, Hausa and Arabic. Extensive business background in international trade, multi-cultural environments.",
      image: Bg5,
      shortBio: "12 years experience providing fiscal and strategic leadership in international trade."
    }
  ];

  return (
    <section id="team" className="section-padding">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="heading-primary relative inline-block">
            Our Team
            <motion.span 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-brand-green"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            ></motion.span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Meet our experienced professionals who are dedicated to your success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden card-shadow h-full">
                <motion.div 
                  className="h-64 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={member.image.toString()} 
                    alt={member.name}
                    className="w-full  object-cover object-center transition-transform duration-500"
                  />
                </motion.div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-brand-blue">{member.name}</h3>
                  <p className="text-brand-green font-medium mb-4">{member.position}</p>
                  
                  <HoverCard>
                    <HoverCardTrigger>
                      <motion.p 
                        className="text-gray-600 mb-4 line-clamp-2 cursor-pointer hover:text-brand-blue"
                        whileHover={{ scale: 1.01 }}
                      >
                        {member.shortBio} <span className="text-xs text-brand-blue ml-1">(hover for more)</span>
                      </motion.p>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 text-sm">
                      <p className="text-gray-700">{member.bio}</p>
                    </HoverCardContent>
                  </HoverCard>
                  
                  <div className="flex space-x-4 text-brand-blue">
                    <motion.a 
                      href="#" 
                      className="hover:text-brand-green transition-colors"
                      whileHover={{ y: -3, scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaLinkedin className="h-5 w-5" />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="hover:text-brand-green transition-colors"
                      whileHover={{ y: -3, scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaTwitter className="h-5 w-5" />
                    </motion.a>
                    <motion.a 
                      href="mailto:4bcreationn@gmail.com" 
                      className="hover:text-brand-green transition-colors"
                      whileHover={{ y: -3, scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaEnvelope className="h-5 w-5" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
