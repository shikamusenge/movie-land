import React from "react";

function Q2card({ content, image, name, post }) {
  return (
    <div className="border w-[20rem] m-4 rounded-lg relative">
      <div className="mx-6 mt-4">
        <p className="text-[#5025D1] py-4">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </p>
        <p className="text-blue-900 font-[400]">{content}</p>
        <p className="text-[#5025D1] font-[800] py-4 mb-[7rem]">
          Read for the full story
        </p>
      </div>
      <div className="flex bg-gray-100 w-full px-6 py-8 absolute bottom-0">
        <img
          src={image}
          className="w-12 overflow-hidden h-12 rounded-full border border-[#5025D1]"
        />
        <div className="pl-2 text-[#5025D1] bottom-0">
          <p className="font-[600]">{name}</p>
          <p className="text-[14px]">{post}</p>
        </div>
      </div>
    </div>
  );
}

export default Q2card;
