import React from "react";

// Companents
import TopBox from "../../companents/topBox/TopBox";
import LineChartBox from "../../companents/lineChartBox/LineChartBox";
import AreaChartBox from "../../companents/areaChartBox/AreaChartBox";
import PieChartBox from "../../companents/pieChartBox/PieChartBox";

// Data
import { areaChartPointdata, chartBoxDE, chartBoxABC } from "../../data";

// CSS
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <LineChartBox {...chartBoxDE} />
      </div>
      <div className="box box3">
        <LineChartBox {...chartBoxABC} />
      </div>
      <div className="box box4">
        <AreaChartBox {...areaChartPointdata} />
      </div>
      <div className="box box5">
        <PieChartBox />
      </div>
    </div>
  );
}

export default Home;
