import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const offices = [
    {
      city: 'New Delhi',
      state: 'National Capital Region',
      address: 'LGF, D-36, South Extension Part 2, New Delhi - 110049, Chamber No. 484, Patiala House Courts Complex, New Delhi - 110001',
      phone: '+91-011-41600349',
      email: 'contact@matrixlegal.in'
    },
    {
      city: 'Patna',
      state: 'Bihar',
      address: '102 A, 1st Floor, Block A, Om Nirmalaya Apartment, Parmanand Path, Nageshwar Colony, Boring Road, Patna - 800001, Chamber No. 309, 3rd Floor, Patna Civil Court, Patna - 800004',
      phone: '+91-0612-2533505',
      email: 'contact@matrixlegal.in'
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
              Get In Touch
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-brown-darkest mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-brown-dark max-w-3xl">
              Have a legal question or need professional advice? Reach out to us directly — 
              call or email our offices and we'll be happy to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.2em] text-gold font-semibold uppercase mb-4">Reach Us Directly</p>
          <h2 className="font-serif text-4xl font-bold text-brown-darkest mb-4">
            We're Here to Help
          </h2>
          <p className="text-lg text-brown-dark mb-12 leading-relaxed">
            The quickest way to get assistance is to call or email us directly. 
            Our team is available during office hours to answer your queries and schedule consultations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Call CTA */}
            <motion.a
              href="tel:+91-011-41600349"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-brown-darkest text-cream p-10 flex flex-col items-center gap-4 hover:bg-gold hover:text-brown-darkest transition-all duration-300 transform hover:-translate-y-2 shadow-lg cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border-2 border-cream group-hover:border-brown-darkest flex items-center justify-center transition-colors duration-300">
                <FaPhone className="text-2xl" />
              </div>
              <div>
                <p className="text-sm tracking-widest uppercase font-semibold mb-1 opacity-80">Call Us</p>
                <p className="font-serif text-2xl font-bold">+91-011-41600349</p>
                <p className="text-sm mt-2 opacity-70">Click to call our main office</p>
              </div>
            </motion.a>

            {/* Email CTA */}
            <motion.a
              href="mailto:contact@matrixlegal.in"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-white border-2 border-brown-darkest text-brown-darkest p-10 flex flex-col items-center gap-4 hover:bg-brown-darkest hover:text-cream transition-all duration-300 transform hover:-translate-y-2 shadow-lg cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border-2 border-brown-darkest group-hover:border-cream flex items-center justify-center transition-colors duration-300">
                <FaEnvelope className="text-2xl" />
              </div>
              <div>
                <p className="text-sm tracking-widest uppercase font-semibold mb-1 opacity-80">Email Us</p>
                <p className="font-serif text-2xl font-bold">contact@matrixlegal.in</p>
                <p className="text-sm mt-2 opacity-70">Click to send us an email</p>
              </div>
            </motion.a>
          </div>

          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-beige-light border-l-4 border-gold p-8 text-left max-w-md mx-auto"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaClock className="text-gold text-xl" />
              <h3 className="font-serif text-xl font-bold text-brown-darkest">Office Hours</h3>
            </div>
            <div className="space-y-2 text-brown-dark">
              <div className="flex justify-between">
                <span>Monday – Friday</span>
                <span className="font-semibold">9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-semibold">10:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-semibold text-brown">Closed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-4 bg-beige-light">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm tracking-[0.2em] text-gold font-semibold uppercase mb-4 text-center">Our Offices</p>
          <h2 className="font-serif text-4xl font-bold text-brown-darkest mb-4 text-center">
            Office Locations
          </h2>
          <p className="text-center text-brown-dark mb-12 text-lg">
            Visit or contact any of our offices across Northern India
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 w-full max-w-sm shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-beige-dark hover:border-gold"
              >
                <h3 className="font-serif text-2xl font-bold text-brown-darkest mb-1">
                  {office.city}
                </h3>
                <p className="text-brown text-sm mb-6 tracking-wide uppercase">{office.state}</p>
                <div className="space-y-4 text-sm text-brown-dark">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-gold mt-0.5 flex-shrink-0" />
                    <span>{office.address}</span>
                  </div>
                  <a
                    href={`tel:${office.phone.replace(/-/g, '')}`}
                    className="flex items-center gap-3 hover:text-gold transition-colors duration-200"
                  >
                    <FaPhone className="text-gold flex-shrink-0" />
                    <span>{office.phone}</span>
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-3 hover:text-gold transition-colors duration-200"
                  >
                    <FaEnvelope className="text-gold flex-shrink-0" />
                    <span>{office.email}</span>
                  </a>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={`tel:${office.phone.replace(/-/g, '')}`}
                    className="flex-1 text-center py-2 bg-brown-darkest text-cream text-xs font-semibold tracking-wider uppercase hover:bg-gold hover:text-brown-darkest transition-all duration-300"
                  >
                    Call
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="flex-1 text-center py-2 border border-brown-darkest text-brown-darkest text-xs font-semibold tracking-wider uppercase hover:bg-brown-darkest hover:text-cream transition-all duration-300"
                  >
                    Email
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;