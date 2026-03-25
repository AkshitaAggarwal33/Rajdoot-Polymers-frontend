import { useState } from "react";
import { motion } from "framer-motion";

export default function Products() {
  const [type, setType] = useState("copper");

  const copperProducts = [
    { size: "0.75mm – 1mm", use: "Light Duty" },
    { size: "1.5mm – 2.5mm", use: "General Wiring" },
    { size: "4mm", use: "Sub Mains" },
    { size: "6mm", use: "Heavy Duty" },
    { size: "10mm", use: "Main Supply" },
  ];

  const aluminiumProducts = [
    { size: "4mm", core: "Single Core" },
    { size: "6mm", core: "Twin Core" },
    { size: "10mm", core: "3 Core" },
    { size: "12mm", core: "4 Core" },
    { size: "25mm", core: "Twin / 3 / 4 Core" },
  ];

  const products = type === "copper" ? copperProducts : aluminiumProducts;

  return (
    <section id="products" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Product <span className="text-orange-500">Catalogue</span>
        </motion.h2>

        {/* Toggle Buttons */}

        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setType("copper")}
            className={`px-6 py-3 rounded-lg transition ${
              type === "copper"
                ? "bg-orange-500"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            Copper Wires
          </button>

          <button
            onClick={() => setType("aluminium")}
            className={`px-6 py-3 rounded-lg transition ${
              type === "aluminium"
                ? "bg-orange-500"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            Aluminium Wires
          </button>
        </div>

        {/* Products Grid */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map((p, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-900 border border-gray-700 rounded-xl p-6 text-left hover:border-orange-500 transition"
            >
              <h3 className="text-xl font-bold mb-2">{p.size}</h3>

              {type === "copper" ? (
                <>
                  <p className="text-gray-400 mb-4">{p.use}</p>
                </>
              ) : (
                <>
                  <p className="text-gray-400 mb-4">{p.core}</p>
                </>
              )}

              <p className="text-sm text-gray-300 mb-2">
                Voltage Rating: 1100V
              </p>

              <p className="text-sm text-gray-300 mb-2">Gauge: 90m & 270m</p>

              <p className="text-sm text-gray-300 mb-4">Min Order: 6 bundles</p>

              <p
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="text-orange-500 font-medium cursor-pointer"
              >
                Contact for Price
              </p>
            </motion.div>
          ))}
        </div>

        {/* Custom Order Note */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-gray-300"
        >
          <p className="text-lg">Need a custom specification?</p>

          <p className="text-orange-500 mt-2">
            We also manufacture wires as per customer requirement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
