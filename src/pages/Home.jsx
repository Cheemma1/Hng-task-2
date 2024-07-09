import React from "react";
// import WebNav from "../components/WebNav";
import Header from "../components/Header";
import FlashSale from "../components/FlashSale";
import AllProducts from "../components/AllProducts";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-babyWhite ">
      {/* <WebNav /> */}
      <Header />

      <FlashSale />
      <AllProducts />
      <Footer />
    </div>
  );
};

export default Home;
