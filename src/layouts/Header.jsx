import { Cart } from "@/components/context/CartContext";
import IconCart from "@/components/icons/IconCart";
import IconLogo from "@/components/icons/IconLogo";
import IconSearch from "@/components/icons/IconSearch";
import IconUser from "@/components/icons/IconUser";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { cart, setCart } = useContext(Cart);
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
    <header className="page-container bg-[#007033] flex justify-between items-center px-10 text-white">
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
              isActive ? "font-semibold text-[#d0a73c]" : "hover:text-[#d0a73c]"
            }
          >
            Trang chủ
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "font-semibold text-[#d0a73c]" : "hover:text-[#d0a73c]"
            }
          >
            Sản phẩm
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive ? "font-semibold text-[#d0a73c]" : "hover:text-[#d0a73c]"
            }
          >
            Bài viết
          </NavLink>
        </div>
      </div>
      <div className="flex gap-5 items-center justify-center">
        <div className="relative">
          <Link to={"/carts"}>
            <IconCart className={"w-10 h-10"}></IconCart>
            <div className="absolute w-5 h-5 bg-[#d0a73c] top-0 -right-1 flex justify-center items-center rounded-full">
              <span className="text-center text-base text-[#333]">
                {cart.length}
              </span>
            </div>
          </Link>
        </div>
        {/* Kiểm tra trạng thái đăng nhập */}
        {!isLoggedIn ? (
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
            <Link to={"/login"} className="hover:text-[#d0a73c]">
              Đăng nhập
            </Link>
            <Link to={"/register"} className="hover:text-[#d0a73c]">
              Đăng ký
            </Link>
          </div>
        )}
        {isDropdownOpen && !isLoggedIn && (
          <div className="absolute flex flex-col bg-white top-16 z-10 w-40 right-6 rounded-md">
            <Link
              to={"/infoAccount"}
              className="text-base p-2 w-full cursor-pointer text-[#333] hover:text-[#d0a73c] border-b rounded-t-md"
            >
              <span>Tài khoản</span>
            </Link>
            <Link
              to={"/admin/dashboard"}
              className="text-base p-2 w-full cursor-pointer text-[#333] hover:text-[#d0a73c] border-b"
            >
              <span>Chuyển đến Admin</span>
            </Link>
            <Link
              to={"/historyBuy"}
              className="text-base p-2 w-full cursor-pointer text-[#333] hover:text-[#d0a73c] border-b"
            >
              <span>Lịch sử mua hàng</span>
            </Link>
            <div
              onClick={logout}
              className="text-base p-2 w-full cursor-pointer text-[#333] hover:text-[#d0a73c] border-b rounded-b-md"
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
