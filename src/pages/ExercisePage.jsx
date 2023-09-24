import React, { useState } from "react";
import Card from "../exercise/Cards/Card";
import Quetion1 from "../exercise/Questions/Quetion1";
import Question2 from "../exercise/Questions/Question2";
import Question3 from "../exercise/Questions/Question3";
function ExercisePage() {
  const lQ = localStorage.getItem("question") || 1;
  const [q, setQ] = useState(lQ);
  return (
    <div>
      <div className="flex h-12 items-center bg-slate-200">
        <div
          onClick={() => {
            setQ(1);
            localStorage.setItem("question", 1);
          }}
          className="bg-[#673dE6] h-full flex items-ceter hover:opacity-[0.7] text-white font-bold px-4 py-3  cursor-pointer border"
        >
          Question1
        </div>
        <div
          onClick={() => {
            setQ(2);
            localStorage.setItem("question", 2);
          }}
          className="bg-white text-[#673dE6] h-full flex items-ceter font-bold px-4 hover:opacity-[0.7] py-3 cursor-pointer border "
        >
          Question2
        </div>
        <div
          onClick={() => {
            setQ(3);
            localStorage.setItem("question", 3);
          }}
          className=" bg-slate-100 h-full flex items-ceter font-bold px-4 hover:opacity-[0.7] py-3 cursor-pointer border"
        >
          Question3
        </div>
      </div>
      <div>
        {q == 1 && <Quetion1 />}
        {q == 2 && <Question2></Question2>}
        {q == 3 && <Question3></Question3>}
      </div>
    </div>
  );
}

export default ExercisePage;
