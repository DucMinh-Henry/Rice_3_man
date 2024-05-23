import useToggleValue from "@/hooks/useToggleValue";
import FormGroup from "@/components/common/FormGroup";
import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import IconEyeToggle from "@/components/icons/IconEyeToggle";
import Button from "@/components/button/Button";

const schema = yup.object({
  password: yup
    .string()
    .required("Trường này là bắt buộc")
    .min(8, "Mật khẩu phải hơn 8 ký tự"),
  confirmPassword: yup
    .string()
    .required("Trường này là bắt buộc")
    .oneOf([yup.ref("password"), null], "Mật khẩu không khớp"),
});

const AccountUpdateAdmin = () => {
  // handle confirm password
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    setPasswordMatch(value === password);
  };
  const handleSignUp = async (values) => {
    try {
      dispatch(authRegister({ ...values, permissions: [] }));
      reset({});
    } catch (error) {
      console.log(error);
    }
  };

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
  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="bg-white rounded-lg">
        <div className="flex text-2xl text-center mb-10">
          <Link
            className="w-full py-2 px-5 border-b rounded-t-md"
            to={"/admin/profile"}
          >
            <span className="opacity-50">Thông tin tài khoản</span>
          </Link>
          <Link
            className="w-full py-2 px-5 mx-auto border border-b-transparent rounded-t-md"
            to={"/admin/profile-update"}
          >
            <span>Cập nhật mật khẩu</span>
          </Link>
          <Link
            className="w-full py-2 px-5 mx-auto border-b rounded-t-md"
            to={"/admin/profile-delete"}
          >
            <span className="opacity-50">Xóa tài khoản</span>
          </Link>
        </div>
        <div className="w-[600px] p-5 mx-auto">
          <span className="text-text3">
            Chúng tôi không bao giờ yêu cấu cung cấp mật khẩu. Vui lòng không
            chia sẻ với người khác.
          </span>
          <FormGroup>
            <Label htmlFor="password">Mật khẩu hiện tại *</Label>
            <Input
              control={control}
              name="password"
              type={`${showCurrentPassword ? "text" : "password"}`}
              placeholder="mật khẩu"
              error={errors.password?.message}
            >
              <IconEyeToggle
                open={showCurrentPassword}
                onClick={handleToggleCurrentPassword}
              ></IconEyeToggle>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="newPassword">Mật khẩu mới *</Label>
            <Input
              control={control}
              name="newPassword"
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Tạo mật khẩu"
              value={password}
              onChange={handlePasswordChange}
              error={errors.password?.message}
            >
              <IconEyeToggle
                open={showPassword}
                onClick={handleTogglePassword}
              ></IconEyeToggle>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="connfirmPassword">Nhập lại mật khẩu *</Label>
            <Input
              control={control}
              name="confirmPassword"
              type={`${showConfirmPassword ? "text" : "password"}`}
              placeholder="Nhập lại mật khẩu"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              error={
                !passwordMatch
                  ? "Mật khẩu không khớp"
                  : errors.confirmPassword?.message
              }
            >
              <IconEyeToggle
                open={showConfirmPassword}
                onClick={handleToggleConfirmPassword}
              ></IconEyeToggle>
            </Input>
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

export default AccountUpdateAdmin;
