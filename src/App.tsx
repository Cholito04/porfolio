//import ListGroup from "./components/ListGroup";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
