import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Dithering } from "@paper-design/shaders-react";

function App() {
  return (
    <div className="relative min-h-screen bg-neutral-950">
      <div className="fixed inset-0 pointer-events-none opacity-40 z-2">
        <Dithering
          style={{ height: "100%", width: "100%" }}
          colorBack="hsl(0, 0%, 0%)"
          colorFront="hsl(232, 100%, 58%)"
          shape="warp"
          type="4x4"
          size={2}
          offsetX={0}
          offsetY={0}
          scale={1}
          rotation={0}
          speed={0.1}
        />
      </div>

      <div className="fixed inset-0 pointer-events-none opacity-40 z-0">
        <Dithering
          style={{ height: "100%", width: "100%" }}
          colorBack="hsl(0, 0%, 0%)"
          colorFront="hsla(0, 0%, 100%, 0.4)"
          shape="warp"
          type="2x2"
          size={2}
          offsetX={0}
          offsetY={0}
          scale={0.8}
          rotation={0}
          speed={0.1}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto border-x 
      border-none shadow-2xl min-h-screen 
      bg-[linear-gradient(to_right,#00000030,#000000CC,#000000FF,#000000CC,#00000030)]">

        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>

    </div>
  );
}

export default App;
