import React from "react";

// ReCharts
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// CSS
import "./areaChartBox.scss";

function AreaChartBox(props) {
  return (
    <div className="areaChartBox">
      <div className="chartInfo">
        <div className="title">
          <img src={props.icon} alt=""></img>
          <span>{props.title}</span>
        </div>
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <AreaChart
              data={props.chartData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 300, y: -80 }}
              />
              {props.dataKeyColor.map((dK, index) => (
                <Area
                  key={index}
                  type="monotone"
                  dataKey={dK.key}
                  stackId={1}
                  stroke={dK.color}
                  fill={dK.color}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default AreaChartBox;
