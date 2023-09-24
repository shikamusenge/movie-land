import React from "react";
import Card from "../Cards/Card";
function Quetion1() {
  const data = [
    {
      title: "PCMAG.COM",
      content:
        "HOSTinga Provide it self a reliable web hosying service in fact, our test site didnt t go down once during the 14 day observatio period",
    },
    {
      title: "CNet.COM",
      content:
        "HOSTinga Provide it self a reliable web hosying service in fact, our test site didnt t go down once during the 14 day observatio period",
    },
    {
      title: "SFGATE",
      content:
        "HOSTinga Provide it self a reliable web hosying service in fact, our test site didnt t go down once during the 14 day observatio period",
    },
  ];
  return (
    <div>
      <div className="bg-[#673dE6] grid grid-cols-1 items-center justify-around p-8 gap-6 h-screen md:grid-cols-3">
        {data.map((item, i) => (
          <div key={i}>
            <Card title={item.title} content={item.content}></Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quetion1;
