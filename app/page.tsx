import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-zinc-50 dark:bg-zinc-900 flex justify-center items-centre flex-col overflow-hidden mx-auto" >
      <div className=" w-full">
        <Hero />
      </div>
    </main>
  );
}
