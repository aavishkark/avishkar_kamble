import Image from "next/image";
import Header from "./Header/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="hero"></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <Footer />
    </div>
  );
}
