import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Timeline from "@/components/timeline";
import Education from "@/components/education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
