import React from "react";

// Companents
import TopBox from "../../companents/topBox/TopBox";
import LineChartBox from "../../companents/lineChartBox/LineChartBox";
import AreaChartBox from "../../companents/areaChartBox/AreaChartBox";
import PieChartBox from "../../companents/pieChartBox/PieChartBox";
import BarChartBox from "../../companents/barChartBox/BarChartBox";
import SortPoint from "../../companents/sortPoint/SortPoint";

// Data
import {
  areaChartGaindata,
  areaChartPointdata,
  chartBoxDE,
  chartBoxABC,
  barChartBoxED,
  barChartBoxABC,
} from "../../data";

// CSS
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <SortPoint />
        {/* <AreaChartBox {...areaChartPointdata} /> */}
      </div>
      <div className="box box3">
        <AreaChartBox {...areaChartGaindata} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <LineChartBox {...chartBoxDE} />
      </div>
      <div className="box box6">
        <LineChartBox {...chartBoxABC} />
      </div>
      <div className="box box7">
        <AreaChartBox {...areaChartPointdata} />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxED} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxABC} />
      </div>
    </div>
  );
}

export default Home;
