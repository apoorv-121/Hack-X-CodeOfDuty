import React from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from './logo.png'

const Header = () => {

  const navigate = useNavigate();

  return (
    <>
      <nav className="navmain">
        <div className="navleft">
          <img className="headlogo" src={logo} width='150px' onClick={() => navigate('/')} />
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
          <NavLink to="/" className="tab-link">
            LogOut
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
