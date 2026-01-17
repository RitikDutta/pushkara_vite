import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/product", element: <Product /> },
  { path: "/contact", element: <Contact /> },
];
