
import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import emailjs from '@emailjs/browser';

const ProfessionalContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with your actual EmailJS Service ID, Template ID, and Public Key
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, publicKey);

      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again later or contact me directly.');
    }
  };

  const emailAddress = 'yadhuthiyakkat@gmail.com'; // Replace with your actual email
  const whatsappNumber = '9778256341'; // Replace with your actual WhatsApp number

  return (
    <section className="py-12 md:py-16 bg-white shadow-lg rounded-lg px-6">
      <div className="container mx-auto">
        <SectionHeading>Get in <span className="text-[#E95420]">Touch</span></SectionHeading>
        <p className="text-center text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#E95420] transition-shadow duration-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#E95420] transition-shadow duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#E95420] transition-shadow duration-200 resize-y"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="md:pl-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Connect</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#E95420]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <div>
                  <p className="font-semibold text-gray-800">Email:</p>
                  <a href={`mailto:${emailAddress}`} className="text-blue-600 hover:underline">{emailAddress}</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 20.895l1.455-5.344A9.998 9.998 0 0112 2C17.522 2 22 6.478 22 12s-4.478 10-10 10c-1.986 0-3.857-.611-5.42-1.666L.057 20.895zM12 20c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8c0 1.777.585 3.42 1.583 4.757L2 19.333l1.83-6.05A7.962 7.962 0 014 12c0-3.313 2.687-6 6-6s6 2.687 6 6-2.687 6-6 6zm-2-9h4c.552 0 1 .448 1 1s-.448 1-1 1h-4c-.552 0-1-.448-1-1s.448-1 1-1zm0 3h4c.552 0 1 .448 1 1s-.448 1-1 1h-4c-.552 0-1-.448-1-1s.448-1 1-1z"/></svg>
                <div>
                  <p className="font-semibold text-gray-800">WhatsApp:</p>
                  <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Yadhu, I saw your portfolio and wanted to get in touch!")}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{whatsappNumber}</a>
                </div>
              </div>
              {/* Add more social links if desired */}
              {/*
              <div className="flex items-center space-x-4">
                <svg ... >
                <div>
                  <p className="font-semibold text-gray-800">LinkedIn:</p>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/yourprofile</a>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalContactSection;
