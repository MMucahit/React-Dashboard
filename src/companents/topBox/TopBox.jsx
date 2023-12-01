import React, { useEffect, useState } from "react";

// CSS
import "./topBox.scss";
import { Link } from "react-router-dom";

function TopBox() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000/get_random_seven");
      const json = await response.json();

      setData(json);
    };
    fetchData();
  }, []);

  return (
    <div className="topBox">
      <h2>Ayrılma İhtimali Olanlar</h2>
      <div className="list">
        {data.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <Link to={`/users/${user.employee_id}`}>
                <img src="user.svg" alt=""></img>
              </Link>
              <div className="userText">
                <span className="user_name">{user.name_surname}</span>
                <span className="office_name">{user.office_name}</span>
              </div>
            </div>
            <span className="active_point">{user.active_point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBox;
