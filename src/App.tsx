//import ListGroup from "./components/ListGroup";
import Contact from "./components/Contact";
import Freelance from "./components/Freelance";
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
        <Freelance />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
