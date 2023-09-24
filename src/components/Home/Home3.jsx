import React from "react";
import PlayBtn from "./PlayBtn";
function Home3() {
  return (
    <div className="text-white h-screen gap-[3rem] flex flex-col-reverse md:flex-row justify-center mx-[2rem] items-center">
      <div className="gap-4 my-8 h-fit">
        <p className="text-[40px] text-bold"> BAILLEY</p>

        <p>
          <span>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </span>
          4.2 (IMd)
        </p>
        <p>
          <span>15+</span> 2hrs : 30mins
        </p>
        <p className="text-[30px]">Movie of the year Baileys</p>
        <p className="py-4">
          Irish Cream is an Irish cream liqueur an alcoholic beverage flavoured
          with cream, cocoa, and Irish whiskey made by Diageo at Republic of
          Ireland and in Mallusk, Northern Ireland.
        </p>
        <PlayBtn />
      </div>
      <div>
        <img src="./images/02.jpg" alt="" />
      </div>
    </div>
  );
}

export default Home3;
