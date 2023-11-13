import React from "react";

// ReCharts
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// CSS
import "./barChartBox.scss";

function BarChartBox(props) {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart
            data={props.chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{ background: "transparent", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
              position={{ x: 300, y: -80 }}
            />
            <Legend />
            {props.dataKeyColor.map((dK, index) => (
              <Bar key={index} dataKey={dK.key} stackId="a" fill={dK.color} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarChartBox;
