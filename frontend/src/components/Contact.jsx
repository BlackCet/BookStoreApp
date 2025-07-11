import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // TODO: Send data to backend or email service
  };

  return (
    <div className="max-w-screen-md mx-auto px-6 py-16 my-16 dark:bg-gray-200 dark:text-black">
      <h1 className="text-4xl font-bold mb-8 text-center text-orange-600">Contact Us</h1>

      <p className="text-lg text-center text-gray-700 mb-10">
        Got feedback, questions, or collaboration ideas? We’d love to hear from you! Fill out the form below and well get back to you soon.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Your Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Jane Doe"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium">Your Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="jane@example.com"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium">Your Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Tell us what’s on your mind..."
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
