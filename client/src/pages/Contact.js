import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({});
  const [toast, setToast] = useState({ show: false, message: '', variant: 'info' });
  const toastRef = useRef(null);

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const isFieldInvalid = (name) => {
    if (!touched[name]) return false;
    if (name === 'email') return !isValidEmail(formData[name]);
    return formData[name].trim() === '';
  };

  const showToast = (message, variant = 'info') => {
    setToast({ show: true, message, variant });
    setTimeout(() => setToast({ ...toast, show: false }), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({ name: true, email: true, message: true });

    if (
      !formData.name.trim() ||
      !isValidEmail(formData.email) ||
      !formData.message.trim()
    ) {
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
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="container mt-5"
    >
      <div className="card shadow p-4 position-relative">
        <h2 className="mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} noValidate>
          {/* Name Field */}
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${isFieldInvalid('name') ? 'is-invalid' : ''}`}
            />
            {isFieldInvalid('name') && <div className="invalid-feedback">Name is required.</div>}
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${isFieldInvalid('email') ? 'is-invalid' : ''}`}
            />
            {isFieldInvalid('email') && (
              <div className="invalid-feedback">Enter a valid email address.</div>
            )}
          </div>

          {/* Message Field */}
          <div className="mb-3">
            <label className="form-label">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows="4"
              className={`form-control ${isFieldInvalid('message') ? 'is-invalid' : ''}`}
            />
            {isFieldInvalid('message') && (
              <div className="invalid-feedback">Message cannot be empty.</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary">Send</button>
        </form>

        {/* Toast Notification */}
        {toast.show && (
          <div
            ref={toastRef}
            className={`toast align-items-center text-white bg-${toast.variant} border-0 position-absolute top-0 end-0 m-3 show`}
            role="alert"
          >
            <div className="d-flex">
              <div className="toast-body">{toast.message}</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={() => setToast({ ...toast, show: false })}
              ></button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
