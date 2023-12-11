import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// CSS
import "./topBox.scss";

// Cookie
import { useCookies } from "react-cookie";

function TopBox() {
  const [data, setData] = useState([]);

  const [cookie] = useCookies(["Token"]);

  const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          REACT_APP_API_URL.concat("get_random_seven"),
          {
            headers: {
              Authorization: "Bearer ".concat(cookie.Token.access_token),
            },
          }
        );
        const json = await response.json();

        setData(json);
      } catch (error) {
        setData(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="topBox">
      {!data ? (
        <h2 className="flex justify-center">Something Wrong!</h2>
      ) : (
        <div>
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
      )}
    </div>
  );
}

export default TopBox;
