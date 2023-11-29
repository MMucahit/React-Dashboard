import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

// Services
import GetRandomED from "../../services/GetRandomED";

// CSS
import "./navbar.scss";

function Navbar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fectData() {
      let getRandomED = new GetRandomED();
      const response = await getRandomED.get_random_ED();

      setUser(response.data);
    }
    fectData();
  }, []);

  return (
    <div className="navbar">
      <div className="greeting">
        <img src="/profile.svg" alt=""></img>
        <span>Merhaba, RE/MAX</span>
      </div>

      <div className="feelHappy">
        <Link to={`/users/${user.employee_id}`}>
          <img src="/clover.png" alt=""></img>
        </Link>
        <span>Şanslı Hissediyorum!</span>
      </div>
    </div>
  );
}

export default Navbar;
