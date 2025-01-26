import Hero from "@/components/Hero";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-zinc-50 dark:bg-zinc-900 flex justify-center items-center flex-col overflow-auto mx-auto" >
      <div className="z-0 w-full">
        <Hero />
        <Hero />
      </div>
      <FloatingDock 
        items={[
          { title: 'Home', icon: <FaHome />, href:"#Hero" },
          { title: 'Search', icon: <FaSearch />, href:""},
          { title: 'Profile', icon: <FaUser />, href:"" },
        ]}
      />
    </main>
  );
}
