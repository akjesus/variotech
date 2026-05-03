import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="bg-[#F8F5F0] py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* MISSION */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="bg-white p-8 rounded-2xl shadow"
        >
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-yellow-600" size={28} />
            <h2 className="text-2xl font-bold">Our Mission</h2>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Implementation of every interior project is done with the aim to
            satisfy the clients needs, set the stage for and influence the shape
            of activities, emotion within the space and represent the desired
            outlook, mood and personality of the client.
          </p>
        </motion.div>

        {/* VISION */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="bg-white p-8 rounded-2xl shadow"
        >
          <div className="flex items-center gap-3 mb-4">
            <Eye className="text-yellow-600" size={28} />
            <h2 className="text-2xl font-bold">Our Vision</h2>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Our vision is to curate a functional and efficient space which
            provides a conducive environment that enhances bonding and optimal
            productivity
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="bg-white p-8 rounded-2xl shadow"
        >
          <div className="flex items-center gap-3 mb-4">
            <Eye className="text-yellow-600" size={28} />
            <h2 className="text-2xl font-bold">Our Designs</h2>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Our designs and implementations are tailored towards i. Functional
            improvement ii. Aesthetic enrichment Iii. Psychological enhancement
            of the quality of life within the interior space
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="bg-white p-8 rounded-2xl shadow"
        >
          <div className="flex items-center gap-3 mb-4">
            <Eye className="text-yellow-600" size={28} />
            <h2 className="text-2xl font-bold">Our Goals</h2>
          </div>

          <p className="text-gray-600 leading-relaxed">
            To increase brand awareness and become a household name in the
            interior decor space.
          </p>
          <p className="text-gray-600 leading-relaxed">
            To partner with major developers and contractors in the real estate
            space.
          </p>
          <p className="text-gray-600 leading-relaxed">
            To attract via diligent and efficient service delivery jobs from
            government parastatal and institutions
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
