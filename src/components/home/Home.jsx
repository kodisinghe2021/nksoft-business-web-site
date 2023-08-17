import React from "react";
import Hero from "./hero/Hero";
import AboutCard from "../about/AboutCard";
import HAbout from "./HAbout";
import Testimonal from "./testiomonal/Testiomonal"
import Hblog from "./testiomonal/Hblog";
import Hprice from "./Hprice";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
    </>
  );
};

export default Home;
