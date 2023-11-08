import React, { useState, SyntheticEvent } from 'react'; // Import SyntheticEvent
import emailjs from '@emailjs/browser';
import ContactPic from '../../assets/Profile_about_me/images/section-contact-us.png';

export default function Contact() {
  const [name, setName] = useState('Guess user');
  const [email, setEmail] = useState('hdhiri935@gmail.com');
  const [message, setMessage] = useState('... test test test');

  const handleForm = (e: SyntheticEvent) => { // Change handleSubmit to handleForm
    e.preventDefault();

    console.log('name'+name);
    console.log('email'+email);
    console.log('message'+message);

    // EmailJS service ID, template ID, and Public ID
    const serviceID = 'service_n647erp'; // Replace with your service ID
    const templateID = 'template_q55b7aa'; // Replace with your template ID
    const publicKey = 'OmI9V7RAQWt2pW4y1'; // Replace with your public key

    // Create new object containing dynamic template params
    const templateParams = {
      from_name: email,
      from_email: email,
      to_name: 'Hdhiri Mohamed Nassim',
      message: message,
      subject: 'Your Subject Here',
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h5 className="mb-4 text-xl font-normal tracking-tight text-center text-gray-900 dark:text-white">
          Get Touch
        </h5>
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          N'hésitez pas à me contacter !
        </p>

        <form action="#" className="space-y-8" onSubmit={handleForm}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="subject"
              onChange={(e) => setName(e.target.value)}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              onChange={(e) => setMessage(e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
