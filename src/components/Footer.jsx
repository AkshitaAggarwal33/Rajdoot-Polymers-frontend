import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const linkedin = "https://www.linkedin.com/in/pankaj-singhal-4ba3bb3b8";
  const whatsapp = "https://wa.me/919891279538";
  const fb = "https://www.facebook.com/pankaj.singhal.3517563#";
  const insta = "https://www.instagram.com/pankajsinghal77/";
  const YT_LINK = "https://www.youtube.com/@RajdootPolymers";

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-gray-400 py-14 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Company */}

        <motion.div whileHover={{ y: -3 }}>
          <h3 className="text-white font-semibold text-lg mb-4">
            Rajdoot Polymers
          </h3>

          <p className="text-sm mb-4">
            Premium copper and aluminium electrical housewires manufactured at
            Jhilmil Industrial Area, Delhi.
          </p>

          <div className="flex gap-4 text-lg">
            {/* Facebook */}

            <motion.a
              href={fb}
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="cursor-pointer hover:text-blue-500 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition"
            >
              <FaFacebook />
            </motion.a>

            {/* Instagram */}

            <motion.a
              href={insta}
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="cursor-pointer hover:text-pink-500 hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] transition"
            >
              <FaInstagram />
            </motion.a>

            {/* LinkedIn */}

            <motion.a
              href={linkedin}
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="cursor-pointer hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition"
            >
              <FaLinkedin />
            </motion.a>

            {/* WhatsApp */}

            <motion.a
              href={whatsapp}
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="cursor-pointer hover:text-green-500 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] transition"
            >
              <FaWhatsapp />
            </motion.a>

            {/* YouTube */}

            <motion.a
              href={YT_LINK}
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="cursor-pointer hover:text-red-500 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] transition"
            >
              <FaYoutube />
            </motion.a>
          </div>
        </motion.div>

        {/* Quick Links */}

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>

          <ul className="space-y-2 text-sm">
            <motion.li
              whileHover={{ x: 6 }}
              onClick={() => scrollToSection("home")}
              className="cursor-pointer hover:text-orange-500 transition"
            >
              Home
            </motion.li>

            <motion.li
              whileHover={{ x: 6 }}
              onClick={() => scrollToSection("about")}
              className="cursor-pointer hover:text-orange-500 transition"
            >
              About Us
            </motion.li>

            <motion.li
              whileHover={{ x: 6 }}
              onClick={() => scrollToSection("products")}
              className="cursor-pointer hover:text-orange-500 transition"
            >
              Products
            </motion.li>

            <motion.li
              whileHover={{ x: 6 }}
              onClick={() => scrollToSection("gallery")}
              className="cursor-pointer hover:text-orange-500 transition"
            >
              Gallery
            </motion.li>

            <motion.li
              whileHover={{ x: 6 }}
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer hover:text-orange-500 transition"
            >
              Contact
            </motion.li>
          </ul>
        </div>

        {/* Products */}

        <motion.div whileHover={{ y: -3 }}>
          <h4 className="text-white font-semibold mb-4">Products</h4>

          <ul className="space-y-2 text-sm">
            <li>Copper MultiStrand Wire (0.75mm–10mm)</li>
            <li>Aluminium Single Core (4mm–25mm)</li>
            <li>Aluminium Twin Core</li>
            <li>Aluminium 3 Core</li>
            <li>Aluminium 4 Core</li>
          </ul>
        </motion.div>

        {/* Contact */}

        <motion.div whileHover={{ y: -3 }}>
          <h4 className="text-white font-semibold mb-4">Contact</h4>

          <p className="text-sm mb-2">
            Jhilmil Industrial Area
            <br />
            Delhi, India
          </p>

          <p className="text-sm mb-2">+91 9891279538</p>

          <p className="text-sm mb-2">+91 8076930610</p>

          <p className="text-sm">pankajtorex@gmail.com</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
