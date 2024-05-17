import Button from "@/components/button/Button";
import FormGroup from "@/components/common/FormGroup";
import Input from "@/components/input/input";
import { Label } from "@/components/label";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AccountInfoPage = ({ user }) => {
  const { control } = useForm();
  const [avatar, setAvatar] = useState(user ? user.avatar : "");

  // Function to handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // You may want to perform validation on the file here
    // For now, let's assume it's a valid image file
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
  };
  return (
    <div className="page-container flex justify-center items-center mb-10">
      <div className="w-[80%]">
        <div className="flex text-2xl text-center mb-10">
          <Link
            className="w-full py-2 px-5 border border-b-transparent rounded-t-md"
            to={"/infoAccount"}
          >
            <span>Thông tin tài khoản</span>
          </Link>
          <Link
            className="w-full py-2 px-5 mx-auto border-b rounded-t-md"
            to={"/updateAccount"}
          >
            <span className="opacity-50">Cập nhật mật khẩu</span>
          </Link>
          <Link
            className="w-full py-2 px-5 mx-auto border-b rounded-t-md"
            to={"/deleteAccount"}
          >
            <span className="opacity-50">Xóa tài khoản</span>
          </Link>
        </div>
        <div className="w-[600px] p-5 mx-auto">
          <span className="text-text3">
            Cập nhật họ tên, số điện thoại, Email, địa chỉ của bạn
          </span>
          <FormGroup>
            <Label htmlFor="email">Hình ảnh</Label>
            <img
              className="p-3"
              src="https://th.bing.com/th/id/OIP.MJ9rxCwbF8JAgAi1giPn5gHaHa?rs=1&pid=ImgDetMain"
              alt="User avatar"
              width="150px"
            />
            <Input
              control={control}
              type="file"
              name="file"
              accept="image/*"
              onChange={handleFileChange}
              autoFocus
              autoComplete="avatar"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Họ tên</Label>
            <Input type="text" control={control} name="name"></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phoneNumber">Số điện thoại</Label>
            <Input type="number" control={control} name="phoneNumber"></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input control={control} type="email" name="email"></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="address">Địa chỉ</Label>
            <Input control={control} type="text" name="address"></Input>
          </FormGroup>
          <Button
            type="button"
            kind="button"
            className="px-10 py-3 rounded-lg m-auto"
          >
            Lưu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfoPage;
