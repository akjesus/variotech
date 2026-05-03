import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent! (connect backend)");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="relative bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto text-gray-300"
          >
            Have a project in mind? Let’s talk and bring your vision to life.
          </motion.p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-2xl shadow text-center"
        >
          <Phone className="mx-auto text-yellow-600 mb-4" />
          <h3 className="font-semibold">Phone</h3>
          <p className="text-gray-600">+234 803 326 8446</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-2xl shadow text-center"
        >
          <Mail className="mx-auto text-yellow-600 mb-4" />
          <h3 className="font-semibold">Email</h3>
          <p className="text-gray-600">info@variotech.ng</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.15 }}
          className="bg-white p-6 rounded-2xl shadow text-center"
        >
          <MapPin className="mx-auto text-yellow-600 mb-4" />
          <h3 className="font-semibold">Location</h3>
          <p className="text-gray-600">Lagos, Nigeria</p>
        </motion.div>
      </section>

      {/* FORM + MAP */}
      <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-10">
        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-2xl shadow space-y-4"
        >
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg"
            required
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button
            type="submit"
            className="bg-[#B34C0D] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#9A3B0C]"
          >
            <Send size={18} /> Send Message
          </button>
        </motion.form>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="rounded-2xl overflow-hidden shadow"
        >
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
            className="w-full h-full min-h-[400px] border-0"
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
