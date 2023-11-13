import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Products from "./pages/offices/Offices";
import Users from "./pages/users/Users";
import Login from "./pages/login/Login";
import Favorites from "./pages/favorites/Favorites";

// Companents
import Navbar from "./companents/navbar/Navbar";
import Footer from "./companents/footer/Footer";
import Menu from "./companents/menu/Menu";

// CSS
import "./styles/global.scss";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <div className="navbarContainer">
          <Navbar />
        </div>
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/offices", element: <Products /> },
        { path: "/users", element: <Users /> },
        { path: "/favorites", element: <Favorites /> },
      ],
    },
    { path: "/login", element: <Login /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
