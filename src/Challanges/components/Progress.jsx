import React from "react";
const Progress = ({ rate }) => {
  return (
    <div className="flex items-center">
      <div className="rounded-full border-[2px] flex overflow-hidden h-8 w-[30rem] m-5">
        <div
          style={{ width: `${rate}%` }}
          className="bg-red-600 h-full rounded-full"
        ></div>
      </div>
      <div className="m-0">{rate}%</div>
    </div>
  );
};

export default Progress;
