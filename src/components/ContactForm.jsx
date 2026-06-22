import { useState } from 'react';
import { services } from '../data/services.js';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: ''
};

function validate(form) {
  const errors = {};

  if (!form.name.trim()) errors.name = 'Please enter your name.';
  if (!form.phone.trim()) errors.phone = 'Please enter your phone number.';
  if (form.phone && !/^[0-9+\-\s()]{7,20}$/.test(form.phone)) errors.phone = 'Please enter a valid phone number.';
  if (!form.email.trim()) errors.email = 'Please enter your email address.';
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email address.';
  if (!form.service) errors.service = 'Please select a service.';
  if (!form.message.trim()) errors.message = 'Please share a short message.';

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input type="text" name="name" value={form.name} onChange={handleChange} autoComplete="name" />
          {errors.name && <small>{errors.name}</small>}
        </label>

        <label>
          <span>Phone</span>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} autoComplete="tel" />
          {errors.phone && <small>{errors.phone}</small>}
        </label>
      </div>

      <div className="form-grid">
        <label>
          <span>Email</span>
          <input type="email" name="email" value={form.email} onChange={handleChange} autoComplete="email" />
          {errors.email && <small>{errors.email}</small>}
        </label>

        <label>
          <span>Service required</span>
          <select name="service" value={form.service} onChange={handleChange}>
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Not sure">Not sure yet</option>
          </select>
          {errors.service && <small>{errors.service}</small>}
        </label>
      </div>

      <label>
        <span>Message</span>
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          placeholder="Briefly explain what you need help with."
        />
        {errors.message && <small>{errors.message}</small>}
      </label>

      <button className="btn btn-primary" type="submit">
        Submit Enquiry
      </button>

      {submitted && (
        <p className="form-success" role="status">
          Your enquiry has been validated on the front end. Connect this form to email or a CRM before going live.
        </p>
      )}
    </form>
  );
}

