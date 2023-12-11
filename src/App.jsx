import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

// Cookie
import { useCookies } from "react-cookie";

// Pages
import Home from "./pages/home/Home";
import Offices from "./pages/offices/Offices";
import Users from "./pages/users/Users";
import Login from "./pages/login/Login";
import Favorites from "./pages/favorites/Favorites";
import User from "./pages/user/User";
import OfficeUser from "./pages/officeUser/OfficeUser";

// Companents
import Navbar from "./companents/navbar/Navbar";
import Footer from "./companents/footer/Footer";
import Menu from "./companents/menu/Menu";

// Filter
import { user_AB } from "./data";
import { user_DE } from "./data";
import { user_C } from "./data";

// CSS
import "./styles/global.scss";
import Pie from "./pages/pie/Pie";

function App() {
  const [cookie] = useCookies(["Token"]);

  const PrivateRoute = ({ element, ...rest }) => {
    return cookie.Token ? element : <Navigate to="/login" replace />;
  };

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
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
        { path: "/", element: <PrivateRoute element={<Home />} /> },
        { path: "/offices", element: <PrivateRoute element={<Offices />} /> },
        { path: "/users", element: <PrivateRoute element={<Users />} /> },
        {
          path: "/favorites",
          element: <PrivateRoute element={<Favorites />} />,
        },
        {
          path: "/AB",
          element: <PrivateRoute element={<Pie filter={user_AB} />} />,
        },
        {
          path: "/DE",
          element: <PrivateRoute element={<Pie filter={user_DE} />} />,
        },
        {
          path: "/C",
          element: <PrivateRoute element={<Pie filter={user_C} />} />,
        },
        { path: "/users/:id", element: <PrivateRoute element={<User />} /> },
        {
          path: "/offices/:office_name",
          element: <PrivateRoute element={<OfficeUser />} />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
