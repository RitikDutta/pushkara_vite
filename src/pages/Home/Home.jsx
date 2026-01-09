import Hero from "./sections/Hero";
import WhyChooseUs from "./sections/WhyChooseUs";
import Product from "../Product/Product";

export default function Home() {
  return (
    <>
      <Hero />
      <Product />
      <WhyChooseUs />
      {/* other sections */}
    </>
  );
}
