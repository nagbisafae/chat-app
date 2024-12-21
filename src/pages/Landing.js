import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Cta from "../components/Cta";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import "../App.css";

function Landing() {
  return (
    <div className="min-h-screen h-screen bg-gradient-to-b from-BlueVert to-[#F3F6F6] overflow-y-auto custom-scrollbar">
      <Header />
      <Hero />
      <Cta />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Landing;
