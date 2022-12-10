import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Project from "../components/Project";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/project",
    element: <Project></Project>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
]);
