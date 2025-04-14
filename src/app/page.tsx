import Image from "next/image";
import Header from "./Header/page";
import Footer from "./Footer/page";
import Hero from "./Hero/page";
import Skills from "./Skills/page";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <Hero />
      <Skills />
      <div></div>
      <div></div>
      <div></div>
      <Footer />
    </div>
  );
}
