import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Routes>

      <Footer />
    </div>
  );
}
