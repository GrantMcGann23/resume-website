import { useEffect } from "react"; // Import useEffect for scroll logic
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer"; 
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";


function App() {
  // Add scroll progress logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      const scrollIndicator = document.getElementById("scrollIndicator");
      if (scrollIndicator) {
        scrollIndicator.style.height = `${scrollPercent}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <div>
      {/* Scroll Bar */}
      <div
        id="scrollIndicator"
        style={{
          position: "fixed",
          right: "10px",
          top: "0",
          width: "5px",
          height: "0",
          backgroundColor: "#FFD700",
          zIndex: "9999",
          transition: "height 0.2s ease",
        }}
      ></div>

      <Navbar />
      <Sidebar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer /> {/* Add Footer at the bottom */}
    </div>
  );
}

export default App;
