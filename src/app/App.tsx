import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}