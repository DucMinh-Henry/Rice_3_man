import IconLogo from "@/components/icons/IconLogo";
import IconUser from "@/components/icons/IconUser";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderDashBoard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <header className="flex justify-between items-center w-full text-white bg-[#004e3e] px-5 ">
      <Link to={"/"} className="flex justify-center items-center gap-5">
        <IconLogo></IconLogo>
        <h2 className="text-xl font-semibold">Rice 4 Man</h2>
      </Link>
      <div className="flex justify-center items-center gap-5">
        <div
          className="relative flex gap-2 items-center justify-center cursor-pointer"
          onClick={toggleDropdown}
        >
          <IconUser></IconUser>
          <span className="font-semibold text-lg">Duc minh</span>
        </div>
        {isDropdownOpen && (
          <div className="absolute flex flex-col bg-white top-16 z-10 w-44 right-6 rounded-md">
            <Link
              to={"/admin/profile"}
              className="hiddenx text-base p-2 w-full cursor-pointer text-[#333] hover:text-[#d0a73c] rounded-lg"
            >
              <span>Thông tin tài khoản</span>
            </Link>
            <Link
              to={"/"}
              className="hiddenx text-base p-2 w-full cursor-pointer text-[#333] hover:text-[#d0a73c] rounded-lg"
            >
              <span>Chuyển về trang chủ</span>
            </Link>
            <Link
              to={"/login"}
              className="hiddenx text-base p-2 w-full cursor-pointer text-[#333] hover:text-[#d0a73c] rounded-lg"
            >
              <span>Đăng xuất</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderDashBoard;
