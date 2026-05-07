import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!formData.message.trim()) nextErrors.message = 'Message cannot be empty.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) {
      setStatus('Please fix the errors and try again.');
      return;
    }
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label>
        Name
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your name"
        />
        {errors.name && <span className="field-error">{errors.name}</span>}
      </label>
      <label>
        Email
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="tinataf518@gmail.com"
        />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </label>
      <label>
        Message
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows="5"
          placeholder="Tell me about your project"
        />
        {errors.message && <span className="field-error">{errors.message}</span>}
      </label>
      <button type="submit" className="primary-button">Send Message</button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}

export default ContactForm;
