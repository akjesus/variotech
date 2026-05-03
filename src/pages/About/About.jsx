import { motion } from "framer-motion";
import { Users, Award, Heart, Target } from "lucide-react";
import CountUp from "../../components/CountUp";
import MissionVision from "./MissionVission";

const stats = [
  { label: "Projects Completed", value: 120 },
  { label: "Happy Clients", value: 95 },
  { label: "Years Experience", value: 8 },
  { label: "Awards Won", value: 12 },
];

const team = [
  {
    name: "Chigozie Okpechi",
    role: "Lead, Project Coordinator",
    img: "/images/chigozie.jpg",
  },
  {
    name: "Obiageri Ahunwa",
    role: "Head, Client Services",
    img: "/images/obiageri.jpg",
  },
  {
    name: "Tochukwu Ahunwa",
    role: "Financial Controller",
    img: "/images/tochukwu.jpg",
  },
  {
    name: "Abimbola Rotimi",
    role: "Legal Adviser",
    img: "/images/abimbola.jpg",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    desc: "We are deeply passionate about creating beautiful spaces.",
  },
  {
    icon: Target,
    title: "Precision",
    desc: "Every detail is carefully planned and executed.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We strive for the highest standards in every project.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "We work closely with clients to bring ideas to life.",
  },
];

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="relative bg-[#330202] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-300"
          >
            We design timeless interiors that blend luxury, comfort, and
            functionality.
          </motion.p>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
          alt="studio"
          className="rounded-2xl shadow"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-black leading-relaxed mb-4">
            <b>Variotech Solutions</b> was founded with a vision to transform
            ordinary spaces into extraordinary experiences. Our journey began
            with a passion for design and a commitment to excellence.
          </p>
          <p className="text-black leading-relaxed">
            Today, we are proud to have worked with numerous clients, delivering
            unique and inspiring interiors that stand the test of time.
          </p>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-yellow-600">
                <CountUp end={stat.value} />+
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <MissionVision />
      {/* VALUES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow text-center"
              >
                <Icon className="mx-auto mb-4 text-yellow-600" size={32} />
                <h3 className="font-semibold mb-2">{val.title}</h3>
                <p className="text-gray-600 text-sm">{val.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-center mb-12">
            We pride ourselves in the expertise of our team many of whom have
            garnered years of working experience in leading companies
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.20 }}
                className="bg-[#F8F5F0] p-6 rounded-2xl text-center shadow"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-4"
        >
          Let’s Design Something Amazing Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-gray-300"
        >
          Partner with us to create a space that truly reflects your vision.
        </motion.p>
        <a href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#B34C0D] px-8 py-3 rounded-lg hover:bg-yellow-700"
          >
            Contact Us
          </motion.button>
        </a>
      </section>
    </div>
  );
};

export default About;
