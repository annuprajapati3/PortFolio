import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Contact1 = () => {
  const form = useRef();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    emailjs.sendForm(
      'service_lhqq9tv',
      'template_1p2sllq',
      form.current,
      '8amfUtjvg-Vb4CEDO'
    ).then(
      () => {
        setSuccess('Your message has been sent!');
        form.current.reset();
      },
      (error) => {
        console.error(error);
        setError('Something went wrong. Please try again later.');
      }
    );
  };

  return (
    <>
      {/* Heading */}
      <div className="flex justify-center pt-12 pb-6 text-center" id="contact">
        <p className="text-4xl font-bold relative inline-block
                     after:block after:h-1 after:w-16 after:bg-[#4F46E5]
                     after:mt-2 after:mx-auto">
          Get In Touch
        </p>
      </div>

      {/* Main Contact Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 px-4 sm:px-8 md:px-12 lg:px-20 pb-12">
        
        {/* Left: Contact Info */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold">Contact Information</h2>

          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-blue-200 rounded-full flex justify-center items-center">
              <MdEmail className="text-[#4F46E5] text-2xl" />
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-[#4F46E5] break-all">annuprajapati0004@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-blue-200 rounded-full flex justify-center items-center">
              <FaPhoneAlt className="text-[#4F46E5] text-2xl" />
            </div>
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-[#4F46E5]">+91 9354090359</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-blue-200 rounded-full flex justify-center items-center">
              <MdLocationOn className="text-[#4F46E5] text-2xl" />
            </div>
            <div>
              <p className="font-medium">Location</p>
              <p className="text-[#4F46E5]">India</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="w-full lg:w-1/2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white shadow-lg rounded-xl p-6 sm:p-8 space-y-4 w-full"
          >
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact1;
