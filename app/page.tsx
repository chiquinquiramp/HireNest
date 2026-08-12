import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/Hero";
import WhyHireNest from "@/components/why-hirenest/WhyHireNest";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <> 
      <Navbar />
      <Hero />
      <WhyHireNest />
      <HowItWorks />
      <Services />
      <FAQ />
      <Contact />
      <main>
      </main>
      </> 
    </div>
  );
}
