import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import CountUp from "../../components/CountUp"; 

const ExperienceSection = () => {
  const features = [
    "Tailored design solutions for every client",
    "High-end materials and finishes",
    "Experienced and creative design team",
    "On-time project delivery",
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#330202]">
            Several Years of Experience in Interior Design
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            With a deep passion for design and years of hands-on experience, we
            specialize in transforming ordinary spaces into luxurious,
            functional environments that reflect your unique personality.
          </p>

          {/* FEATURES */}
          <div className="space-y-3">
            {features.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="text-[#B34C0D]" size={20} />
                <p className="text-black">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT - STATS */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-[#F8F5F0] p-6 rounded-2xl text-center shadow">
            <h3 className="text-3xl font-bold text-[#B34C0D]">
              <CountUp end={8} />+
            </h3>
            <p className="text-gray-600">Years Experience</p>
          </div>

          <div className="bg-[#F8F5F0] p-6 rounded-2xl text-center shadow">
            <h3 className="text-3xl font-bold text-[#B34C0D]">
              <CountUp end={120} />+
            </h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>

          <div className="bg-[#F8F5F0] p-6 rounded-2xl text-center shadow">
            <h3 className="text-3xl font-bold text-[#B34C0D]">
              <CountUp end={95} />+
            </h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>

          <div className="bg-[#F8F5F0] p-6 rounded-2xl text-center shadow">
            <h3 className="text-3xl font-bold text-[#B34C0D]">
              <CountUp end={12} />+
            </h3>
            <p className="text-gray-600">Awards Won</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
