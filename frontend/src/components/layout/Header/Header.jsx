import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "./logo.png";
import axios from "axios";
const Header = (props) => {
  const navigate = useNavigate();
  const [points, setPoints] = useState(0);
  const pnts = parseInt(localStorage.getItem("points"));
  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };
  const loginHandler = async () => {
    const response = await axios.post("http://localhost:8000/users/login");
    localStorage.setItem("token", "");
    navigate("/login");
  };

  useEffect(() => {
    setPoints(parseInt(localStorage.getItem("points")));
  }, [points, pnts]);

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
          <span className="user-points">
            You have collected {points} points till now
          </span>
        </div>
        <div className="navright">
          <NavLink to="/" className="tab-link">
            Home
          </NavLink>
          <NavLink to="/plant" className="tab-link">
            Go green
          </NavLink>
          <NavLink to="/animal" className="tab-link">
            Help Animals
          </NavLink>
          <NavLink to="/reccomend" className="tab-link">
            Reccomendation
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
