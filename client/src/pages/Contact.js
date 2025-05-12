import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trigger all fields as touched
    setTouched({ name: true, email: true, message: true });

    // Prevent submission if any field is invalid
    if (
      !formData.name.trim() ||
      !isValidEmail(formData.email) ||
      !formData.message.trim()
    ) {
      setStatus('Please fill out all fields correctly.');
      return;
    }

    setStatus('Sending...');
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTouched({});
    } catch (err) {
      console.error(err);
      setStatus('Something went wrong. Please try again.');
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
      <div className="card shadow p-4">
        <h2 className="mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} noValidate>
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
            {isFieldInvalid('name') && (
              <div className="invalid-feedback">Name is required.</div>
            )}
          </div>
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
        {status && <div className="mt-3 text-info">{status}</div>}
      </div>
    </motion.div>
  );
};

export default Contact;
