
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FaGraduationCap, FaUsersCog, FaLaptop, FaHandshake } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Export Training Programs",
      items: [
        "Fundamentals of International Trade",
        "Export Documentation and Compliance",
        "Market Entry Strategies",
        "Cross-Cultural Communication and Negotiation",
        "Risk Management in Global Trade"
      ],
      icon: <FaGraduationCap className="text-4xl text-brand-blue mb-4" />
    },
    {
      title: "Customized Workshops",
      description: "Tailored training sessions designed to address the specific needs of businesses, industries, or regions.",
      icon: <FaUsersCog className="text-4xl text-brand-blue mb-4" />
    },
    {
      title: "E-Learning Platforms",
      description: "Online courses and resources for flexible, self-paced learning.",
      icon: <FaLaptop className="text-4xl text-brand-blue mb-4" />
    },
    {
      title: "Networking and Partnerships",
      description: "Facilitating connections with global trade experts, industry leaders, and potential partners.",
      icon: <FaHandshake className="text-4xl text-brand-blue mb-4" />
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-primary relative inline-block">
            Our Services
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-brand-green"></span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            We provide comprehensive export training and consulting services to help your business thrive in the global marketplace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-shadow hover:border-brand-green transition-all duration-300 h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="mt-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-4">{service.title}</h3>
                {service.description ? (
                  <p className="text-gray-600">{service.description}</p>
                ) : (
                  <ul className="text-left text-gray-600 space-y-2">
                    {service.items?.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-brand-green mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
