import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useToggleValue from "@/hooks/useToggleValue";
import FormGroup from "@/components/common/FormGroup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import IconEyeToggle from "@/components/icons/IconEyeToggle";
// import { authUpdatePassword } from "@/store/auth/auth-slice";

const schema = yup.object({
  currentPassword: yup.string().required("Trường này là bắt buộc"),
  newPassword: yup
    .string()
    .required("Trường này là bắt buộc")
    .min(8, "Mật khẩu phải hơn 8 ký tự"),
  confirmPassword: yup
    .string()
    .required("Trường này là bắt buộc")
    .oneOf([yup.ref("newPassword"), null], "Mật khẩu không khớp"),
});

const AccountUpdatePage = () => {
  const { user } = useSelector((state) => state.auth);
  const accessToken = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const {
    value: showCurrentPassword,
    handleToggleValue: handleToggleCurrentPassword,
  } = useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const {
    value: showConfirmPassword,
    handleToggleValue: handleToggleConfirmPassword,
  } = useToggleValue();

  // const onSubmit = (data) => {
  //   const { currentPassword, newPassword } = data;
  //   dispatch(
  //     authUpdatePassword({
  //       currentPassword,
  //       newPassword,
  //       idUser: user.id,
  //       token: accessToken,
  //     })
  //   );
  // };

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
            className="w-full py-2 px-5 mx-auto border border-b-transparent rounded-t-md"
            to={"/updateAccount"}
          >
            <span>Cập nhật mật khẩu</span>
          </Link>
          <Link
            className="w-full py-2 px-5 mx-auto border-b rounded-t-md"
            to={"/deleteAccount"}
          >
            <span className="opacity-50">Xóa tài khoản</span>
          </Link>
        </div>
        <form
          className="w-[600px] p-5 mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <span className="text-text3">
            Chúng tôi không bao giờ yêu cầu cung cấp mật khẩu. Vui lòng không
            chia sẻ với người khác.
          </span>
          <FormGroup>
            <Label htmlFor="currentPassword">Mật khẩu hiện tại *</Label>
            <div className="relative">
              <Input
                control={control}
                name="currentPassword"
                type={showCurrentPassword ? "text" : "password"}
                placeholder="Mật khẩu hiện tại"
              ></Input>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                <IconEyeToggle
                  onClick={handleTogglePassword}
                  open={showPassword}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                />
              </div>
            </div>
            {errors.currentPassword && <p>{errors.currentPassword.message}</p>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="newPassword">Mật khẩu mới *</Label>
            <div className="relative">
              <Input
                control={control}
                name="newPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu mới"
              ></Input>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                <IconEyeToggle
                  onClick={handleTogglePassword}
                  open={showPassword}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                />
              </div>
            </div>
            {errors.newPassword && <p>{errors.newPassword.message}</p>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirmPassword">Nhập lại mật khẩu *</Label>
            <div className="relative">
              <Input
                control={control}
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Nhập lại mật khẩu"
              ></Input>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                <IconEyeToggle
                  onClick={handleTogglePassword}
                  open={showPassword}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                />
              </div>
              {errors.confirmPassword && (
                <p>{errors.confirmPassword.message}</p>
              )}
            </div>
          </FormGroup>
          <div className="flex items-center justify-center gap-3 w-full">
            <Button
              type="submit"
              kind="button"
              className="flex items-center justify-center text-lg font-semibold"
            >
              <span className="px-10 py-1 border border-solid border-white hover:border-[#053024]">
                Lưu
              </span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountUpdatePage;
