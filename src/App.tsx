import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Swiper from "./components/Swiper";
import TopSwiper from "./components/TopSwiper";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <Search />
      </div>
      <div className="row mt-4">
        <TopSwiper />
      </div>
      <div className="row mt-4">
        <Swiper />
      </div>
      <div className="row mt-4">
        <Swiper />
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};

export default App;
