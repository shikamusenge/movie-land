import React from "react";

function Card({ title, content }) {
  return (
    <div className="bg-[#5025D1] text-white rounded-md p-8  ">
      <div className="text-2xl my-3 ">{title}</div>
      <div>{content}</div>
    </div>
  );
}

export default Card;
