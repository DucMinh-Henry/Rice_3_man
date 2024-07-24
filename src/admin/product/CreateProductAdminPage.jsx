import React, { useEffect, useState } from "react";
import Button from "@/components/button/Button";
import TitleContent from "@/components/titleContent/TitleContent";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/components/constants/ProductValidation";
import SelectItemTypeProduct from "@/components/selectItem/SelectItemTypeProduct";
import SelectItemBrand from "@/components/selectItem/SelectItemBrand";

const CreateProductAdminPage = () => {
  const { toast } = useToast();
  const [imgURL, setImgURL] = useState("");

  // console.log(imgId);
  const form = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      nameProduct: "",
      slug: "",
      price: "",
      urlImage: undefined,
      describe: "",
      postingDate: "",
      anHien: "",
      noiBat: "",
      ProductType_idType: "",
      Brand_idBrand: "",
    },
  });

  // const fileRef = form.register("file");

  const onSubmit = async (values) => {
    console.log(values);
    try {
      await axios.post(`http://localhost:8888/product`, {
        ...values,
        urlImage: `http://localhost:8888/image/get/${imgURL}`,
      });
      form.reset();
      toast({
        title: "Thêm sản phẩm thành công",
        description: "Sản phẩm đã được tạo thành công!",
      });
    } catch (error) {
      toast({
        title: "Tạo sản phẩm thất bại",
        variant: "destructive",
      });
    }
  };

  const onChooseImage = async (event) => {
    const file = event.target.files[0];
    if (file) {
      form.setValue("urlImage", [file]);
    }
    try {
      const response = await axios.post(
        `http://localhost:8888/image`,
        form.getValues("urlImage"),
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setImgURL(response.data.id);
    } catch (error) {
      console.error("Image upload error:", error);
    }
  };

  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <TitleContent
          mainChildren={"Sản phẩm"}
          minorChildren={"Home / Sản phẩm / Thêm sản phẩm"}
        />
        <Form {...form}>
          <form
            className="my-5 bg-white p-5 rounded-lg"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <h3 className="mb-5 text-[#914F00]">Thêm sản phẩm</h3>
            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="nameProduct"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên sản phẩm</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập tên sản phẩm" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập slug" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Giá sản phẩm</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nhập giá sản phẩm"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col justify-between space-y-2 ">
                <FormLabel htmlFor="urlImage">Hình ảnh</FormLabel>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:text-sm file:font-medium"
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp"
                  onChange={onChooseImage}
                />
                {form.formState.errors.urlImage && (
                  <div className="error text-sm text-primary">
                    {form.formState.errors.urlImage.message}
                  </div>
                )}
              </div>
              <FormField
                control={form.control}
                name="postingDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ngày đăng</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="anHien"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Trạng thái hiển thị</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn trạng thái hiển thị" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Hiển thị</SelectItem>
                          <SelectItem value="0">Ẩn</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="noiBat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Trạng thái nổi bật</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn trạng thái nổi bật" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Nổi bật</SelectItem>
                          <SelectItem value="0">Không nổi bật</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ProductType_idType"
                render={({ field }) => (
                  <SelectItemTypeProduct
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  ></SelectItemTypeProduct>
                )}
              />
              <FormField
                control={form.control}
                name="Brand_idBrand"
                render={({ field }) => (
                  <SelectItemBrand
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  ></SelectItemBrand>
                )}
              />
              <FormField
                control={form.control}
                name="describe"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mô tả</FormLabel>
                    <FormControl>
                      <CKEditor
                        editor={ClassicEditor}
                        data={field.value}
                        onChange={(event, editor) => {
                          field.onChange(editor.getData());
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
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
                href="/admin/product"
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

export default CreateProductAdminPage;
