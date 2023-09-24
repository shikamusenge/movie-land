import React from "react";

const MovieCard = (pros) => {
  return (
    <div
      key={pros.movieId}
      className=" card-image overflow-hidden rounded z-0 relative w-fit h-fit bg-slate-600 hover:z-2 hover:mx-[-2rem] hover:p-2 hover:mt-[-2rem]"
    >
      <div className="h-[20rem] overflow-hidden">
        <img
          src={pros.image}
          alt="i"
          className="rounded duration-1000 h-[20rem] opacity-[0.7] relative w-[32vw] md:w-[14vw] hover:h-[20rem] hover:mb-14 hover:bottom-0 hover:-translate-y-8 ease-in-out hover:z-2 z-1 "
        />
      </div>
      <div className="absolute text-white font-bold bottom-0 px-2">
        <div className="btns mb-12 gap-10 items-center justify-between hidden w-full">
          <i className="fa fa-heart text-[12px] cursor-pointer text-red-700 border rounded-full p-[2px]"></i>
          <i className="fa fa-play text-[20px] p-3 text-red-white cursor-pointer bg-red-700 rounded-full"></i>
        </div>
        <p>{pros.name}</p>
        <p>{pros.durition}</p>
      </div>
    </div>
  );
};

export default MovieCard;
