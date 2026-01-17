import { useLayoutEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { routes } from "./routes";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function App() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      smoothTouch: 0.1,
      effects: true,
    });

    const header = document.querySelector("[data-scroll-header]");
    const headerTrigger =
      header &&
      ScrollTrigger.create({
        trigger: header,
        start: "top top",
        end: () => ScrollTrigger.maxScroll(smoother.wrapper()),
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });

    return () => {
      headerTrigger?.kill();
      smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="min-h-screen bg-white text-black">
        <Navbar />

        <Routes>
          {routes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Routes>

        <Footer />
      </div>
    </div>
  );
}
