import IconAccount from "@/components/icons/IconAccount";
import IconAchive from "@/components/icons/IconAchive";
import IconBill from "@/components/icons/IconBill";
import IconCartDashboard from "@/components/icons/IconCartDashboard";
import IconDashboard from "@/components/icons/IconDashboard";
import IconHome from "@/components/icons/IconHome";
import IconInfoAccuont from "@/components/icons/IconInfoAccuont";
import IconNewspaper from "@/components/icons/IconNewspaper";
import React from "react";
import { NavLink } from "react-router-dom";

const NavbarDashboard = () => {
  return (
    <div className="grid col-start-1 col-end-3 w-full h-screen border-x-4  border-b-4 border-solid border-[#053024] p-5">
      <div className="rounded-md flex flex-col ">
        <NavLink
          to={"/admin/dashboard"}
          className={({ isActive }) =>
            isActive ? "bg-button text-white rounded-sm" : "hover:text-text3"
          }
        >
          <ItemNavbar
            children={<IconDashboard></IconDashboard>}
            title={"Dashboard"}
          ></ItemNavbar>
        </NavLink>
        <NavLink
          to={"/admin/product-type"}
          className={({ isActive }) =>
            isActive ? "bg-button text-white rounded-sm" : "hover:text-text3"
          }
        >
          <ItemNavbar
            children={<IconAchive></IconAchive>}
            title={"Loại sản phẩm "}
          ></ItemNavbar>
        </NavLink>
        <NavLink
          to={"/admin/account"}
          className={({ isActive }) =>
            isActive ? "bg-button text-white rounded-sm" : "hover:text-text3"
          }
        >
          <ItemNavbar
            children={<IconAccount></IconAccount>}
            title={"Tài khoản"}
          ></ItemNavbar>
        </NavLink>
        <NavLink
          to={"/admin/brand"}
          className={({ isActive }) =>
            isActive ? "bg-button text-white rounded-sm" : "hover:text-text3"
          }
        >
          <ItemNavbar
            children={<IconHome></IconHome>}
            title={"Thương hiệu"}
          ></ItemNavbar>
        </NavLink>
        <NavLink
          to={"/admin/post"}
          className={({ isActive }) =>
            isActive ? "bg-button text-white rounded-sm" : "hover:text-text3"
          }
        >
          <ItemNavbar
            children={<IconNewspaper></IconNewspaper>}
            title={"Bài viết"}
          ></ItemNavbar>
        </NavLink>
        <NavLink
          to={"/admin/product"}
          className={({ isActive }) =>
            isActive ? "bg-button text-white rounded-sm" : "hover:text-text3"
          }
        >
          <ItemNavbar
            children={<IconCartDashboard></IconCartDashboard>}
            title={"Sản phẩm"}
          ></ItemNavbar>
        </NavLink>
        <NavLink
          to={"/admin/order"}
          className={({ isActive }) =>
            isActive ? "bg-button text-white rounded-sm" : "hover:text-text3"
          }
        >
          <ItemNavbar
            children={<IconBill></IconBill>}
            title={"Hóa đơn"}
          ></ItemNavbar>
        </NavLink>
      </div>
      <div className="w-full">
        <span className="w-full text-lg items-center font-medium">
          Thông tin
        </span>
        <NavLink to={"/admin/profile"}>
          <div className="flex gap-3 p-2 text-lg items-center font-medium">
            <IconInfoAccuont></IconInfoAccuont>
            <span>Thông tin cá nhân</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

const ItemNavbar = ({ children, title }) => {
  return (
    <div className="flex gap-3 p-2 text-lg items-center font-medium">
      {children}
      <span>{title}</span>
    </div>
  );
};

export default NavbarDashboard;
