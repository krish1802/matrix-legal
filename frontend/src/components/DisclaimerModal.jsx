import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBalanceScale } from 'react-icons/fa';

const DisclaimerModal = ({ isVisible, onAccept }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brown-darkest/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div className="bg-cream w-full max-w-2xl shadow-2xl border-t-4 border-gold">
              {/* Header */}
              <div className="bg-brown-darkest px-8 py-6 flex items-center gap-4">
                <FaBalanceScale className="text-gold text-3xl flex-shrink-0" />
                <div>
                  <h2 className="font-serif text-2xl font-bold text-cream">
                    MATRIX LEGAL
                  </h2>
                  <p className="text-xs tracking-[0.2em] text-gold uppercase mt-0.5">
                    Legal Disclaimer
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="px-8 py-6">
                <div className="bg-beige-light border-l-4 border-gold p-5 mb-6">
                  <p className="text-sm text-brown-dark leading-relaxed">
                    <strong className="text-brown-darkest">Disclaimer:</strong> As per the rules of the Bar Council of India,
                    we are not permitted to solicit work and advertise. Any transmission, receipt, or use of this website
                    would not create any lawyer-client relationship. The information provided under this website is solely
                    available at your request for informational purposes only, should not be interpreted as soliciting or
                    advertisement. We are not liable for any consequence of any action taken by the user relying on
                    material/information provided under this website. In cases where the user has any legal issues, he/she
                    in all cases must seek independent legal advice.
                  </p>
                </div>

                <p className="text-sm text-brown-dark mb-6">
                  By clicking <strong>"I Agree & Proceed"</strong>, you acknowledge that you have read and understood
                  this disclaimer and agree to the terms stated above.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={onAccept}
                    className="flex-1 px-6 py-3 bg-brown-darkest text-cream font-semibold tracking-wider uppercase text-sm hover:bg-gold hover:text-brown-darkest transition-all duration-300"
                  >
                    I Agree &amp; Proceed
                  </button>
                  <a
                    href="https://www.google.com"
                    className="flex-1 px-6 py-3 border-2 border-brown-darkest text-brown-darkest font-semibold tracking-wider uppercase text-sm hover:bg-brown-darkest hover:text-cream transition-all duration-300 text-center"
                  >
                    I Do Not Agree
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerModal;
