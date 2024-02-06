import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import SectionLeft from "../components/SectionLeft";
import SectionRight from "../components/SectionRight";
import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import WpBtn from "../components/WpBtn";

const HomePage = () => {
  return (
    <>
      <Header />
      <Slider/>
      <SectionLeft/>
      <SectionRight/>
      <Banner/>
      <Blogs/>
      <WpBtn/>
      <Footer />
    </>
  );
};

export default HomePage;
