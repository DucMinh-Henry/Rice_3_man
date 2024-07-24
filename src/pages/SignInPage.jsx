import useToggleValue from "@/hooks/useToggleValue";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useDispatch, useSelector } from "react-redux";
import LayoutAuthentication from "@/layouts/LayoutAuthentication";
import { Link, useNavigate } from "react-router-dom";
import IconEyeToggle from "@/components/icons/IconEyeToggle";
import { authLogin } from "@/store/auth/auth-slice";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidation } from "@/components/constants/loginValidation";

const SignInPage = ({ type = "user" }) => {
  const { user } = useSelector((state) => state.auth);

  const form = useForm({
    resolver: zodResolver(loginValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();

  const dispatch = useDispatch();

  const handleSignIn = (values) => {
    dispatch(authLogin(values));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.id) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <LayoutAuthentication heading="Đăng nhập">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Bạn chưa có tài khoản?{" "}
        <Link to="/register" className="font-medium underline text-primary">
          Đăng ký
        </Link>
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSignIn)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} />
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
                      placeholder="Nhập mật khẩu"
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
          <div className="flex items-center justify-center w-full mt-10">
            <Button
              type="submit"
              kind="button"
              className="flex text-xl font-medium"
            >
              <span className="px-3 py-1 border border-solid border-white hover:border-[#007033]">
                Đăng nhập
              </span>
            </Button>
          </div>
        </form>
      </Form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
