import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Offers from "../components/Offers";
import Services from "../components/Services";
import About from "../components/About";
import Quotes from "../components/Quotes";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Offers />
      <Services />
      <About />
      <Quotes />
      <Footer />
    </>
  );
}

export default Home;