import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import IconRoleUser from "@/components/icons/IconRoleUser";
import IconRoleAdmin from "@/components/icons/IconRoleAdmin";
import useToggleValue from "@/hooks/useToggleValue";
import IconEyeToggle from "@/components/icons/IconEyeToggle";
import { useDispatch } from "react-redux";

const AccountUpdateForm = ({ modalClose, userId }) => {
  const { toast } = useToast();
  const [userData, setUserData] = useState({});
  const [imgURL, setImgURL] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [newImageUploaded, setNewImageUploaded] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const dispatch = useDispatch();

  // const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8888/user/${userId}`
        );
        setUserData(response.data.Users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [userId]);

  const form = useForm({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      name: userData.name || "",
      email: userData.email || "",
      phone: userData.phone || "",
      password: "",
      confirmPassword: "",
      avatar: userData.avatar || "",
      address: userData.address || "",
      role: userData.role ? userData.role.toString() : "0",
    },
    values: {
      id: userData.id || "",
      name: userData.name || "",
      email: userData.email || "",
      phone: userData.phone || "",
      avatar: userData.avatar || "",
      address: userData.address || "",
      role: userData.role || "",
      active: userData.active || "",
      password:"",
      email_verified_at: userData.email_verified_at || "",
      accessToken: userData.accessToken || "",
      created_at: userData.created_at || "",
      updated_at: userData.updated_at || "",
      refreshToken: userData.refreshToken || "",
      remember_token: userData.remember_token || "",
    },
  });

  const onUpdate = async (values) => {
    console.log("onUpdate: ", values);
    try {
      await axios.put(`http://localhost:8888/user/${userId}`, {
        ...values,
        avatar: newImageUploaded
          ? `http://localhost:8888/image/get/${imgURL}`
          : values.avatar,
      });
      modalClose();
      toast({
        title: "Cập nhật tài khoản",
        description: "Cập nhật tài khoản thành công",
      });
      // Fetch the updated user data
      // window.location.reload();
    } catch (error) {
      toast({
        title: "Cập nhật tài khoản thất bại",
        description: `${error.message}`,
        variant: "destructive",
      });
    }
  };

  const onChooseImage = async (event) => {
    setNewImageUploaded(true);
    const file = event.target.files[0];
    if (file) {
      form.setValue("avatar", [file]);
      // setFile(URL.createObjectURL(file));
    }
    try {
      const response = await axios.post(
        `http://localhost:8888/image`,
        form.getValues("avatar"),
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data.id);
      setImgURL(response.data.id);
    } catch (error) {
      console.error("Image upload error:", error);
    }
  };

  // console.log("AVATAR: ", imgURL);
  console.log("User Data: ", userData);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    setPasswordMatch(value === password);
  };

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const {
    value: showConfirmPassword,
    handleToggleValue: handleToggleConfirmPassword,
  } = useToggleValue();

  if (!userData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <Form {...form}>
          <form
            className="my-5 bg-white p-5 rounded-lg"
            onSubmit={form.handleSubmit(onUpdate)}
          >
            <h3 className="mb-5 text-[#914F00]">Cập nhật tài khoản</h3>
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
                      <Input placeholder="Nhập email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Số điện thoại</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nhập số điện thoại"
                        type="number"
                        {...field}
                      />
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
                      <div className="relative">
                        <Input
                          placeholder="Nhập mật khẩu"
                          type={showPassword ? "text" : "password"}
                          onChange={(e) => {
                            field.onChange(e);
                            handlePasswordChange(e);
                          }}
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
                    <FormLabel>Nhập lại mật khẩu</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className={`relative ${
                            !passwordMatch ? "border-red-500" : ""
                          }`}
                          placeholder="Nhập lại mật khẩu"
                          type={showConfirmPassword ? "text" : "password"}
                          onChange={(e) => {
                            field.onChange(e);
                            handleConfirmPasswordChange(e);
                          }}
                          value={confirmPassword}
                          {...field}
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                          <IconEyeToggle
                            onClick={handleToggleConfirmPassword}
                            open={showConfirmPassword}
                            className="absolute right-3 top-0 cursor-pointer"
                          />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                    {!passwordMatch && (
                      <p className="text-red-500 text-sm mt-1">
                        Mật khẩu không khớp
                      </p>
                    )}
                  </FormItem>
                )}
              />
              <div className="flex flex-col justify-between space-y-2 ">
                <FormLabel htmlFor="avatar">Hình ảnh</FormLabel>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:text-sm file:font-medium"
                  type="file"
                  onChange={onChooseImage}
                  // accept=".jpg,.jpeg,.png,.webp"
                />
                {form.formState.errors.avatar && (
                  <div className="error">
                    {form.formState.errors.avatar.message}
                  </div>
                )}
              </div>
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
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Role</FormLabel>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
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
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center justify-center gap-4 text-white mt-5">
              <Button type="submit" className="bg-button" size="lg">
                Sửa
              </Button>
              <Button
                type="button"
                variant="default"
                className="bg-button"
                size="lg"
                onClick={modalClose}
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

export default AccountUpdateForm;
