import React from "react";
import Blog from "./layout/Blog";
import Features from "./layout/Features";
import Hero from "./layout/Hero";
import Robots from "./layout/Robots";

const Home = () => {
  return (
    <>
      <Hero />
      <Robots />
      <Features />
      <Blog />
    </>
  );
};

export default Home;
