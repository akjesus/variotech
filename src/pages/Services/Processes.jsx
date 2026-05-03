import { motion } from "framer-motion";
import {
  MessageCircle,
  PencilRuler,
  Layout,
  Hammer,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Consultation",
    desc: "We start by understanding your vision, needs, and budget.",
  },
  {
    icon: PencilRuler,
    title: "Concept Design",
    desc: "We create mood boards, layouts, and design concepts.",
  },
  {
    icon: Layout,
    title: "Planning",
    desc: "Detailed drawings, materials selection, and timelines.",
  },
  {
    icon: Hammer,
    title: "Execution",
    desc: "We bring the design to life with expert craftsmanship.",
  },
  {
    icon: CheckCircle,
    title: "Final Delivery",
    desc: "We review, style, and deliver your finished space.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Design Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A simple and transparent approach to transforming your space from
            concept to completion.
          </p>
        </div>

        {/* STEPS */}
        <div className="grid md:grid-cols-5 gap-8 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* ICON */}
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-yellow-600 text-white rounded-full">
                  <Icon size={22} />
                </div>

                {/* TITLE */}
                <h3 className="font-semibold mb-2">{step.title}</h3>

                {/* DESC */}
                <p className="text-gray-600 text-sm">{step.desc}</p>

                {/* CONNECTOR LINE (desktop only) */}
                {i !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-full w-full h-[2px] bg-gray-200"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
