import Button from "@/components/button/Button";
import React from "react";
import { Link } from "react-router-dom";

const AccountDeletePage = () => {
  return (
    <div className="page-container flex justify-center items-center mb-10">
      <div className="w-[80%]">
        <div className="flex text-2xl text-center mb-10">
          <Link
            className="w-full py-2 px-5 border-b rounded-t-md"
            to={"/infoAccount"}
          >
            <span className="opacity-50">Thông tin tài khoản</span>
          </Link>
          <Link
            className="w-full py-2 px-5 mx-auto border-b rounded-t-md"
            to={"/updateAccount"}
          >
            <span className="opacity-50">Cập nhật mật khẩu</span>
          </Link>
          <Link
            className="w-full py-2 px-5 mx-auto border border-b-transparent rounded-t-md"
            to={"/deleteAccount"}
          >
            <span>Xóa tài khoản</span>
          </Link>
        </div>
        <div className="p-5">
          <span className="text-text3">
            Sau khi tài khoản của bạn bị xóa, tất cả tài nguyên và dữ liệu của
            tài khoản đó sẽ bị xóa vĩnh viễn. Hãy suy nghĩ kĩ trước khi xóa!
          </span>
          <Button
            type="button"
            kind="button"
            className="px-10 py-3 rounded-lg mt-5"
          >
            XÓA TÀI KHOẢN
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountDeletePage;
