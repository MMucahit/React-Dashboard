import React from "react";

// CSS
import "./sortPoint.scss";

function SortPoint() {
  return (
    <div className="sortPoint">
      <div className="svg">
        <img src="money.png" alt=""></img>
      </div>
      <div className="title">Anlık Puan Sıralaması</div>
      <div className="sorted">A E B D C</div>
    </div>
  );
}

export default SortPoint;
