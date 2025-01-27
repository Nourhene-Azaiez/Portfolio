import About from "@/components/About";
import Hero from "@/components/Hero";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaHandsHelping, FaLaptop } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-zinc-50 dark:bg-zinc-900 flex justify-center items-center flex-col overflow-auto mx-auto" >
      <div className="w-full">
        <Hero id="Hero" />
        <About id="About" />
      </div>
      <FloatingDock 
        items={[
          { title: 'Home', icon: <FaHome />, href:"#Hero" },
          { title: 'About', icon: <FaUser />, href:"#About"},
          { title: 'Projects', icon: <FaLaptop />, href:"" },
          { title: 'Experience', icon: <FaBriefcase />, href:"" },
          { title: 'Volunteering', icon: <FaHandsHelping />, href:"" },
          { title: 'Contact', icon: <FaEnvelope />, href:"" },
        ]}
      />
    </main>
  );
}
