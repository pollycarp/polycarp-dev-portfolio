import React, { useState, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({});
  const [toast, setToast] = useState({ show: false, message: '', variant: 'info' });
  const toastRef = useRef(null);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true });

  const isFieldInvalid = (name) => {
    if (!touched[name]) return false;
    if (name === 'email') return !isValidEmail(formData[name]);
    return formData[name].trim() === '';
  };

  const showToast = (message, variant = 'info') => {
    setToast({ show: true, message, variant });
    setTimeout(() => setToast({ show: false, message: '', variant: 'info' }), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!formData.name.trim() || !isValidEmail(formData.email) || !formData.message.trim()) {
      showToast('Please fill out all fields correctly.', 'danger');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      showToast('Message sent successfully!', 'success');
      setFormData({ name: '', email: '', message: '' });
      setTouched({});
    } catch (err) {
      console.error(err);
      showToast('Something went wrong. Please try again.', 'danger');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        padding: '4rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
      }}
    >
      <motion.div
        className="shadow-lg"
        style={{
          width: '100%',
          maxWidth: '600px',
          backgroundColor: '#ffffff10',
          border: '1px solid #00bfff',
          borderRadius: '12px',
          padding: '2rem',
          backdropFilter: 'blur(5px)',
          position: 'relative'
        }}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-center mb-4" style={{ color: '#00bfff' }}>Contact Me</h2>

        <form onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              name="name"
              className={`form-control ${isFieldInvalid('name') ? 'is-invalid' : ''}`}
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="John Doe"
            />
            {isFieldInvalid('name') && <div className="invalid-feedback">Name is required.</div>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input
              type="email"
              name="email"
              className={`form-control ${isFieldInvalid('email') ? 'is-invalid' : ''}`}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="you@example.com"
            />
            {isFieldInvalid('email') && <div className="invalid-feedback">Enter a valid email address.</div>}
          </div>

          {/* Message */}
          <div className="mb-3">
            <label className="form-label">Your Message</label>
            <textarea
              name="message"
              className={`form-control ${isFieldInvalid('message') ? 'is-invalid' : ''}`}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows="4"
              placeholder="Type your message here..."
            />
            {isFieldInvalid('message') && <div className="invalid-feedback">Message cannot be empty.</div>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-info text-white w-100 fw-bold shadow-sm"
            style={{ borderRadius: '6px' }}
          >
            Send Message
          </button>
        </form>

        {/* Toast Notification */}
        {toast.show && (
          <div
            ref={toastRef}
            className={`toast align-items-center text-white bg-${toast.variant} border-0 position-absolute top-0 end-0 m-3 show`}
            role="alert"
            style={{ zIndex: 1050, minWidth: '250px' }}
          >
            <div className="d-flex">
              <div className="toast-body">{toast.message}</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={() => setToast({ show: false, message: '', variant: 'info' })}
              ></button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Contact;
