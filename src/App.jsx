import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import MyWork from "./components/MyWork/MyWork";
import Contact from "./components/contact/contact";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MyWork />
      <About />
      <Contact />
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default App;
