import production from "../assets/production.png";
import bundles from "../assets/bundles.png";
import packaging from "../assets/packaging.png";

const galleryItems = [
  {
    title: "Production Floor",
    img: production,
  },
  {
    title: "Copper Wire Bundles",
    img: bundles,
  },
  {
    title: "Packaging Unit",
    img: packaging,
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-black text-white py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          Factory <span className="text-orange-500">Gallery</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="
            group
            border border-orange-500
            rounded-xl
            overflow-hidden
            transform
            transition-all
            duration-500
            hover:scale-105
            hover:shadow-[0_0_30px_#f97316]
            animate-fadeUp
            "
          >
            <img
              src={item.img}
              alt={item.title}
              className="
              w-full
              h-72
              object-cover
              transition-transform
              duration-500
              group-hover:scale-110
              "
            />

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
