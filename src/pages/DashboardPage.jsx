import IconLogo from "@/components/icons/IconLogo";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-10">
      <header>
        <div className="">
          <IconLogo></IconLogo>
        </div>
      </header>
      <div className="grid col-start-1 col-end-3"></div>
      <div className="grid col-start-4 col-end-11"></div>
    </div>
  );
};

export default DashboardPage;
