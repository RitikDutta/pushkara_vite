import Hero from "./sections/Hero";
import WhyChooseUs from "./sections/WhyChooseUs";
import OurStory from "./sections/OurStory";
import Benefits from "./sections/Benefits";
import Faq from "./sections/Faq";
import Reels from "./sections/Reels";
import ProductShowcase from "./sections/ProductShowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <WhyChooseUs />
      <OurStory />
      <Benefits />
      <Faq />
      <Reels />
      {/* other sections */}
    </>
  );
}
