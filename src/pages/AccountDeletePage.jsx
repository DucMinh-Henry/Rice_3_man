import Button from "@/components/button/Button";
import React from "react";
import { Link } from "react-router-dom";

const AccountDeletePage = () => {
  return (
    <div className="page-container flex justify-center items-center mb-10">
      <div className="w-[80%] bg-white">
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
            to={"/admin/profile-delete"}
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
            className="mt-10 flex items-center justify-center text-lg font-semibold p-1 bg-[#053024] hover:bg-[#fdc97d] hover:text-[#053024]"
          >
            <span className="px-1 border border-solid border-white hover:border-[#053024]">
              XÓA TÀI KHOẢN
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountDeletePage;
