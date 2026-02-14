import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { contactAPI } from '../services/api';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await contactAPI.submit(data);
      toast.success('Message sent successfully! We will get back to you soon.');
      reset();
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const offices = [
    {
      city: 'New Delhi',
      state: 'National Capital Region',
      address: 'Address details here',
      phone: '+91-XXX-XXX-XXXX',
      email: 'delhi@matrixlegal.in'
    },
    {
      city: 'Kolkata',
      state: 'West Bengal',
      address: 'Address details here',
      phone: '+91-XXX-XXX-XXXX',
      email: 'kolkata@matrixlegal.in'
    },
    {
      city: 'Patna',
      state: 'Bihar',
      address: 'Address details here',
      phone: '+91-XXX-XXX-XXXX',
      email: 'patna@matrixlegal.in'
    },
    {
      city: 'Allahabad',
      state: 'Uttar Pradesh',
      address: 'Address details here',
      phone: '+91-XXX-XXX-XXXX',
      email: 'allahabad@matrixlegal.in'
    },
    {
      city: 'Ranchi',
      state: 'Jharkhand',
      address: 'Address details here',
      phone: '+91-XXX-XXX-XXXX',
      email: 'ranchi@matrixlegal.in'
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
              Have a legal question, need professional advice, or want to book a consultation? Our team is here to help. 
              Reach out to us and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 shadow-lg"
            >
              <h2 className="font-serif text-3xl font-bold text-brown-darkest mb-6">
                Send us a Message / Book Consultation
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-brown-darker mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    className="w-full px-4 py-3 border border-beige-dark focus:border-gold focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brown-darker mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    className="w-full px-4 py-3 border border-beige-dark focus:border-gold focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brown-darker mb-2">
                    Phone Number
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full px-4 py-3 border border-beige-dark focus:border-gold focus:outline-none transition-colors"
                    placeholder="+91-XXX-XXX-XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brown-darker mb-2">
                    Subject
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    className="w-full px-4 py-3 border border-beige-dark focus:border-gold focus:outline-none transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brown-darker mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows="5"
                    className="w-full px-4 py-3 border border-beige-dark focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your legal needs..."
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-brown-darkest text-cream font-semibold tracking-wider uppercase text-sm hover:bg-gold hover:text-brown-darkest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-3xl font-bold text-brown-darkest mb-6">
                  Contact Information
                </h2>
                <p className="text-brown-dark mb-6 leading-relaxed">
                  We're committed to providing prompt and professional service. Feel free to reach out 
                  through any of our offices or use the contact form.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <FaPhone className="text-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-darkest mb-1">Phone</h3>
                    <p className="text-brown-dark">+91-XXX-XXX-XXXX (Main Office)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-darkest mb-1">Email</h3>
                    <p className="text-brown-dark">info@matrixlegal.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-darkest mb-1">Offices</h3>
                    <p className="text-brown-dark">
                      New Delhi, Kolkata, Patna, Allahabad, Ranchi
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-beige-light p-6 mt-8">
                <h3 className="font-serif text-xl font-bold text-brown-darkest mb-3">
                  Office Hours
                </h3>
                <div className="space-y-2 text-brown-dark">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-4 bg-beige-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-brown-darkest mb-4 text-center">
            Our Office Locations
          </h2>
          <p className="text-center text-brown-dark mb-12 text-lg">
            Visit us at any of our offices across Northern India
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="font-serif text-2xl font-bold text-brown-darkest mb-2">
                  {office.city}
                </h3>
                <p className="text-brown text-sm mb-4">{office.state}</p>
                <div className="space-y-2 text-sm text-brown-dark">
                  <p className="flex items-start">
                    <FaMapMarkerAlt className="text-gold mt-1 mr-2 flex-shrink-0" />
                    {office.address}
                  </p>
                  <p className="flex items-center">
                    <FaPhone className="text-gold mr-2 flex-shrink-0" />
                    {office.phone}
                  </p>
                  <p className="flex items-center">
                    <FaEnvelope className="text-gold mr-2 flex-shrink-0" />
                    {office.email}
                  </p>
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
