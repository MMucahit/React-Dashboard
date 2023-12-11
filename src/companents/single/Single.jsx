import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// ReCharts
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// MUI
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// Services
import GetShap from "../../services/GetShap";
import GetByEmployeeId from "../../services/GetByEmployeeId";

// CSS
import "./single.scss";

function Single() {
  const { id } = useParams();

  const [shap, setShap] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fectData() {
      try {
        let getShap = new GetShap();
        const shap_response = await getShap.get_shap(id);

        setShap(shap_response);
      } catch (error) {}

      try {
        let getByEmployeeId = new GetByEmployeeId();
        const user_response = await getByEmployeeId.get_by_employee_id(id);

        setUser(user_response);
      } catch (error) {}
    }
    fectData();
  }, [id]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;

      const tooltipContent = (
        <div>
          <p>Value: {data.feature_values}</p>
        </div>
      );

      return tooltipContent;
    }

    return null;
  };

  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <img src="/user.svg" alt=""></img>
            <h1>
              {user.name_surname} - {user.office_name}
            </h1>
          </div>
          <div className="details">
            <div className="item">
              <span className="itemTitle">New User:</span>
              <span className="itemValue">{user.isNew}</span>
            </div>
            <div className="item">
              <span className="itemTitle">Active User:</span>
              <span className="itemValue">{user.isClose}</span>
            </div>
            <div className="item">
              <span className="itemTitle">Active Point:</span>
              <span className="itemValue">{user.active_point}</span>
            </div>
            <div className="item">
              <span className="itemTitle">Gain Point:</span>
              <span className="itemValue">{user.gain_point}</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="activities">
          <h2>Latest Activities</h2>
          <ul>
            <li>
              <div>
                <p>Added Favorite!</p>
                <time>3 days ago</time>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="chart">
        {shap.length !== 0 ? (
          <ResponsiveContainer width="99%" height="100%">
            <LineChart
              layout="vertical"
              data={shap}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tick={{ fill: "white" }} />
              <YAxis
                dataKey="feature_names"
                type="category"
                tick={{ fill: "white" }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line dataKey="values" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
      </div>
    </div>
  );
}

export default Single;
