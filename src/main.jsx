import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Services from "./pages/Services";
import Service1 from "./pages/Service1";
import Service2 from "./pages/Service2";
import Service3 from "./pages/Service3";
import Service4 from "./pages/Service4";
import Service5 from "./pages/Service5";
import Service6 from "./pages/Service6";
import HamzaSection from "./pages/HamzaSection";
import Service7 from "./pages/Service7.jsx";
import Service8 from "./pages/Service8.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";
import Join from "./pages/Join.jsx";
import Articles from "./pages/Articles.jsx";
import News from "./pages/News.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home></Home> },
  {
    path: "/about",
    element: <About></About>,
  },
  { path: "/services", element: <Services></Services> },
  { path: "/service-1", element: <Service1></Service1> },
  { path: "/service-2", element: <Service2></Service2> },
  { path: "/service-3", element: <Service3></Service3> },
  { path: "/service-4", element: <Service4></Service4> },
  { path: "/service-5", element: <Service5></Service5> },
  { path: "/service-6", element: <Service6></Service6> },
  { path: "/service-7", element: <Service7></Service7> },
  { path: "/service-8", element: <Service8></Service8> },
  { path: "/team", element: <Team></Team> },
  { path: "/contact", element: <Contact></Contact> },
  { path: "/join-us", element: <Join></Join> },
  { path: "/articles", element: <Articles></Articles> },
  { path: "/news", element: <News></News> },
  { path: "/hamza", element: <HamzaSection></HamzaSection> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
