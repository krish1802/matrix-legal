import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
        </div>

        {/* Office Locations */}
        <div className="border-t border-gold/10 pt-8 mb-8">
          <h4 className="font-serif text-lg font-bold text-gold-light mb-4 text-center">
            Our Offices
          </h4>
          <div className="flex justify-center gap-8">
            {[
              { city: 'New Delhi', state: 'NCR', anchor: 'new-delhi' },
              { city: 'Patna', state: 'Bihar', anchor: 'patna' }
            ].map((office) => (
              <Link
                key={office.city}
                to={`/contact#${office.anchor}`}
                className="text-beige text-center hover:text-gold transition-colors duration-200 group"
              >
                <p className="font-semibold text-sm group-hover:text-gold">{office.city}</p>
                <p className="text-xs text-brown-light">{office.state}</p>
              </Link>
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