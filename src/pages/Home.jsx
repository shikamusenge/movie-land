import React, { useEffect, useState } from "react";
import MovieCard from "../components/Home/MovieCard";
import Home1 from "../components/Home/Home1";
import Home3 from "../components/Home/Home3";
import Footer from "../components/Home/Footer";
import Home2 from "../components/Home/Home2";
function Home() {
  return (
    <div className="bg-black">
      <div className="text-white text-[2.5rem] relative">
        <div className="absolute right-0 z-10 cursor-pointer hover:text-red-600 mr-10 mt-6">
          <i className="fa fa-gear static"></i>
        </div>
      </div>
      <Home1 />
      <Home2 />
      <Home3 />
      <Footer />
    </div>
  );
}

export default Home;
