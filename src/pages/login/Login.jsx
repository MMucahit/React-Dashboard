import React from "react";
import { Navigate } from "react-router-dom";

// CSS
import "./login.scss";

function Login(props) {
  return props.isLoggedIn ? <Navigate to="/" replace /> : <div>Login</div>;
}
export default Login;
