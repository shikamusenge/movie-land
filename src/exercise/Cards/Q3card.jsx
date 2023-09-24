import React from "react";

function Q3card({ service, description }) {
  return (
    <div className="w-[20rem] p-8 bg-slate-100 relative rounded-lg m-4">
      <div className="font-bold text-xl">
        <i className="fa fa-star"></i>
        {service}
      </div>
      <div className="py-6 font-light text-lg ">{description}</div>
      <div className=" absolute bottom-0 w-[16rem] flex items-center place-content-center justify-between py-4 mt-2">
        <p className="flex gap-2 text-green-600 font-bold mt-4 ">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </p>
        <p className="flex items-start">
          <i className="fa fa-angle-right font-bold text-lg mt-[1.2rem]"></i>
        </p>
      </div>
    </div>
  );
}

export default Q3card;
