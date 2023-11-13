import React from "react";

// ReCharts
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

// CSS
import "./pieChartBox.scss";

const data = [
  { name: "Desteğe İhtiyacı Var", value: 3307, color: "#0088FE" },
  { name: "Herşey Yolunda", value: 3574, color: "#00C49F" },
  { name: "Nötr", value: 1273, color: "#FFBB28" },
];

function PieChartBox() {
  return (
    <div className="pieChartBox">
      <h1>Ayrılık İhtimal Dağılımı</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChartBox;
