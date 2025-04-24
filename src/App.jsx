import Header from "./Layouts/Header";
import "./App.css";
import Hero from "./Layouts/Hero";
import About from "./Layouts/About";
import Skill from "./Layouts/Skill";
import Project from "./Layouts/Project";
import Experience from "./Layouts/Experience";
import Achivement from "./Layouts/Achivement";
import Contact from "./Layouts/Contact";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Experience />
      <Achivement />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
