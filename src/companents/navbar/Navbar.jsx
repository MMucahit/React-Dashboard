import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Services
import GetRandomED from "../../services/GetRandomED";

// Cookies
import { useCookies } from "react-cookie";

// CSS
import "./navbar.scss";

function Navbar() {
  const [user, setUser] = useState({});
  const [, , removeCookie] = useCookies(["Token"]);

  useEffect(() => {
    async function fectData() {
      try {
        let getRandomED = new GetRandomED();
        const response = await getRandomED.get_random_ED();

        setUser(response);
      } catch (error) {}
    }
    fectData();
  }, []);

  const handleLogout = () => {
    removeCookie("Token", { path: "/" });
  };

  return (
    <div className="navbar">
      <div className="greeting">
        <img src="/profile.svg" alt=""></img>
        <span>Merhaba, RE/MAX</span>
      </div>

      <div className="feelHappy">
        <Link to={`/users/${user.employee_id}`}>
          <img src="/clover.svg" alt=""></img>
        </Link>
        <span>Şanslı Hissediyorum!</span>
      </div>

      <div className="logout">
        <img onClick={handleLogout} src="/logout.svg" alt=""></img>
      </div>
    </div>
  );
}

export default Navbar;
