import React, { useState } from "react";
import Progress from "./components/Progress";
const TaskPage = () => {
  const [percent, setPercent] = useState(5);
  const updater = () => {
    setPercent(percent + 5);
  };

  if (percent < 100) {
    setTimeout(() => {
      updater();
    }, 800);
  }

  return (
    <div>
      <Progress rate={percent} />
    </div>
  );
};

export default TaskPage;
