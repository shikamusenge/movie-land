import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
function Watches() {
  const { id } = useParams();
  return (
    <div>
      <YouTube videoId={id}></YouTube>
    </div>
  );
}

export default Watches;
