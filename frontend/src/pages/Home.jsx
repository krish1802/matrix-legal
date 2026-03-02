import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaHandshake, FaShieldAlt, FaGavel, FaBuilding, FaFileContract } from 'react-icons/fa';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <FaGavel className="text-4xl text-gold" />,
      title: 'Criminal & Civil Litigation',
      description: 'Comprehensive services in all aspects of criminal and civil litigation including drafting legal notices, filing complaints and suits, and handling proceedings in all courts and tribunals'
    },
    {
      icon: <FaBuilding className="text-4xl text-gold" />,
      title: 'Real Estate Laws',
      description: 'Investigation and reports on title, conveyance of immovable property, large-scale development projects, land acquisition, stamp duty and registration of documents'
    },
    {
      icon: <FaFileContract className="text-4xl text-gold" />,
      title: 'Labour Laws & Statutory Compliances',
      description: 'HR policies, employee relations, trade unions, dismissals, compliance with EPF, ESI, Factories Act, Industrial Disputes Act, and all labour statutes'
    },
    {
      icon: <FaBalanceScale className="text-4xl text-gold" />,
      title: 'Alternative Dispute Resolution',
      description: 'Dispute management systems, mediation, conciliation, arbitration, and early neutral evaluation services'
    },
    {
      icon: <FaShieldAlt className="text-4xl text-gold" />,
      title: 'Consumer Rights & Product Liability',
      description: 'Protection of consumer rights and product liabilities for consumers, manufacturers and suppliers. Litigation in District Forums, State and National Commission'
    },
    {
      icon: <FaHandshake className="text-4xl text-gold" />,
      title: 'Banking & Debt Recovery',
      description: 'Litigation under SARFAESI Act in Debt Recovery Tribunal on behalf of banks and financial institutions'
    }
  ];

  const values = [
    {
      icon: '⚖️',
      title: 'Justice',
      description: 'Unwavering commitment to upholding justice and the rule of law in every matter'
    },
    {
      icon: '🤝',
      title: 'Equality',
      description: 'Treating all clients with equal respect and dedication, regardless of size or sector'
    },
    {
      icon: '🛡️',
      title: 'Trust',
      description: 'Building lasting relationships through integrity, confidentiality, and excellence'
    }
  ];

  const offices = ['New Delhi', 'Patna'];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] bg-gradient-to-br from-beige-light via-cream to-beige flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 animate-float">
          <div className="w-full h-full bg-gradient-radial from-gold/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm tracking-[0.2em] text-brown font-semibold uppercase mb-4">
              Full Service Law Firm
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl font-extrabold text-brown-darkest mb-6 leading-tight"
          >
            Sophisticated<br />Legal Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-brown-dark max-w-3xl mb-8 font-light leading-relaxed"
          >
            Providing exceptional legal services with a client-centric approach across Northern India and beyond
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-brown-darkest text-cream font-semibold tracking-wider uppercase text-sm hover:bg-gold hover:text-brown-darkest transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-8 mt-12"
          >
            <div>
              <div className="font-serif text-4xl font-extrabold text-gold mb-1">25+</div>
              <div className="text-sm tracking-wider uppercase text-brown font-medium">Years Experience</div>
            </div>
            <div>
              <div className="font-serif text-4xl font-extrabold text-gold mb-1">5</div>
              <div className="text-sm tracking-wider uppercase text-brown font-medium">Office Locations</div>
            </div>
            <div>
              <div className="font-serif text-4xl font-extrabold text-gold mb-1">Pan-India</div>
              <div className="text-sm tracking-wider uppercase text-brown font-medium">Presence</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        
        <div className="max-w-5xl mx-auto">
          <p className="text-sm tracking-[0.2em] text-gold font-semibold uppercase mb-4">Who We Are</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown-darkest mb-8">About Matrix Legal</h2>
          
          <div className="space-y-6 text-lg text-brown-dark leading-relaxed">
            <p>
              We handle litigation in Supreme Court, High Courts, Labour Courts & Industrial Tribunal, District Courts, 
              District Consumer Forums and State Commission, Debt Recovery Tribunal and other forums including arbitral tribunal. 
              Our non-litigation work includes legal due diligence, consultation, documentation, drafting, advisory/written opinion, 
              statutory compliances etc.
            </p>
            <p>
              Matrix Legal is a specialized, client-centric law firm with offices in New Delhi, Kolkata, Patna, 
              Allahabad and Ranchi with a Pan-India presence and unrivalled outreach in Northern India. We have a dedicated 
              team of in-house lawyers and other paralegal staff committed to delivering exceptional legal services.
            </p>
            <p>
              Our firm provides comprehensive services in all aspects of civil and criminal litigation, real estate transactions, 
              labour laws, alternative dispute resolution, consumer rights, and product liability matters.
            </p>
          </div>

          <div className="mt-8 bg-beige-light border-l-4 border-gold p-8">
            <p className="text-lg italic text-brown-darker leading-relaxed">
              "We provide advice and opinion in matters relating to civil and criminal law which includes drafting/vetting 
              of legal notices, handling proceedings, and providing comprehensive legal solutions to our clients including 
              banks, financial institutions, multinational corporations, and public sector undertakings."
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-beige-light to-cream">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm tracking-[0.2em] text-gold font-semibold uppercase mb-4">Our Expertise</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown-darkest mb-12">Practice Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 border-t-4 border-beige-dark hover:border-gold transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-xl"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-serif text-2xl font-bold text-brown-darkest mb-3">
                  {service.title}
                </h3>
                <p className="text-brown-dark leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 border-2 border-brown-darkest text-brown-darkest font-semibold tracking-wider uppercase text-sm hover:bg-brown-darkest hover:text-cream transition-all duration-300"
            >
              Contact Us for Legal Services
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brown-darkest text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(200, 168, 130, 0.3) 35px, rgba(200, 168, 130, 0.3) 70px)'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-sm tracking-[0.2em] text-gold font-semibold uppercase mb-4">Our Foundation</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 border border-gold/20 bg-cream/5 hover:bg-cream/10 hover:border-gold transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-serif text-2xl font-bold text-gold-light mb-3">
                  {value.title}
                </h3>
                <p className="text-beige leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm tracking-[0.2em] text-gold font-semibold uppercase mb-4">Our Presence</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown-darkest mb-4">Office Locations</h2>
          <p className="text-lg text-brown-dark mb-12">
            Pan-India presence with unrivalled outreach in Northern India
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-beige-light p-6 w-40 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-beige-dark hover:border-gold"
              >
                <h3 className="font-serif text-xl font-bold text-brown-darkest">{office}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brown-dark to-brown-darkest text-center text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-radial from-gold/20 to-transparent animate-float"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Discuss Your Legal Needs?
          </h2>
          <p className="text-xl text-beige mb-8 leading-relaxed">
            Our team of experienced professionals is here to provide you with personalized attention and customized solutions
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-cream text-brown-darkest font-semibold tracking-wider uppercase text-sm hover:bg-transparent hover:text-cream border-2 border-cream transition-all duration-300 transform hover:-translate-y-1"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
