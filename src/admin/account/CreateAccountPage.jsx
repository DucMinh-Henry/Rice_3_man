import React from "react";
import TitleContent from "@/components/titleContent/TitleContent";
import { Input } from "@/components/ui/input";
import Button from "@/components/button/Button";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import IconRoleAdmin from "@/components/icons/IconRoleAdmin";
import IconRoleUser from "@/components/icons/IconRoleUser";

const CreateAccountPage = () => {
  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <TitleContent
          mainChildren={"Tài khoản"}
          minorCirldren={"Home / Tài khoản / Thêm tài khoản"}
        ></TitleContent>
        <div className="my-5 bg-white p-5 rounded-lg">
          <h3 className="mb-5 text-[#914F00]">Tạo tài khoản</h3>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name">Tên</Label>
              <Input type="text" placeholder="" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="name">Email</Label>
              <Input type="text" placeholder="" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="name">Số điện thoại</Label>
              <Input type="text" placeholder="" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="stt">Mật khẩu</Label>
              <Input type="text" placeholder="" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="slug">Xác nhận mật khẩu</Label>
              <Input type="text" placeholder="" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="slug">Địa chỉ</Label>
              <Input type="text" placeholder="" className="mt-2" />
            </div>
            <div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Hình ảnh</Label>
                <Input id="picture" type="file" className="w-full" />
              </div>
            </div>
            <div>
              <Label htmlFor="slug">Vai trò</Label>
              <RadioGroup defaultValue="" className="flex gap-5 mt-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1" id="r1" />
                  <IconRoleAdmin></IconRoleAdmin>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2" id="r2" />
                  <IconRoleUser></IconRoleUser>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 m-10">
            <Button kind={"button"} className="px-3 py-2 rounded-md">
              Thêm
            </Button>
            <Button kind={"button"} className="px-3 py-2 rounded-md">
              Hủy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
