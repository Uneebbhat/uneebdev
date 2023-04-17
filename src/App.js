import "./App.css";
import About from "./Components/About";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Projects />
      <About />
    </>
  );
}

export default App;
