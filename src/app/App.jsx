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
    const header = document.querySelector("[data-scroll-header]");
    const updateHeaderOffset = () => {
      if (!header) {
        return;
      }

      document.documentElement.style.setProperty(
        "--app-header-height",
        `${header.offsetHeight}px`
      );
    };

    updateHeaderOffset();
    window.addEventListener("resize", updateHeaderOffset);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => {
        window.removeEventListener("resize", updateHeaderOffset);
      };
    }

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      smoothTouch: 0.1,
      effects: true,
    });

    return () => {
      smoother.kill();
      window.removeEventListener("resize", updateHeaderOffset);
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <Navbar />
      <div
        id="smooth-content"
        className="min-h-screen bg-white text-black"
        style={{ paddingTop: "var(--app-header-height)" }}
      >

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
