import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import IconLogo from "@/components/icons/IconLogo";
import IconSearch from "@/components/icons/IconSearch";
import IconCart from "@/components/icons/IconCart";
import IconUser from "@/components/icons/IconUser";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const [userName, setUserName] = useState(""); // Tên người dùng

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Đăng xuất
  const logout = () => {
    // Xử lý đăng xuất ở đây (ví dụ: xóa token, đặt isLoggedIn thành false)
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <header className="page-container bg-[#F8AA2C] flex justify-between items-center px-10">
      <div className="flex gap-20">
        <Link to={"/"}>
          <IconLogo></IconLogo>
        </Link>
        <div className="relative flex items-center">
          <input
            placeholder="Nhập tên sản phẩm"
            className="outline-none px-5 py-1 w-[350px] rounded-lg"
            type="text"
          />
          <IconSearch></IconSearch>
        </div>
        <div className="flex gap-10 text-lg justify-between items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold text-primary" : "hover:text-text2"
            }
          >
            Trang chủ
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "font-semibold text-primary" : "hover:text-text2"
            }
          >
            Sản phẩm
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive ? "font-semibold text-primary" : "hover:text-text2"
            }
          >
            Bài viết
          </NavLink>
        </div>
      </div>
      <div className="flex gap-5 items-center justify-center">
        <div className="relative">
          <Link to={"/carts"}>
            <IconCart></IconCart>
            <div className="absolute w-5 h-5 bg-primary top-0 -right-1 flex justify-center items-center rounded-full">
              <span className="text-center text-base text-white">0</span>
            </div>
          </Link>
        </div>
        {/* Kiểm tra trạng thái đăng nhập */}
        {isLoggedIn ? (
          <div
            className="relative flex gap-2 items-center justify-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <IconUser></IconUser>
            <span className="font-semibold text-lg">{userName}</span>
          </div>
        ) : (
          // Hiển thị tùy chọn đăng nhập / đăng ký nếu chưa đăng nhập
          <div className="flex gap-5 items-center justify-center text-lg font-normal">
            <Link to={"/login"} className="hover:text-text2">
              Đăng nhập
            </Link>
            <Link to={"/register"} className="hover:text-text2">
              Đăng ký
            </Link>
          </div>
        )}
        {isDropdownOpen && isLoggedIn && (
          <div className="absolute flex flex-col bg-white top-16 z-10 w-40 right-6 rounded-md">
            <Link
              to={"/infoAccount"}
              className="text-base p-2 w-full cursor-pointer hover:bg-slate-300 border-b rounded-t-md"
            >
              <span>Tài khoản</span>
            </Link>
            <Link
              to={"/admin"}
              className="text-base p-2 w-full cursor-pointer hover:bg-slate-300 border-b"
            >
              <span>Chuyển đến Admin</span>
            </Link>
            <Link
              to={"/historyBuy"}
              className="text-base p-2 w-full cursor-pointer hover:bg-slate-300 border-b"
            >
              <span>Lịch sử mua hàng</span>
            </Link>
            <div
              onClick={logout}
              className="text-base p-2 w-full cursor-pointer hover:bg-slate-300 border-b rounded-b-md"
            >
              <span>Đăng xuất</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
