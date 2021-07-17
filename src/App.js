import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import About from "./components/about.component";
import Projects from "./components/project.component";
import Contact from "./components/contact.component";
import Skills from "./components/Skill";
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <br />
        <div id="section-1">
          <About />
        </div>
        <div id="section-2">
          <Projects />
        </div>
        <div id="section-3">
          <Skills />
        </div>
        <div id="section-4">
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
