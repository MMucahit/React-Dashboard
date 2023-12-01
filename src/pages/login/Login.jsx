import React, { useState } from "react";
import { Navigate } from "react-router-dom";

// Cookie
import { Cookies, useCookies } from "react-cookie";

// Services
import GetToken from "../../services/GetToken";

// CSS
import "./login.scss";

const login = (handleEmail, handlePassword, handleSubmit) => {
  return (
    <div className="grid grid-cols1 sm:grid-cols-2 margin-bottom:auto h-screen">
      <div className="hidden sm:block">
        <img
          src="Madao.png"
          alt=""
          className="w-full h-screen object-cover"
        ></img>
      </div>

      <div className="bg-gray-800 flex flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
        >
          <h2 className="text-4xl dark:text-white font-bold text-center">
            SIGN IN
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              onChange={handleEmail}
              type="text"
            ></input>
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              onChange={handlePassword}
              type="password"
            ></input>
          </div>
          <button
            className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50"
            type="submit"
          >
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();

  const [cookie, setCookie] = useCookies(["Token"]);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Varsayılan form gönderme davranışını engeller
    await saveCookie(); // Form gönderimini ele almak için saveCookie fonksiyonunu çağırır
  };

  const saveCookie = async () => {
    let getToken = new GetToken();
    const response = await getToken.get_token(email, password);

    if (!response.error) {
      setCookie("Token", response, { path: "/" });
    } else {
      setErrors(response);
    }
  };

  return cookie.Token ? (
    <Navigate to="/" replace />
  ) : (
    login(handleEmail, handlePassword, handleSubmit)
  );
}
export default Login;
