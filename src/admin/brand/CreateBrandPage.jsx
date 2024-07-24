import React, { useEffect, useState } from "react";
import TitleContent from "@/components/titleContent/TitleContent";
import { Input } from "@/components/ui/input";
import Button from "@/components/button/Button";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { brandSchema } from "@/components/constants/BrandValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "@/api/axios";
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

const CreateBrandPage = () => {
  const { toast } = useToast();
  const [imgURL, setImgURL] = useState("");

  const form = useForm({
    resolver: zodResolver(brandSchema),
    defaultValues: {
      nameBrand: "",
      slug: "",
      order: "",
      urlImageBrand: undefined,
      anHien: "",
    },
  });

  const onSubmit = async (values) => {
    console.log(values);
    try {
      await axios.post(`http://localhost:8888/brand`, {
        ...values,
        urlImageBrand: `http://localhost:8888/image/get/${imgURL}`,
      });
      form.reset();
      toast({
        title: "Thêm thương hiệu thành công",
        description: "thương hiệu đã được tạo thành công!",
      });
    } catch (error) {
      toast({
        title: "Tạo thương hiệu thất bại",
        description: `${error.message}`,
        variant: "destructive",
      });
    }
  };

  const onChooseImage = async (event) => {
    const file = event.target.files[0];
    if (file) {
      form.setValue("urlImageBrand", [file]);
    }
    try {
      const response = await axios.post(
        `http://localhost:8888/image`,
        form.getValues("urlImageBrand"),
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
          mainChildren={"thương hiệu"}
          minorChildren={"Home / thương hiệu / Thêm thương hiệu"}
        />
        <Form {...form}>
          <form
            className="my-5 bg-white p-5 rounded-lg"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <h3 className="mb-5 text-[#914F00]">Thêm thương hiệu</h3>
            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="nameBrand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên thương hiệu</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nhập tên thương hiệu"
                        {...field}
                        type="text"
                      />
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
                name="order"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Thứ tự thương hiệu</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nhập thứ tự thương hiệu"
                        {...field}
                        type="number"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col justify-between space-y-2 ">
                <FormLabel htmlFor="urlImageBrand">Image</FormLabel>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:text-sm file:font-medium"
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp"
                  onChange={onChooseImage}
                />
                {form.formState.errors.urlImageBrand && (
                  <div className="error">
                    {form.formState.errors.urlImageBrand.message}
                  </div>
                )}
              </div>
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
                href="/admin/brand"
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

export default CreateBrandPage;
