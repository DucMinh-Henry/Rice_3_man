import React from "react";
import TitleContent from "@/components/titleContent/TitleContent";
import { Input } from "@/components/ui/input";
import Button from "@/components/button/Button";
import { Label } from "@radix-ui/react-label";

const CreateBrandPage = () => {
  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <TitleContent
          mainChildren={"Thêm thương hiệu sản phẩm"}
          minorCirldren={
            "Home / Thương hiệu sản phẩm / Thêm thương hiệu sản phẩm"
          }
        ></TitleContent>
        <div className="my-5 bg-white p-5 rounded-lg">
          <h3 className="mb-5 text-[#914F00]">Thêm loại sản phẩm</h3>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name">Tên loại sản phẩm</Label>
              <Input type="text" placeholder="" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="stt">Thứ tự</Label>
              <Input type="text" placeholder="" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="slug">Slug</Label>
              <Input type="text" placeholder="" className="mt-2" />
            </div>
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="picture">Hình ảnh</Label>
                <Input id="picture" type="file" className="w-full" />
              </div>
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

export default CreateBrandPage;
