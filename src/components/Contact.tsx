
import React, { useState } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const ContactInfo = () => (
  <div className="space-y-4">
    <h3 className="text-2xl font-semibold text-navy mb-6">Get In Touch</h3>
    <p className="text-charcoal/80 mb-8">
      Feel free to reach out for collaborations, inquiries, or just to say hello. I'll get back to you as soon as possible.
    </p>
    
    <div className="flex items-center space-x-4">
      <div className="bg-navy/10 p-3 rounded-full text-navy">
        <Mail size={20} />
      </div>
      <div>
        <p className="font-medium text-navy">Email</p>
        <a href="mailto:007rashidansari@gmail.com" className="text-charcoal/80 hover:text-navy transition-colors">
          007rashidansari@gmail.com
        </a>
      </div>
    </div>
    
    <div className="flex items-center space-x-4">
      <div className="bg-navy/10 p-3 rounded-full text-navy">
        <Phone size={20} />
      </div>
      <div>
        <p className="font-medium text-navy">Phone</p>
        <a href="tel:+918285300550" className="text-charcoal/80 hover:text-navy transition-colors">
          +91 8285300550
        </a>
      </div>
    </div>
    
    <div className="flex items-center space-x-4">
      <div className="bg-navy/10 p-3 rounded-full text-navy">
        <Linkedin size={20} />
      </div>
      <div>
        <p className="font-medium text-navy">LinkedIn</p>
        <a href="https://linkedin.com/in/rashid007fce" target="_blank" rel="noopener noreferrer" className="text-charcoal/80 hover:text-navy transition-colors">
          linkedin.com/in/rashid007fce
        </a>
      </div>
    </div>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-2xl font-semibold text-navy mb-6">Send Me a Message</h3>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors resize-none"
          placeholder="Your message..."
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-navy hover:bg-navy/90 text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-navy/30 disabled:opacity-70 flex justify-center items-center"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
      
      {submitSuccess && (
        <div className="text-center py-3 px-4 bg-green-50 text-green-800 rounded-lg">
          Thank you! Your message has been sent successfully.
        </div>
      )}
    </form>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-offwhite">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-10 animate-fade-in">
              <ContactInfo />
            </div>
            
            <div className="p-6 md:p-10 bg-gray-50 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
