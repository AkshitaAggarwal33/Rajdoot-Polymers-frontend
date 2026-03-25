import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import RegisterPopup from "./components/RegisterPopup";
import Footer from "./components/Footer";
import YoutubeSection from "./components/YoutubeSection";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const registered = localStorage.getItem("registered");

    if (!registered) {
      setTimeout(() => {
        setShowPopup(true);
      }, 2000);
    }
  }, []);

  return (
    <div className="bg-black text-white">
      {/* ❌ Removed blur wrapper */}
      <Navbar />

      <Hero />

      {/* About Section */}
      <About />

      {/* Product Catalogue */}
      <Products />

      {/* Factory Gallery */}
      <Gallery />

      {/* Youtube Section */}
      <YoutubeSection />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />

      {/* Popup */}
      <RegisterPopup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
}

export default App;