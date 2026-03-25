import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-black/80 backdrop-blur-md text-white"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-orange-500">Rajdoot Polymers</h1>

        {/* Desktop Menu */}

        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-orange-500 transition">
            Home
          </a>

          <a href="#about" className="hover:text-orange-500 transition">
            About
          </a>

          <a href="#products" className="hover:text-orange-500 transition">
            Products
          </a>

          <a href="#gallery" className="hover:text-orange-500 transition">
            Gallery
          </a>

          <a href="#contact" className="hover:text-orange-500 transition">
            Contact
          </a>
        </div>

        <button
          onClick={() =>
            document
              .getElementById("youtube")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="hidden md:block bg-orange-500 px-4 py-2 rounded"
        >
          Get Quote
        </button>

        {/* Mobile Menu Button */}

        <button className="md:hidden" onClick={() => setMenu(!menu)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}

      {menu && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-black px-6 pb-6 space-y-4"
        >
          <a href="#home" className="block">
            Home
          </a>
          <a href="#about" className="block">
            About
          </a>
          <a href="#products" className="block">
            Products
          </a>
          <a href="#gallery" className="block">
            Gallery
          </a>
          <a href="#contact" className="block">
            Contact
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
