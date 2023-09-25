import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className=" h-[80px] grid grid-cols-2 md:grid-cols-3 place-items-center text-white bg-gray-950 justify-between w-full">
        <div>
          <img src="./images/logo.png" alt="" className="h-8 md:h-12" />
        </div>
        <ul className="hidden md:flex  gap-5 text-normal font-bold">
          <Link to="/">
            <li className="hover:text-red-700 cursor-pointer">Home</li>
          </Link>
          <li className="hover:text-red-700 cursor-pointer">Feature</li>
          <li className="hover:text-red-700 cursor-pointer">Pages</li>
          <li className="hover:text-red-700 cursor-pointer">Blog</li>
          <li className="hover:text-red-700 cursor-pointer">Shop</li>
        </ul>
        <div className="font-bold text-lg flex gap-10 justify-right">
          <i className="fa fa-search"></i>
          <i className="fa fa-user"></i>
          <i className="fa fa-bars cursor-pointer block md:hidden"></i>
          <Link to="/login">
            <button className="bg-[red] px-3 rounded-md">login</button>
          </Link>
          <Link to="/signup">
            <button className="bg-[red] px-3 rounded-md">Signup</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
