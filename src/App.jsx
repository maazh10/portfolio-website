import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Credits } from "./components/Credits/Credits";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Interests } from "./components/Interests/Interests";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Interests />
      <Credits />
      <AnimatedCursor />
    </div>
  );
}

export default App;
