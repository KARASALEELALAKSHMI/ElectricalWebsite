import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
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
    <div id="contact" className="flex justify-center p-10 flex-col md:flex-row gap-12">
      <form onSubmit={handleSubmit} className="w-full md:w-[400px] space-y-4">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-300 transition"
        >
          Send
        </button>
      </form>

      <div className="w-full md:w-[300px] space-y-6">
        <h3 className="text-xl font-semibold">Contact Information</h3>
        <div>
          <p className="font-medium">Address</p>
          <p>
            123 Robotiks Way,<br />
            Pune, MH 411057
          </p>
        </div>
        <div>
          <p className="font-medium">Email</p>
          <p>info@robu.in</p>
        </div>
        <div>
          <p className="font-medium">Phone</p>
          <p>+91 98765 43210</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
