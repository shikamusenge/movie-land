import React from "react";

export default function MyCards({ title, content }) {
  return (
    <>
      <div className="bg-[#5025D1] text-white border rounded  w-[300px] p-5 ">
        <div className="font-semibold my-2">
          <h1> {title} </h1>
        </div>
        <div className="">
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}
