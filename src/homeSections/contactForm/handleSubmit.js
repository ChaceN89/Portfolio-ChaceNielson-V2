import { contactPageData } from "../../data/pageData/contactPageData";
import emailjs from 'emailjs-com';
import { toast, Toaster } from 'react-hot-toast';
import ContactToast from "./ContactToast";

const displaySuccessToast = () => {
  toast.custom((t) => (
    <ContactToast t={t} />
  ));
};

const displayErrorToast = () => {
  toast.error('Failed to send email. Please try again later.');
};

export const handleSubmit = (e, { name, email, message }, { setName, setEmail, setMessage }) => {
  e.preventDefault();

  if (!contactPageData.EMAILJS_USER_ID || !contactPageData.EMAILJS_SERVICE_ID || !contactPageData.EMAILJS_TEMPLATE_ID) {
    toast.error('EmailJS configuration is missing or incorrect.');
    return;
  }

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
    reply_to: email
  };

  emailjs.send(
    contactPageData.EMAILJS_SERVICE_ID,
    contactPageData.EMAILJS_TEMPLATE_ID,
    templateParams,
    contactPageData.EMAILJS_USER_ID
  ).then((response) => {
    displaySuccessToast();
    setName('');
    setEmail('');
    setMessage('');
  }, (error) => {
    console.log('FAILED...', error);
    displayErrorToast();
  });
};
