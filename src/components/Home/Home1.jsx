import React from "react";
import PlayBtn from "./PlayBtn";

const Home1 = () => {
  return (
    <div className="h-[90vh] bg-black">
      <div
        style={{ backgroundImage: "url('./images/movies01.jpg')" }}
        className="bg-cover bg-no-repeat opacity-[0.5] text-white mx-[2rem] w-[90vw] h-full grid grid-flow-col-1 items-center place-items-center"
      >
        <div className="w-[80vw]">
          <h1 className="text-[4rem] font-extrabold">THE ILLUSION</h1>
          <div className="flex text-white items-center gap-[0.5rem] ">
            <i className="fa fa-star text-yellow"></i>
            <i className="fa fa-star text-yellow"></i>
            <i className="fa fa-star text-yellow"></i>
            <i className="fa fa-star text-yellow"></i>
            <i className="fa fa-star text-yellow"></i>
            4.5
            <img src="./images/IMDB_Logo.svg" alt="" />
            <span className="bg-gray-500 px-3 py-[1.5px] text-white">
              Action
            </span>
            1hr:22mins
          </div>
          <div className="relative text-white text-[2rem]">
            <i className="fa fa-angle-left absolute left-0 ml-[-4rem] rounded-full border px-4 py-1 mt-4 cursor-pointer "></i>
            <i className="fa fa-angle-right absolute right-0 mr-[-9rem] rounded-full border px-4 py-1 mt-4 cursor-pointer"></i>
          </div>
          <div className="grid grid-cols-2 mx-4">
            <div className="min-w-4/6">
              An illusion is a distortion of the senses, which can reveal how
              the human brain normally organizes and interprets sensory
              stimulation. Although illusions distort our perception of reality,
              they are generally shared by most people.
            </div>
            <div className="flex justify-end mr-[2rem]">
              <div className="flex w-fit cursor-pointer items-center text-2xl gap-2 justify-items-end">
                <span className="h-[4rem] w-[4rem] px-3 flex  items-center text-[2rem] justify-center rounded-full hover:border-red-600 duration-1000 transition-color delay-75 border-2 hover:text-red-600 ">
                  <i className="fa fa-play"></i>
                </span>{" "}
                Watch Trailer
              </div>
            </div>
          </div>
          <div>
            <span className="text-[red] font-bold text-lg">Genres</span> Action,
            Fantasy, Horror, Mystery
          </div>
          <PlayBtn />
        </div>
      </div>
    </div>
  );
};

export default Home1;
