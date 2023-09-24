import React from "react";
import Q2card from "../Cards/Q2card";
import { stories } from "../Data/data";
function Question2() {
  return (
    <>
      <div className="text-center text-2xl text-red-950 py-6 font-extrabold">
        {" "}
        Fearured Client Stories
      </div>
      <div className="grid sm:grid-cols-1 justify-center gap-2 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((item, i) => {
          let { names, post, image, content } = item;
          return (
            <Q2card
              key={i}
              name={names}
              post={post}
              content={content}
              image={image}
            />
          );
        })}
      </div>
    </>
  );
}

export default Question2;
