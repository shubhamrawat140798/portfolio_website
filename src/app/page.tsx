import NavBar from "./components/NavBar";
import HomeSection from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MotionRoot from "./components/motion/MotionRoot";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-navy-900 text-slate-100">
      <MotionRoot />
      <ScrollProgress />
      <NavBar />
      <main>
        <HomeSection />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
