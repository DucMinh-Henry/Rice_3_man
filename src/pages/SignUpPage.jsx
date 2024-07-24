import useToggleValue from "@/hooks/useToggleValue";
import React, { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import LayoutAuthentication from "@/layouts/LayoutAuthentication";
import { Link, useNavigate } from "react-router-dom";
import IconEyeToggle from "@/components/icons/IconEyeToggle";
import { authRegister } from "@/store/auth/auth-slice";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const {
    value: showConfirmPassword,
    handleToggleValue: handleToggleConfirmPassword,
  } = useToggleValue();

  const handleSignUp = async (values) => {
    try {
      await dispatch(authRegister({ ...values, permissions: [] }));
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user && user.id) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <LayoutAuthentication heading="Đăng ký">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Bạn đã có tài khoản rồi à?{" "}
        <Link to="/login" className="font-medium underline text-primary">
          Đăng nhập
        </Link>
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSignUp)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Họ và tên *</FormLabel>
                <FormControl>
                  <Input placeholder="Trần Văn Gạo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input placeholder="rice4man@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu *</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Tạo mật khẩu"
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                      <IconEyeToggle
                        onClick={handleTogglePassword}
                        open={showPassword}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nhập lại mật khẩu *</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Nhập lại mật khẩu"
                      type={showConfirmPassword ? "text" : "password"}
                      {...field}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                      <IconEyeToggle
                        onClick={handleToggleConfirmPassword}
                        open={showConfirmPassword}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-center w-full mt-10">
            <Button
              type="submit"
              kind="button"
              className="flex text-xl font-medium"
            >
              <span className="px-3 py-1 border border-solid border-white hover:border-[#007033]">
                Đăng ký
              </span>
            </Button>
          </div>
        </form>
      </Form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
