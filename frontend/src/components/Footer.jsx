import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { newsletterAPI } from '../services/api';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setLoading(true);
    try {
      await newsletterAPI.subscribe(email);
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to subscribe');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-brown-darkest text-beige border-t border-brown-dark/20">
      {/* Legal Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-cream/5 border border-gold/10 p-6 rounded-sm">
          <p className="text-sm text-brown-light leading-relaxed">
            <strong>Disclaimer:</strong> As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise. 
            Any transmission, receipt, or use of this website would not create any lawyer-client relationship. The information provided 
            under this website is solely available at your request for informational purposes only, should not be interpreted as soliciting 
            or advertisement. We are not liable for any consequence of any action taken by the user relying on material/information provided 
            under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="mb-4">
              <h3 className="font-serif text-2xl font-extrabold text-cream mb-1">
                MATRIX LEGAL
              </h3>
              <p className="text-xs text-brown tracking-[0.15em] uppercase">
                Justice . Equality . Trust
              </p>
            </div>
            <p className="text-beige text-sm leading-relaxed mb-4">
              A specialised, client centric law firm with Pan-India presence providing sophisticated 
              legal advice and services since 2007.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-gold-light mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Team', 'Clients', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-beige hover:text-gold transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-serif text-lg font-bold text-gold-light mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              {[
                'Criminal & Civil Litigation',
                'Real Estate Laws',
                'Labour Laws',
                'Alternative Dispute Resolution',
                'Consumer Rights',
                'Banking & Debt Recovery'
              ].map((area) => (
                <li key={area}>
                  <Link
                    to="/services"
                    className="text-beige hover:text-gold transition-colors text-sm"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-bold text-gold-light mb-4">Newsletter</h4>
            <p className="text-beige text-sm mb-4">
              Subscribe to receive legal updates and insights
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-cream/10 border border-gold/20 text-cream placeholder-brown text-sm focus:outline-none focus:border-gold transition-colors"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-2 bg-gold text-brown-darkest font-semibold text-sm tracking-wide uppercase hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Office Locations */}
        <div className="border-t border-gold/10 pt-8 mb-8">
          <h4 className="font-serif text-lg font-bold text-gold-light mb-4 text-center">
            Our Offices
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {[
              { city: 'New Delhi', state: 'NCR' },
              { city: 'Kolkata', state: 'West Bengal' },
              { city: 'Patna', state: 'Bihar' },
              { city: 'Allahabad', state: 'Uttar Pradesh' },
              { city: 'Ranchi', state: 'Jharkhand' }
            ].map((office) => (
              <div key={office.city} className="text-beige">
                <p className="font-semibold text-sm">{office.city}</p>
                <p className="text-xs text-brown-light">{office.state}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/10 pt-8 text-center">
          <p className="text-brown text-sm">
            © {new Date().getFullYear()} Matrix Legal. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
