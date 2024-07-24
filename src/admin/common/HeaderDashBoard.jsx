import IconLogo from "@/components/icons/IconLogo";
import IconUser from "@/components/icons/IconUser";
import { authLogOut } from "@/store/auth/auth-slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const HeaderDashBoard = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (!user || !user.email) {
      setUserName("");
    } else {
      setUserName(user.name);
    }
  }, [user]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = () => {
    dispatch(authLogOut());
    navigate("/login");
  };

  // console.log(user);

  return (
    <header className="flex justify-between items-center w-full text-white bg-button px-5 ">
      <Link to={"/"} className="flex justify-center items-center gap-5">
        <IconLogo></IconLogo>
        <h2 className="text-xl font-semibold">Rice 3 Man</h2>
      </Link>
      <div className="flex justify-center items-center gap-5">
        <div
          className="relative flex gap-2 items-center justify-center cursor-pointer"
          onClick={toggleDropdown}
        >
          <IconUser></IconUser>
          <span className="font-semibold text-lg">{userName}</span>
        </div>
        {isDropdownOpen && (
          <div className="absolute flex flex-col bg-white top-16 z-10 w-44 mr-11 rounded-md shadow-lg">
            <Link
              to={"/admin/profile"}
              className="hiddenx text-base p-2 w-full cursor-pointer text-[#333] hover:text-[#d0a73c] border-b"
            >
              <span>Thông tin tài khoản</span>
            </Link>
            <Link
              to={"/"}
              className="hiddenx text-base p-2 w-full cursor-pointer text-[#333] hover:text-[#d0a73c] border-b"
            >
              <span>Chuyển về trang chủ</span>
            </Link>
            <Link
              to={"/login"}
              className="hiddenx text-base p-2 w-full cursor-pointer text-[#333] hover:text-[#d0a73c]"
            >
              <span onClick={handleLogout}>Đăng xuất</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderDashBoard;
