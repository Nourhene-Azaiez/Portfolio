"use client"
import { useState } from "react";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Experience from "@/pages/Experience";
import Hero from "@/pages/Hero";
import Projects from "@/pages/Projects";
import { FloatingDock } from "@/pages/ui/floating-dock";
import Volunteering from "@/pages/Volunteering";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaHandsHelping, FaLaptop } from "react-icons/fa";

export default function Home() {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <main className="relative bg-zinc-50 dark:bg-zinc-900 flex justify-center items-center flex-col overflow-auto mx-auto">
      <div className="w-full h-full">
        <Hero id="Hero" />
        <About id="About" />
        <Projects id="Projects" setExpanded={setIsCardExpanded} />
        <Experience id="Experience" />
        <Volunteering id="Volunteering" />
        <Contact id="Contact" />
      </div>
      {!isCardExpanded && (
        <FloatingDock
          items={[
            { title: "Home", icon: <FaHome />, href: "#Hero" },
            { title: "About", icon: <FaUser />, href: "#About" },
            { title: "Projects", icon: <FaLaptop />, href: "#Projects" },
            { title: "Experience", icon: <FaBriefcase />, href: "#Experience" },
            { title: "Volunteering", icon: <FaHandsHelping />, href: "#Volunteering" },
            { title: "Contact", icon: <FaEnvelope />, href: "#Contact" },
          ]}
        />
      )}
    </main>
  );
}