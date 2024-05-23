import React, { useState } from "react";
import Button from "@/components/button/Button";
import TitleContent from "@/components/titleContent/TitleContent";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CreateProductAdminPage = () => {
  const [content, setContent] = useState("");

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <TitleContent
          mainChildren={"Sản phẩm"}
          minorCirldren={"Home / Sản phẩm / Thêm sản phẩm"}
        ></TitleContent>
        <div className="my-5 bg-white p-5 rounded-lg">
          <h3 className="mb-5 text-[#914F00]">Thêm sản phẩm</h3>
          <div className="grid grid-cols-1 gap-5">
            <div className="">
              <span>Tên sản phẩm</span>
              <Input type="text" placeholder="" className="mt-2" />
            </div>
            <div className="">
              <span>Slug</span>
              <Input type="text" placeholder="" className="mt-2" />
            </div>
            <div className="">
              <span>Giá sản phẩm</span>
              <Input type="number" placeholder="" className="mt-2" />
            </div>
            <div className="flex gap-10">
              <Select>
                <SelectTrigger className="w-[300px]">
                  <SelectValue placeholder="Loại sản phẩm" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[300px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="picture">Hình ảnh</Label>
                <Input id="picture" type="file" className="w-full" />
              </div>
            </div>
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="content">Mô tả</Label>
                <div className="w-full rounded-md">
                  <ReactQuill
                    id="content"
                    value={content}
                    onChange={handleContentChange}
                    modules={modules}
                    theme="snow"
                  />
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
    </div>
  );
};

export default CreateProductAdminPage;
