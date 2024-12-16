// components
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../../variants';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/ruan.dejongh19@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="h-full bg-primary/60 relative py-32">
      {/* Bottom Right Decoration */}
      <div className="absolute bottom-0 right-0 w-[400px] xl:w-[500px] opacity-40 mix-blend-color-dodge z-0">
        <Image
          src="/bottom-right-img.png"
          width={500}
          height={500}
          alt="Bottom Right Decoration"
        />
      </div>

      {/* Container */}
      <div className="container mx-auto h-full flex items-center justify-center relative z-10">
        <div className="flex flex-col w-full max-w-[700px] text-center xl:text-left">
          {/* Header */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12 text-[#003a6a]"
          >
            Let&apos;s <span className="text-[#0075d4]">connect.</span>
          </motion.h2>

          {/* Error/Success Messages */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-green-500 mb-4 text-lg font-semibold"
              >
                ✅ Your message has been sent successfully!
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="input placeholder:text-white/70 border border-[#003a6a] focus:ring-2 focus:ring-[#0075d4] transition-all duration-300"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="input placeholder:text-white/70 border border-[#003a6a] focus:ring-2 focus:ring-[#0075d4] transition-all duration-300"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="input placeholder:text-white/70 border border-[#003a6a] focus:ring-2 focus:ring-[#0075d4] transition-all duration-300"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="textarea placeholder:text-white/70 border border-[#003a6a] focus:ring-2 focus:ring-[#0075d4] transition-all duration-300"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn rounded-full border border-[#003a6a] max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden group ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#0075d4] hover:shadow-[0px_0px_15px_#0075d4]'
              }`}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-t-transparent border-[#0075d4] rounded-full animate-spin"></div>
              ) : (
                <>
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                 Let&apos;s talk
                </span>
                  <BsArrowRight className="absolute text-[22px] text-white -translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
