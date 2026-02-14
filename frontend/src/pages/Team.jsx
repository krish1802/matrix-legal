import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'Mr. Rajesh Ranjan',
      position: 'Managing Partner',
      experience: '25+ years',
      specialization: 'Civil, Labour and Criminal Litigation',
      description: 'Advocate having more than 25 years of experience in civil, labour and criminal litigation in Patna High Court, Labour Tribunal and District Court.',
      location: 'Patna'
    },
    {
      name: 'Mr. Nagesh',
      position: 'Partner',
      experience: '21+ years',
      specialization: 'Labour and Employment Laws',
      description: 'Managing the firm\'s Delhi office with 18 years of handling litigation and advisory work for corporate groups, MNCs and NGOs.',
      location: 'New Delhi'
    },
    {
      name: 'Mr. Pankaj Kumar',
      position: 'Associate',
      experience: '17+ years',
      specialization: 'Labour Matters',
      description: 'Advocate with Post Graduate Degree in Personnel Management & Industrial Relations, specializing in labour matters.',
      location: 'Patna'
    },
    {
      name: 'Mr. Sudhir Kumar Maurya',
      position: 'Associate',
      experience: '20+ years',
      specialization: 'District Court Practice',
      description: 'Advocate with extensive experience in District Court proceedings.',
      location: 'Patna'
    },
    {
      name: 'Mr. Dipak Kumar',
      position: 'Associate',
      experience: '14+ years',
      specialization: 'Statutory Compliances & Labour Law',
      description: 'Independent auditor of statutory compliances with corporate experience.',
      location: 'Patna'
    },
    {
      name: 'Mr. Atul Shankar',
      position: 'Associate',
      experience: '15+ years',
      specialization: 'High Court & District Court Litigation',
      description: 'Advocate handling litigation in Patna High Court and District Court.',
      location: 'Patna'
    },
    {
      name: 'Ms. Maria Nazir',
      position: 'Associate',
      experience: '8+ years',
      specialization: 'High Court, District Court & Consumer Forum',
      description: 'Advocate with corporate experience specializing in High Court, District Court and consumer forum matters.',
      location: 'Patna'
    },
    {
      name: 'Mr. Amit Kumar Singh',
      position: 'Associate',
      experience: '9+ years',
      specialization: 'District Court & Consumer Forum',
      description: 'Advocate with experience in District Court and consumer forum proceedings.',
      location: 'Patna'
    },
    {
      name: 'Mr. Bhola Shankar',
      position: 'Associate',
      experience: '7+ years',
      specialization: 'DRT, RERA & District Courts',
      description: 'Advocate specializing in Debt Recovery Tribunal, RERA Authority and District Courts.',
      location: 'Patna'
    },
    {
      name: 'Md. Farooq',
      position: 'Advocate',
      experience: 'Experienced',
      specialization: 'General Practice',
      description: 'Advocate with expertise in various legal matters.',
      location: 'Patna'
    },
    {
      name: 'Mr. Yash Anand',
      position: 'Advocate',
      experience: 'Experienced',
      specialization: 'General Practice',
      description: 'Advocate with expertise in various legal matters.',
      location: 'Patna'
    },
    {
      name: 'Mr. Akshay Tripathi',
      position: 'Advocate',
      experience: 'Experienced',
      specialization: 'General Practice',
      description: 'Advocate with expertise in various legal matters.',
      location: 'Patna'
    },
    {
      name: 'Ms. Surabhi Nirmal',
      position: 'Advocate',
      experience: 'Experienced',
      specialization: 'General Practice',
      description: 'Advocate with expertise in various legal matters.',
      location: 'Patna'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-beige-light to-cream py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.2em] text-gold font-semibold uppercase mb-4">
              Our Legal Experts
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-brown-darkest mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-brown-dark max-w-3xl">
              A dedicated team of in-house lawyers and paralegal staff with extensive experience 
              across various practice areas and jurisdictions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-brown-darkest mb-4 text-center">
            Leadership
          </h2>
          <p className="text-center text-brown-dark mb-12 text-lg">
            Our managing partners bring decades of experience and expertise
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {teamMembers.slice(0, 2).map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 shadow-lg border-t-4 border-gold"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-brown-darkest mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gold font-semibold text-lg mb-2">{member.position}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-brown font-semibold">{member.experience}</p>
                    <p className="text-xs text-brown-light">{member.location}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-brown-dark mb-1">Specialization:</p>
                  <p className="text-brown italic">{member.specialization}</p>
                </div>

                <p className="text-brown-dark leading-relaxed mb-4">
                  {member.description}
                </p>

                <div className="flex items-center space-x-4 pt-4 border-t border-beige-dark">
                  <button className="flex items-center space-x-2 text-gold hover:text-gold-light transition-colors">
                    <FaEnvelope />
                    <span className="text-sm">Contact</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Associates Section */}
          <h2 className="font-serif text-4xl font-bold text-brown-darkest mb-4 text-center">
            Associates & Advocates
          </h2>
          <p className="text-center text-brown-dark mb-12 text-lg">
            Our experienced team of legal professionals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.slice(2).map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-beige-dark hover:border-gold"
              >
                <div className="mb-4">
                  <h3 className="font-serif text-xl font-bold text-brown-darkest mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold font-semibold">{member.position}</p>
                  <p className="text-sm text-brown mt-1">{member.experience} Experience</p>
                </div>
                
                <div className="mb-3">
                  <p className="text-xs font-semibold text-brown-dark uppercase tracking-wide mb-1">
                    Specialization
                  </p>
                  <p className="text-sm text-brown-dark">{member.specialization}</p>
                </div>

                <p className="text-sm text-brown-dark leading-relaxed">
                  {member.description}
                </p>

                <div className="mt-4 pt-4 border-t border-beige-dark">
                  <p className="text-xs text-brown-light">
                    <span className="font-semibold">Office:</span> {member.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-brown-darkest text-cream text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Work With Our Expert Team
          </h2>
          <p className="text-xl text-beige mb-8">
            Get in touch with our experienced legal professionals for your legal needs
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gold text-brown-darkest font-semibold tracking-wider uppercase text-sm hover:bg-gold-light transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
