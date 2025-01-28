
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingDock } from "@/components/ui/floating-dock";
import Volunteering from "@/components/Volunteering";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaHandsHelping, FaLaptop } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-zinc-50 dark:bg-zinc-900 flex justify-center items-center flex-col overflow-auto mx-auto" >
      <div className="w-full">
        <Hero id="Hero" />
        <About id="About" />
        <Projects id="Projects" />
        <Experience id="Experience" />
        <Volunteering id="Volunteering" />
        <Contact id="Contact" />
      </div>
      <FloatingDock 
        items={[
          { title: 'Home', icon: <FaHome />, href:"#Hero" },
          { title: 'About', icon: <FaUser />, href:"#About"},
          { title: 'Projects', icon: <FaLaptop />, href:"#Projects" },
          { title: 'Experience', icon: <FaBriefcase />, href:"#Experience" },
          { title: 'Volunteering', icon: <FaHandsHelping />, href:"#Volunteering" },
          { title: 'Contact', icon: <FaEnvelope />, href:"#Contact" },
        ]}
      />
    </main>
  );
}
