import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import bg from "../assets/homePage.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/75"></div>

      {/* Animated Copper Line */}

      {/* <div className="absolute w-[200%] h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-40 animate-pulse top-1/2"></div> */}

      {/* Content */}

      <div className="relative w-full px-6 md:px-12 lg:px-20 py-24">
        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Rajdoot <span className="text-orange-500">Polymers</span>
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-10"
        >
          Premium Copper & Aluminium electrical wires manufactured with advanced
          technology to ensure durability, safety and high conductivity.
        </motion.p>

        {/* Feature Cards */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 max-w-3xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-gray-700 hover:border-orange-500 transition">
            ⚡ High Conductivity
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-gray-700 hover:border-orange-500 transition">
            🏭 Modern Manufacturing
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-gray-700 hover:border-orange-500 transition">
            🔒 Reliable & Safe Wiring
          </div>
        </motion.div>

        {/* Button */}

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/products")}
          className="bg-orange-500 px-7 py-3 rounded-md text-white font-medium hover:bg-orange-600 transition"
        >
          Explore Products
        </motion.button>

        {/* Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
              <CountUp end={15} duration={2.5} />+
            </h2>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
              <CountUp end={500} duration={2.5} />+
            </h2>
            <p className="text-gray-400 text-sm">Projects Supplied</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
              <CountUp end={100} duration={2.5} />%
            </h2>
            <p className="text-gray-400 text-sm">Quality Tested</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
              24/7
            </h2>
            <p className="text-gray-400 text-sm">Customer Support</p>
          </div>
        </div>

        {/* Scroll Indicator */}

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce text-xl">
          ↓
        </div>
      </div>
    </section>
  );
}
