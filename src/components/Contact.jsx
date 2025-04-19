import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Add actual submission logic here
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <form onSubmit={handleSubmit} style={{ marginRight: '50px' }}>
        <h1>Contact</h1>
        <div style={{ marginBottom: '10px' }}>
          <label>Name</label><br />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={{ width: '300px', padding: '8px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{ width: '300px', padding: '8px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Phone</label><br />
          <input
            type="Phone"
            name="Phone"
            value={form.Phone}
            onChange={handleChange}
            style={{ width: '300px', padding: '8px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Message</label><br />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            style={{ width: '300px', padding: '8px' }}
            required
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#000', color: '#fff' }}>Send</button>
      </form>

      <div>
        <h3>Contact Information</h3>
        <p><strong>Address</strong><br />
        123 Robotiks Way,<br />
        Pune, MH 411057</p>

        <p><strong>Email</strong><br />
        info@robu.in</p>

        <p><strong>Phone</strong><br />
        +91 98765 43210</p>
      </div>
    </div>
  );
};

export default Contact;