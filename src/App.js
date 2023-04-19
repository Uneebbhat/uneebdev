import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Alert />
      <HeroSection />
      <Projects />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
