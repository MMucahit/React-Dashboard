import React from "react";

// CSS
import "./menu.scss";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">MAIN</span>
        <Link to="/" className="listItem">
          <img src="home.svg" alt=""></img>
          <span className="listItemTitle">Home</span>
        </Link>
        <Link to="/users" className="listItem">
          <img src="user.svg" alt=""></img>
          <span className="listItemTitle">Users</span>
        </Link>
        <Link to="/offices" className="listItem">
          <img src="user.svg" alt=""></img>
          <span className="listItemTitle">Offices</span>
        </Link>
        <Link to="/favorites" className="listItem">
          <img src="user.svg" alt=""></img>
          <span className="listItemTitle">Favorites</span>
        </Link>
      </div>
      <div className="item">
        <span className="title">ANALYTICS</span>
        <Link to="/" className="listItem">
          <img src="chart.svg" alt=""></img>
          <span className="listItemTitle">Chart</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="log.svg" alt=""></img>
          <span className="listItemTitle">Log</span>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
