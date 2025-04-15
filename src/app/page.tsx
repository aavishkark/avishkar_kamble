import Image from "next/image";
import Header from "./Header/page";
import Footer from "./Footer/page";
import Hero from "./Hero/page";
import Skills from "./Skills/page";
import Projects from "./Projects/page";
import Github from "./Github/page";
import ContactMe from "./Contact Me/page";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Github />
      <ContactMe />
      <Footer />
    </div>
  );
}
