import useToggleValue from "@/hooks/useToggleValue";
import FormGroup from "@/components/common/FormGroup";
import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import LayoutAuthentication from "@/layouts/LayoutAuthentication";
import { Link } from "react-router-dom";
import IconEyeToggle from "@/components/icons/IconEyeToggle";
import { authLogin } from "@/store/auth/auth-slice";
import Button from "@/components/button/Button";

const schema = yup.object({
  email: yup.string().email("").required("Trường này là bắt buộc"),
  password: yup
    .string()
    .required("Trường này là bắt buộc")
    .min(8, "Mật khẩu phải hơn 8 ký tự"),
});
const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const dispatch = useDispatch();
  const handleSignIn = (values) => {
    dispatch(authLogin(values));
  };
  return (
    <LayoutAuthentication heading="Đăng nhập">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Bạn chưa có tài khoản?{" "}
        <Link to="/register" className="font-medium underline text-primary">
          Đăng ký
        </Link>
      </p>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Mật khẩu *</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Enter Password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <Button
          type="submit"
          kind="button"
          className="w-full py-3 rounded-md text-xl font-medium"
        >
          Đăng nhập
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
