import React from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "./logo.png";
import axios from "axios";
const Header = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };
  const loginHandler = async () => {
    const response = await axios.post("http://localhost:8000/users/login");
    localStorage.setItem("token", "");
    navigate("/login");
  };
  const isLoggedIn = localStorage.getItem("token");
  return (
    <>
      <nav className="navmain">
        <div className="navleft">
          <img
            className="headlogo"
            src={logo}
            width="150px"
            alt=""
            onClick={() => navigate("/")}
          />
        </div>
        <div className="navright">
          <NavLink to="/" className="tab-link">
            Home
          </NavLink>
          <NavLink to="/plant" className="tab-link">
            Plant
          </NavLink>
          <NavLink to="/animal" className="tab-link">
            Animal
          </NavLink>
          {isLoggedIn ? (
            <div className="logout-btn" onClick={logoutHandler}>
              LogOut
            </div>
          ) : (
            <div className="logout-btn">Login</div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
