import useToggleValue from "@/hooks/useToggleValue";
import FormGroup from "@/components/common/FormGroup";
import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import LayoutAuthentication from "@/layouts/LayoutAuthentication";
import { Link } from "react-router-dom";
import IconEyeToggle from "@/components/icons/IconEyeToggle";
import { authRegister } from "@/store/auth/auth-slice";
import Button from "@/components/button/Button";

const schema = yup.object({
  name: yup.string().required("Trường này là bắt buộc"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Trường này là bắt buộc"),
  password: yup
    .string()
    .required("Trường này là bắt buộc")
    .min(8, "Mật khẩu phải hơn 8 ký tự"),
  confirmPassword: yup
    .string()
    .required("Trường này là bắt buộc")
    .oneOf([yup.ref("password"), null], "Mật khẩu không khớp"),
});

const SignUpPage = () => {
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
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const {
    value: showConfirmPassword,
    handleToggleValue: handleToggleConfirmPassword,
  } = useToggleValue();
  return (
    <LayoutAuthentication heading="Đăng ký">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Bạn đã có tài khoản rồi à?{" "}
        <Link to="/login" className="font-medium underline text-primary">
          Đăng nhập
        </Link>
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Họ và tên *</Label>
          <Input
            control={control}
            name="name"
            placeholder="Trần Văn Gạo"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="rice4man@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Mật khẩu *</Label>
          <Input
            control={control}
            name="password"
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
          type="submit"
          kind="button"
          className="w-full py-3 rounded-md text-xl font-medium"
        >
          Đăng ký
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
