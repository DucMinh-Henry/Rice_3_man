import React, { useState } from "react";
import TitleContent from "@/components/titleContent/TitleContent";
import { Input } from "@/components/ui/input";
import Button from "@/components/button/Button";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import axios from "@/api/axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useToggleValue from "@/hooks/useToggleValue";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import IconRoleUser from "@/components/icons/IconRoleUser";
import IconRoleAdmin from "@/components/icons/IconRoleAdmin";

const CreateAccountPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const { toast } = useToast();
  const form = useForm({
    // resolver: zodResolver(productTypeSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      avatar: "",
      role: 0,
    },
  });

  const onSubmit = async (values) => {
    console.log(values);
    try {
      await axios.post(`http://localhost:8888/user`, values);
      form.reset();
      toast({
        title: "Thêm tài khoản thành công",
        description: "tài khoản đã được tạo thành công!",
      });
    } catch (error) {
      toast({
        title: "Tạo tài khoản thất bại",
        variant: "destructive",
      });
    }
  };

  // confirm password
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
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <TitleContent
          mainChildren={"Tài khoản"}
          minorCirldren={"Home / Tài khoản / Thêm tài khoản"}
        ></TitleContent>
        <Form {...form}>
          <form
            className="my-5 bg-white p-5 rounded-lg"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <h3 className="mb-5 text-[#914F00]">Thêm tài khoản</h3>
            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập tên" {...field} />
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
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập email" {...field} type="email" />
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
                    <FormLabel>Mật khẩu</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nhập mật khẩu"
                        {...field}
                        type="password"
                      />
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
                    <FormLabel>Nhập lại mật khẩu</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nhập lại mật khẩu"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="avatar"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hình ảnh</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Địa chỉ</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập địa chỉ" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="role"
                control={form.control}
                render={({ field }) => (
                  <RadioGroup
                    value={field.value.toString()}
                    onValueChange={(value) => field.onChange(parseInt(value))}
                    className="flex gap-5 mt-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="0" id="user" />
                      <IconRoleUser />
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="admin" />
                      <IconRoleAdmin />
                    </div>
                  </RadioGroup>
                )}
              />
            </div>
            <div className="flex justify-center items-center gap-5 m-10">
              <Button
                type="submit"
                className="px-3 py-2 rounded-md bg-button text-white"
              >
                Thêm
              </Button>
              <Button
                type="button"
                className="px-3 py-2 rounded-md bg-button text-white"
                href="/admin/product-type"
              >
                Hủy
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateAccountPage;
