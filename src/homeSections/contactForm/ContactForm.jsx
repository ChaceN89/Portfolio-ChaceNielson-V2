import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import ContactToast from './ContactToast';
import MyButton from '../../components/uiElements/MyButton';
import ImageComponent from '../../wrappers/ImageComponent';

const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the emailjs configuration is set up correctly
    if (!EMAILJS_USER_ID || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      toast.error('EmailJS configuration is missing or incorrect.');
      return;
    }

    return ;
    // Create the email template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      reply_to: email
    };

    // Use emailjs to send the email
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_USER_ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      displaySuccessToast();
      setName('');
      setEmail('');
      setMessage('');
    }, (error) => {
      console.log('FAILED...', error);
      displayErrorToast();
    });
  };

  const displaySuccessToast = () => {
    toast.custom((t) => (
      <ContactToast t={t} />
    ));
  };

  const displayErrorToast = () => {
    toast.error('Failed to send email. Please try again later.');
  };

  return (
    <section className='min-h-section-height  p-4'>
      <Toaster />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <div className="rounded-xl">
            <h2 className="font-bold">Let's Connect</h2>
            <form onSubmit={handleSubmit} className="mt-4 space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-secondary">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="text-primary mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-medium text-secondary">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-primary mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-base font-medium text-secondary">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  maxLength="800"
                  className="text-primary min-h-28 h-20 xl:h-40 2xl:h-64 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                />
              </div>
              <div className='w-full flex justify-start'>
                <MyButton buttonType="submit">Send Message</MyButton>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:block md:w-1/3">
          <ImageComponent
            className="w-full h-full object-cover"
            src={process.env.PUBLIC_URL + "/png-portraits/chace-1.png"}
            alt="contact page"
            blurHash='qANw7wDi71?b_MkVMet8uNyC%2xaIUDPRjf,OFnOVYE1WB%g%gxtx]tQt6IUV@-;jGR5nlV[tQoyIUn,kCM{-;WVIBjZx]kCo1of'
          />
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
