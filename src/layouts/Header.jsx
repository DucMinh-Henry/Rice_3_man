import { CartData } from "@/components/context/CartContext";
import IconCart from "@/components/icons/IconCart";
import IconLogo from "@/components/icons/IconLogo";
import IconSearch from "@/components/icons/IconSearch";
import IconUser from "@/components/icons/IconUser";
import { authLogOut } from "@/store/auth/auth-slice";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { cart } = CartData();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const dropdownRef = useRef(null);

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

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authLogOut());
    navigate("/login");
  };

  // console.log(user);

  return (
    <header className="page-container bg-[#007033] flex justify-between items-center px-10 text-white">
      <div className="flex gap-20">
        <Link to={"/"}>
          <IconLogo />
        </Link>
        <div className="relative flex items-center">
          <input
            placeholder="Nhập tên sản phẩm"
            className="outline-none px-5 py-1 w-[350px] rounded-lg"
            type="text"
          />
          <IconSearch />
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
            <IconCart className={"w-10 h-10"} />
            <div className="absolute w-5 h-5 bg-[#d0a73c] top-0 -right-1 flex justify-center items-center rounded-full">
              <span className="text-center text-base text-[#333]">
                {cart.length}
              </span>
            </div>
          </Link>
        </div>
        {!user || !user.email ? (
          <div className="flex gap-5 items-center justify-center text-lg font-normal">
            <div
              className="hover:text-[#d0a73c] cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Đăng nhập
            </div>
            <div
              className="hover:text-[#d0a73c] cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Đăng ký
            </div>
          </div>
        ) : (
          <div
            className="relative flex gap-2 items-center justify-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <IconUser />
            <span className="font-semibold text-lg">{userName}</span>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute flex flex-col bg-white top-12 z-10 w-40 right-0 rounded-md shadow-md"
              >
                <ItemDropdown
                  url={"/infoAccount"}
                  children={"Tài khoản"}
                  onClick={() => setIsDropdownOpen(false)}
                />
                {user && user.role === 1 ? (
                  <ItemDropdown
                    url={"/admin/dashboard"}
                    children={"Chuyển đến Admin"}
                    onClick={() => setIsDropdownOpen(false)}
                  />
                ) : null}
                <ItemDropdown
                  url={"/historyBuy"}
                  children={"Lịch sử mua hàng"}
                  onClick={() => setIsDropdownOpen(false)}
                />
                <ItemDropdown
                  url={""}
                  children={"Đăng xuất"}
                  onClick={handleLogout}
                  className={"border-none"}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

const ItemDropdown = ({ url, children, onClick = () => {}, className }) => {
  return (
    <Link
      to={url}
      className={`text-base p-2 w-full cursor-pointer text-[#333] hover:text-[#d0a73c] border-b ${className}`}
      onClick={onClick}
    >
      <span>{children}</span>
    </Link>
  );
};

export default Header;
