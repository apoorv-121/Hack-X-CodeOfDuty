import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header/Header";

function PlatformApp() {
  return (
    <>
      <div id="body-pd" className="main_body">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default PlatformApp;
