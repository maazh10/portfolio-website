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
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className={styles.App}>
      <Helmet>
        <title>maaz h.</title>
        <meta property="og:title" content="maaz h." />
        <meta property="og:description" content="My personal portfolio website" />
        <meta property="og:image" content="https://i.ibb.co/PMkybzF/portfolio.png" />
        <meta property="og:url" content="https://maazh.tech" />
        <meta property="og:type" content="website" />
      </Helmet>
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
