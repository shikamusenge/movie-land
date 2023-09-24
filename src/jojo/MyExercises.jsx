import React from "react";
import MyCards from "./MyCards";
import { Mydata } from "./Object";
export default function MyExercises() {
  return (
    <>
      <div>
        <div className="bg-[#673DE6] justify-center placement-center  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 ">
          {Mydata.map((item, index) => {
            return (
              <MyCards key={index} title={item.title} content={item.content} />
            );
          })}
        </div>
      </div>
    </>
  );
}
