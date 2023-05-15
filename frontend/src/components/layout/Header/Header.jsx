import React, { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import axios from "axios";
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross1} from 'react-icons/rx'


const Header1 = () => {
  useEffect(() => {
    const mobile_nav = document.querySelector(".mobile-navbar-btn");
    const nav_header = document.querySelector(".header");

    const toggleNavbar = () => {
      nav_header.classList.toggle("active");
    };

    mobile_nav.addEventListener("click", toggleNavbar);
    // Clean up event listener on unmount
    return () => {
      mobile_nav.removeEventListener("click", toggleNavbar);
    };
  }, []);

  const navigate = useNavigate();
  const [points, setPoints] = useState(0);
  const pnts = parseInt(localStorage.getItem("points"));
  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };
  const loginHandler = async () => {
    await axios.post("http://localhost:8000/users/login");
    localStorage.setItem("token", "");
    navigate("/login");
  };

  useEffect(() => {
    setPoints(parseInt(localStorage.getItem("points")));
  }, [points, pnts]);

  const isLoggedIn = localStorage.getItem("token");

  return (
    <>
      <header className="header">
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

          <nav className="navbar">
            <ul className="navbar-list">
              <li>
                <a className="navbar-link" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="navbar-link" href="/gogreen">
                  Go Green
                </a>
              </li>
              <li>
                <a className="navbar-link" href="/helpanimal">
                  Help Animals
                </a>
              </li>
              <li>
                <a className="navbar-link" href="/reccomend">
                  Enhance Lifestyle
                </a>
              </li>
              <li>
                <a className="navbar-link" href="/game">
                  Game Section
                </a>
              </li>
              <li>
                <a className="navbar-link" href="/activity">
                  Activity Section
                </a>
              </li>
              {isLoggedIn ? (
                <div className="logout-btn" onClick={logoutHandler}>
                  LogOut
                </div>
              ) : (
                <div className="logout-btn" onClick={loginHandler}>
                  Login
                </div>
              )}
            </ul>
          </nav>
      

        <div className="mobile-navbar-btn">
          <GiHamburgerMenu className="mobile-nav-icon open"/>
          <RxCross1 className="mobile-nav-icon close"/>
        </div>
      </header>
    </>
  );
};

export default Header1;
