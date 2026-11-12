import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0F172A] transition-colors duration-300 dark:bg-[#090D0B] dark:text-white">
      <SplashScreen />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Metrics />
        <Services />
        <WhyUs />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
