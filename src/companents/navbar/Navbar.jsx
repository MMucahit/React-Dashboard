import React from "react";

// CSS
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="greeting">
        <img src="profile.svg" alt=""></img>
        <span>Merhaba, RE/MAX</span>
      </div>

      <div className="feelHappy">
        <img src="clover.png" alt=""></img>
        <span>Şanslı Hissediyorum!</span>
      </div>
    </div>
  );
}

export default Navbar;
