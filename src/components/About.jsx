import { MapPin, Cpu, Factory, Users } from "lucide-react";
import { motion } from "framer-motion";
import bundles from "../assets/About.png";

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-24 px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mt-2">
          About <span className="text-orange-500">Rajdoot Polymers</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg space-y-6"
          >
            <p>
              Rajdoot Polymers Industries is a premier manufacturer of
              high-quality electrical house wires, crafting both
              <span className="text-orange-500"> Copper and Aluminium </span>
              wires for residential, commercial and industrial applications.
            </p>

            <p>
              Our factory located at
              <span className="text-orange-500">
                {" "}
                Jhilimil Industrial Area{" "}
              </span>
              uses modern manufacturing techniques to produce wires with
              <span className="text-orange-500"> 1100V voltage rating </span>.
            </p>

            <div className="bg-[#1b1b1b] p-6 rounded-xl border border-orange-500">
              <div className="flex items-center gap-4">
                <MapPin className="text-orange-500" />
                <div>
                  <p className="font-semibold">Factory Location</p>
                  <p className="text-gray-400">
                    Jhilmil Industrial Area, Delhi
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border border-orange-500 rounded-xl overflow-hidden"
          >
            <img
              src={bundles}
              alt="Factory Bundles"
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_#f97316]"
            />
          </motion.div>
        </div>

        {/* FEATURE CARDS */}

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <Card
            icon={<Factory />}
            title="State-of-the-Art Factory"
            desc="Modern manufacturing facility with precision equipment"
          />

          <Card
            icon={<Cpu />}
            title="Advanced Technology"
            desc="Latest extrusion and wire drawing machines"
          />

          <Card
            icon={<Users />}
            title="Experienced Team"
            desc="Skilled engineers ensuring strict quality"
          />

          <Card
            icon={<MapPin />}
            title="Strategic Location"
            desc="Located in Jhilmil Industrial Area, Delhi"
          />
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-[#111] p-6 rounded-xl border border-gray-800 transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_25px_#f97316]"
    >
      <div className="text-orange-500">{icon}</div>

      <h3 className="mt-3 font-semibold">{title}</h3>

      <p className="text-gray-400 text-sm mt-2">{desc}</p>
    </motion.div>
  );
}
