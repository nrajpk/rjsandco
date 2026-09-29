import { useState } from 'react';
import { siteConfig } from '../data/siteConfig.js';
import { services } from '../data/services.js';
import { ArrowIcon } from './Report.jsx';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: ''
};

function validate(form) {
  const errors = {};

  if (!form.name.trim()) errors.name = 'Enter your name.';
  if (!form.phone.trim()) errors.phone = 'Enter a phone number, with country code if you are outside India.';
  else if (!/^[0-9+\-\s()]{7,20}$/.test(form.phone)) errors.phone = 'Use digits, spaces and + only, for example +91 98470 12345.';
  if (!form.email.trim()) errors.email = 'Enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Check the email address, for example name@company.com.';
  if (!form.service) errors.service = 'Choose the desk closest to your matter, or "Not sure yet".';
  if (!form.message.trim()) errors.message = 'Describe the matter in a sentence or two.';

  return errors;
}

function Field({ label, hint, error, name, children }) {
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label className="field__label" htmlFor={`enquiry-${name}`}>
        {label}
        {hint && <em>{hint}</em>}
      </label>
      {children}
      {error && (
        <span className="field__error" id={`enquiry-${name}-error`}>
          {error}
        </span>
      )}
    </div>
  );
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

  function inputProps(name) {
    return {
      id: `enquiry-${name}`,
      name,
      value: form[name],
      onChange: handleChange,
      'aria-invalid': errors[name] ? true : undefined,
      'aria-describedby': errors[name] ? `enquiry-${name}-error` : undefined
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      document.getElementById(`enquiry-${firstError}`)?.focus();
      return;
    }

    const subject = `Enquiry: ${form.service}`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Desk: ${form.service}`,
      '',
      form.message
    ].join('\n');

    window.location.href = `${siteConfig.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <form className="enquiry" onSubmit={handleSubmit} noValidate>
      <div className="enquiry__row">
        <Field label="Name" name="name" error={errors.name}>
          <input type="text" autoComplete="name" {...inputProps('name')} />
        </Field>
        <Field label="Phone" hint="with country code" name="phone" error={errors.phone}>
          <input type="tel" autoComplete="tel" {...inputProps('phone')} />
        </Field>
      </div>

      <div className="enquiry__row">
        <Field label="Email" name="email" error={errors.email}>
          <input type="email" autoComplete="email" {...inputProps('email')} />
        </Field>
        <Field label="Desk" name="service" error={errors.service}>
          <select {...inputProps('service')}>
            <option value="">Choose a desk</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </Field>
      </div>

      <Field label="The matter" hint="no documents yet, please" name="message" error={errors.message}>
        <textarea
          rows="5"
          placeholder="For example: we received a GST notice under Section 73 dated 12 September and the reply is due in 30 days."
          {...inputProps('message')}
        />
      </Field>

      <div className="enquiry__foot">
        <button className="btn btn-primary" type="submit">
          Send enquiry
          <ArrowIcon />
        </button>
        <p className="enquiry__hint">Sending opens your email app with this enquiry filled in, addressed to {siteConfig.email}.</p>
      </div>

      {submitted && (
        <p className="form-status" role="status">
          Your email app should now be open with the enquiry ready. Press send there to reach us.
        </p>
      )}
    </form>
  );
}
