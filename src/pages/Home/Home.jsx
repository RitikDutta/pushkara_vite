import Hero from "./sections/Hero";
import WhyChooseUs from "./sections/WhyChooseUs";
import OurStory from "./sections/OurStory";
import Benefits from "./sections/Benefits";
import Faq from "./sections/Faq";
import Product from "../Product/Product";

export default function Home() {
  return (
    <>
      <Hero />
      <Product />
      <WhyChooseUs />
      <OurStory />
      <Benefits />
      <Faq />
      {/* other sections */}
    </>
  );
}
