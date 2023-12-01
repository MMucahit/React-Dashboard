import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
  Route,
} from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Products from "./pages/offices/Offices";
import Users from "./pages/users/Users";
import Login from "./pages/login/Login";
import Favorites from "./pages/favorites/Favorites";
import User from "./pages/user/User";
import Office from "./pages/office/Office";

// Components
import Navbar from "./companents/navbar/Navbar";
import Footer from "./companents/footer/Footer";
import Menu from "./companents/menu/Menu";

// CSS
import "./styles/global.scss";

// Custom PrivateRoute Component
const PrivateRoute = ({ element, ...rest }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn"); // Check if user is logged in

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return <Route {...rest} element={element} />;
};

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

        // Use PrivateRoute for protected routes
        { path: "/offices", element: <PrivateRoute element={<Products />} /> },
        { path: "/users", element: <PrivateRoute element={<Users />} /> },
        {
          path: "/favorites",
          element: <PrivateRoute element={<Favorites />} />,
        },

        // Use PrivateRoute with parameter for protected routes
        { path: "/users/:id", element: <PrivateRoute element={<User />} /> },
        {
          path: "/offices/:id",
          element: <PrivateRoute element={<Office />} />,
        },
      ],
    },
    { path: "/login", element: <Login /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
