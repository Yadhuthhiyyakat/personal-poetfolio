
import React from 'react';
import ContactSection from '../sections/ContactSection';
import WindowFrame from '../components/WindowFrame';

const ContactPage: React.FC = () => {
  return (
    <div className="p-4 h-full flex items-start justify-center">
      <WindowFrame title="Inbox - Mail" className="w-full h-full" iconSrc="/images/logos/mail.png"> {/* Removed max-w-5xl */}
        <ContactSection />
      </WindowFrame>
    </div>
  );
};

export default ContactPage;