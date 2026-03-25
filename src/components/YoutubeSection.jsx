import { motion } from "framer-motion";

const YT_LINK = "https://www.youtube.com/@RajdootPolymers";
const SUBSCRIBE_LINK =
  "https://www.youtube.com/@RajdootPolymers?sub_confirmation=1";

export default function YoutubeSection() {
  return (
    <section className="bg-black text-white py-16 px-4">
      {/* CENTERED CONTAINER */}
      <div className="max-w-7xl mx-auto w-full">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Watch Us on <span className="text-red-500">YouTube</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            See our manufacturing process, quality tests, and product showcases.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            onClick={() => window.open(YT_LINK, "_blank")}
            className="cursor-pointer bg-red-950 border border-red-500 rounded-2xl p-8 md:p-10 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-red-500/30 transition"
          >
            <div className="bg-red-500 p-5 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="28"
                height="28"
              >
                <path d="M19.615 3.184A3.002 3.002 0 0 0 17.508 2.5H6.492a3.002 3.002 0 0 0-2.107.684A3.002 3.002 0 0 0 3.5 5.292v13.416a3.002 3.002 0 0 0 .885 2.108 3.002 3.002 0 0 0 2.107.684h11.016a3.002 3.002 0 0 0 2.107-.684 3.002 3.002 0 0 0 .885-2.108V5.292a3.002 3.002 0 0 0-.885-2.108ZM10 16.5v-9l6 4.5-6 4.5Z" />
              </svg>
            </div>

            <h3 className="text-lg md:text-xl font-semibold">
              Rajdoot Polymers Industries
            </h3>
            <p className="text-gray-400 text-sm">YouTube Channel</p>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
              <span className="text-red-500 text-2xl">▶</span>
              Our YouTube Channel
            </h3>

            <p className="text-gray-400 mt-2 mb-4 text-sm md:text-base">
              Watch, learn & stay updated
            </p>

            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li>• Manufacturing process demonstrations</li>
              <li>• Quality testing & certification</li>
              <li>• Product specification guides</li>
              <li>• Industry tips & electrical safety</li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href={YT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Visit Channel
              </a>

              <a
                href={SUBSCRIBE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-red-500 px-6 py-2 rounded-lg hover:bg-red-500 transition"
              >
                Subscribe
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
