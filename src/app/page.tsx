import SplashScreen from "@/components/SplashScreen";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Hero />
      <Metrics />
      <Services />
      <WhyUs />
      <Projects />
      <Process />
      <Contact />
    </>
  );
}
