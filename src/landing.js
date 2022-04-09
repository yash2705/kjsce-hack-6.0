import React from "react";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";

const Landing = () => {
  return (
    <div className="min-h-screen overflow-x-hidden md:overflow-x-visible bg-slate-100 md:pt-4">
      <Header />
      <Hero />
      <Features />
    </div>
  );
};

export default Landing;
