import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import KeyNumbers from "@/components/KeyNumbers";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display">
      <Navbar />
      <Hero />
      <Services />
      <KeyNumbers />
      <About />
      <ContactCTA />
      <Footer />
    </div>
  );
}
