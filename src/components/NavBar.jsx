import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function NavBar() {
  const [logged, setLogged] = useState(false);
  const [loggedUser, setLoggedUser] = useState("");

  useEffect(() => {
    const Account = JSON.parse(localStorage.getItem("userAcount")) || [];
    if (Account.length > 0) setLogged(true);
    logged && setLoggedUser(Account[0].username);
    logged && console.log(Account[0].username);
  }, []);
  return (
    <>
      <div className=" h-[80px] grid grid-cols-2 md:grid-cols-3 place-items-center text-white bg-gray-950 justify-between w-full">
        <div>
          <img src="./images/logo-main.svg" alt="" className="h-8 md:h-12" />
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
          {logged && (
            <>
              <i className="fa fa-user"></i>
              {loggedUser}
              <i className="fa fa-sign-out" onClick={() => {}}></i>
            </>
          )}
          {!logged && (
            <>
              <Link to="/login">
                <button className="bg-[red] px-3 rounded-md">login</button>
              </Link>
              <Link to="/signup">
                <button className="bg-[red] px-3 rounded-md">Signup</button>
              </Link>
            </>
          )}
          <i className="fa fa-bars cursor-pointer block md:hidden"></i>
        </div>
      </div>
    </>
  );
}

export default NavBar;
