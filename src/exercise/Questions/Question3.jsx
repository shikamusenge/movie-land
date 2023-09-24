import React from "react";
import Q3card from "../Cards/Q3card";
import { services } from "../Data/data";

function Question3() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-around h-[80vh]">
      {services.map((item, i) => {
        const { service, description } = item;
        return <Q3card key={i} service={service} description={description} />;
      })}
    </div>
  );
}

export default Question3;
