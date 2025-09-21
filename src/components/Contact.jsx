import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send, User, MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import programming from "../assets/contact.svg";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [sphereRotation, setSphereRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSphereRotation(prev => prev + 0.5), 50);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status.message) setStatus({ type: '', message: '' });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return setStatus({ type: 'error', message: 'Please enter your name' }), false;
    if (!formData.email.trim()) return setStatus({ type: 'error', message: 'Please enter your email' }), false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return setStatus({ type: 'error', message: 'Please enter a valid email address' }), false;
    if (!formData.message.trim()) return setStatus({ type: 'error', message: 'Please enter your message' }), false;
    if (formData.message.length < 10) return setStatus({ type: 'error', message: 'Message should be at least 10 characters long' }), false;
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await emailjs.send(
        'service_xpbmq4i',
        'template_paqvnfq',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Ashutosh patro',
        },
        'QIVkVAcGB2dBHmmH-'
      );

      if (response.status === 200 || response.text === 'OK') {
        setStatus({
          type: 'success',
          message: "Thank you! Your message has been sent successfully. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Unexpected response from EmailJS');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or contact me directly via email.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id='contact' className="py-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full mb-6 shadow-lg">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <MessageCircle className="w-6 h-6 mr-3 text-blue-600" />
              Send me a message
            </h3>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageCircle className="w-5 h-5 text-gray-400 absolute left-3 top-4" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                    placeholder="Tell me about your project or just say hello..."
                    required
                  />
                </div>
                <div className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {formData.message.length}/500
                </div>
              </div>

              {status.message && (
                <div className={`flex items-center p-4 rounded-lg ${
                  status.type === 'success'
                    ? 'bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-700'
                    : 'bg-red-50 dark:bg-red-900 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-700'
                }`}>
                  {status.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  )}
                  <p className="text-sm">{status.message}</p>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" /> Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center h-full min-h-[600px]">
            <img 
              src={programming}
              alt="My Tech Universe"
              className="max-w-full h-auto rounded-xl dark:brightness-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;