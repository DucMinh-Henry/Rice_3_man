import React from "react";
import HeaderDashBoard from "./HeaderDashBoard";
import NavbarDashboard from "./NavbarDashboard";
import { Outlet } from "react-router-dom";

const MainDashboard = () => {
  return (
    <div className="page-container">
      <HeaderDashBoard></HeaderDashBoard>
      <div className="grid grid-cols-10 gap-5">
        <NavbarDashboard></NavbarDashboard>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainDashboard;
