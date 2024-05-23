import React from "react";
import TitleContent from "@/components/titleContent/TitleContent";
import { Input } from "@/components/ui/input";
import Button from "@/components/button/Button";

const CreateProductTypePage = () => {
  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <TitleContent
          mainChildren={"Loại sản phẩm"}
          minorCirldren={"Home / Loại sản phẩm / Thêm loại sản phẩm"}
        ></TitleContent>
        <div className="my-5 bg-white p-5 rounded-lg">
          <h3 className="mb-5 text-[#914F00]">Thêm loại sản phẩm</h3>
          <div className="grid grid-cols-2 gap-5">
            <div className="">
              <span>Tên loại sản phẩm</span>
              <Input type="text" placeholder="" className="mt-2" />
            </div>
            <div className="">
              <span>Thứ tự</span>
              <Input type="text" placeholder="" className="mt-2" />
            </div>
            <div className="">
              <span>Slug</span>
              <Input type="text" placeholder="" className="mt-2" />
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

export default CreateProductTypePage;
