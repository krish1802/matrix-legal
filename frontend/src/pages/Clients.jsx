import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaHandshake, FaBuilding, FaAward } from 'react-icons/fa';

const Clients = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-beige-light to-cream py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.2em] text-gold font-semibold uppercase mb-4">
              Our Portfolio
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-brown-darkest mb-6">
              Our Clients
            </h1>
            <p className="text-xl text-brown-dark max-w-3xl mx-auto mb-8">
              We are proud to serve some of the most respected organizations across various industries. 
              Our diverse client base reflects our expertise in handling complex legal matters across sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-brown-darkest mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-brown-dark mb-12 leading-relaxed">
            Matrix Legal has established strong relationships with leading corporations, banks, financial institutions, 
            and multinational companies across India. Our commitment to excellence and client satisfaction has made us 
            the preferred legal partner for organizations in various sectors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 shadow-md"
            >
              <div className="font-serif text-5xl font-bold text-gold mb-2">25+</div>
              <p className="text-brown-dark font-medium">Years of Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 shadow-md"
            >
              <div className="font-serif text-5xl font-bold text-gold mb-2">500+</div>
              <p className="text-brown-dark font-medium">Clients Served</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 shadow-md"
            >
              <div className="font-serif text-5xl font-bold text-gold mb-2">10+</div>
              <p className="text-brown-dark font-medium">Industry Sectors</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client List On Demand */}
      <section className="py-20 px-4 bg-beige-light">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-12 shadow-xl border-t-4 border-gold">
              <FaHandshake className="text-6xl text-gold mx-auto mb-6" />
              <h2 className="font-serif text-4xl font-bold text-brown-darkest mb-6">
                Client List Available On Demand
              </h2>
              <p className="text-lg text-brown-dark mb-8 leading-relaxed">
                Due to confidentiality agreements and professional ethics, we provide our detailed client list 
                upon request. Our portfolio includes leading banks, financial institutions, multinational corporations, 
                and public sector undertakings across various industries.
              </p>
              <p className="text-lg text-brown-dark mb-10 leading-relaxed">
                To receive our complete client list and references, please contact us directly.
              </p>
              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-brown-darkest text-cream font-semibold tracking-wider uppercase text-sm hover:bg-gold hover:text-brown-darkest transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl"
              >
                Contact Us for Client List
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-brown-darkest mb-4 text-center">
            Industries We Serve
          </h2>
          <p className="text-center text-brown-dark mb-12 text-lg">
            Our expertise spans across multiple sectors
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaBuilding />, name: 'Banking & Finance' },
              { icon: <FaAward />, name: 'Insurance' },
              { icon: <FaBuilding />, name: 'Telecommunications' },
              { icon: <FaBuilding />, name: 'Media & Entertainment' },
              { icon: <FaBuilding />, name: 'Cement & Construction' },
              { icon: <FaBuilding />, name: 'Electronics & Technology' },
              { icon: <FaBuilding />, name: 'Oil & Gas' },
              { icon: <FaBuilding />, name: 'E-Commerce' },
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-gold"
              >
                <div className="text-4xl text-gold mb-3 flex justify-center">
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-brown-darkest">
                  {industry.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-brown-darkest text-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">
            Why Leading Organizations Choose Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                <span className="text-2xl text-gold">✓</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-2 text-gold-light">Proven Track Record</h3>
                <p className="text-beige">25+ years of successful litigation and advisory services across multiple jurisdictions</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                <span className="text-2xl text-gold">✓</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-2 text-gold-light">Expert Team</h3>
                <p className="text-beige">Dedicated team of specialized lawyers with expertise in diverse legal areas</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                <span className="text-2xl text-gold">✓</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-2 text-gold-light">Pan-India Presence</h3>
                <p className="text-beige">Offices in key cities providing comprehensive legal services across Northern India</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                <span className="text-2xl text-gold">✓</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-2 text-gold-light">Client-Centric Approach</h3>
                <p className="text-beige">Personalized attention and customized solutions for optimum client satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-beige-light text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown-darkest mb-6">
              Request Our Client Portfolio
            </h2>
            <p className="text-xl text-brown-dark mb-4">
              Discover why leading organizations trust Matrix Legal for their legal needs
            </p>
            <p className="text-lg text-brown mb-8">
              Contact us to receive our detailed client list and case references
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-brown-darkest text-cream font-semibold tracking-wider uppercase text-sm hover:bg-gold hover:text-brown-darkest transition-all duration-300"
              >
                <FaEnvelope className="inline mr-2" />
                Contact Us
              </Link>
              <a
                href="tel:+91XXXXXXXXXX"
                className="inline-block px-10 py-4 border-2 border-brown-darkest text-brown-darkest font-semibold tracking-wider uppercase text-sm hover:bg-brown-darkest hover:text-cream transition-all duration-300"
              >
                <FaPhone className="inline mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
