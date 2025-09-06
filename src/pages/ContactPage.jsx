import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

const ContactPage = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success(" Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          toast.error(" Failed to send. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <section className="w-full bg-black text-white py-12 px-4 sm:px-6 md:px-12 lg:px-20">
      <ToastContainer />
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold italic text-blue-200 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Get in touch
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl mt-4 font-light italic text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Open for freelance projects & full-time roles
        </motion.p>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="mt-8 space-y-6 bg-neutral-950/40 p-6 sm:p-8 rounded-xl shadow-md"
        >
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="from_name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="from_email"
              required
              placeholder="awesome-brand@email.com"
              className="w-full px-4 py-2 rounded-md bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows="4"
              name="message"
              required
              placeholder="Please write your project brief"
              className="w-full px-4 py-2 rounded-md bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 hover:bg-white rounded-lg font-medium border border-white hover:text-gray-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
