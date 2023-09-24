import React from "react";

function PlayBtn() {
  return (
    <div>
      <div className="my-4 bg-[red] cursor-pointer transition-colors duration-1000 hover:bg-red-700 rounded-md flex  w-fit py-4 px-8 text-2xl gap-2 font-bold">
        <i className="fa fa-play"></i> Play Now
      </div>
    </div>
  );
}

export default PlayBtn;
