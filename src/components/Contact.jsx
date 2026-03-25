import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const linkedin = "https://www.linkedin.com/in/pankaj-singhal-4ba3bb3b8";
  const whatsapp = "https://wa.me/919891279538";
  const fb = "https://www.facebook.com/pankaj.singhal.3517563#";
  const insta = "https://www.instagram.com/pankajsinghal77/";

  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          {/* <p className="text-orange-400 tracking-widest">GET IN TOUCH</p> */}

          <h2 className="text-4xl font-bold mt-2">
            <span className="text-white">Contact </span>
            <span className="text-orange-400">Us</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Reach out for product inquiries, bulk orders, or custom
            specifications.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-4 gap-8">
          {/* WhatsApp */}

          <motion.a
            href={whatsapp}
            target="_blank"
            whileHover={{ scale: 1.06 }}
            className="border border-green-500 rounded-xl p-10 text-center transition
                       hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]"
          >
            <FaWhatsapp className="text-green-500 text-4xl mx-auto mb-6" />

            <h3 className="text-xl font-semibold">WhatsApp</h3>

            <p className="text-gray-400 mt-2">Quick inquiry & orders</p>

            <p className="text-green-400 mt-3">+91 9891279538</p>
            <p className="text-green-400 mt-3">+91 8076930610</p>

            <button className="mt-6 bg-green-500 px-5 py-2 rounded-md hover:bg-green-600 transition">
              Chat on WhatsApp
            </button>
          </motion.a>

          {/* Facebook */}

          <motion.a
            href={fb}
            target="_blank"
            whileHover={{ scale: 1.06 }}
            className="border border-blue-500 rounded-xl p-10 text-center transition
                       hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
          >
            <FaFacebook className="text-blue-500 text-4xl mx-auto mb-6" />

            <h3 className="text-xl font-semibold">Facebook</h3>

            <p className="text-gray-400 mt-2">Follow our page</p>
          </motion.a>

          {/* Instagram */}

          <motion.a
            href={insta}
            target="_blank"
            whileHover={{ scale: 1.06 }}
            className="border border-pink-500 rounded-xl p-10 text-center transition
                       hover:shadow-[0_0_25px_rgba(236,72,153,0.6)]"
          >
            <FaInstagram className="text-pink-500 text-4xl mx-auto mb-6" />

            <h3 className="text-xl font-semibold">Instagram</h3>

            <p className="text-gray-400 mt-2">See our updates</p>
          </motion.a>

          {/* LinkedIn */}

          <motion.a
            href={linkedin}
            target="_blank"
            whileHover={{ scale: 1.06 }}
            className="border border-cyan-500 rounded-xl p-10 text-center transition
                       hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
          >
            <FaLinkedin className="text-cyan-500 text-4xl mx-auto mb-6" />

            <h3 className="text-xl font-semibold">LinkedIn</h3>

            <p className="text-gray-400 mt-2">Connect with us</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
