import React from "react";
import TitleContent from "@/components/titleContent/TitleContent";
import { Input } from "@/components/ui/input";
import Button from "@/components/button/Button";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { productTypeSchema } from "@/components/constants/productTypeValidation";
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

const CreateProductTypePage = () => {
  const { toast } = useToast();
  const form = useForm({
    // resolver: zodResolver(productTypeSchema),
    defaultValues: {
      nameType: "",
      slug: "",
      order: "",
      anHien: "",
    },
  });

  const onSubmit = async (values) => {
    console.log(values);
    try {
      await axios.post(`http://localhost:8888/type`, values);
      toast({
        title: "Thêm loại sản phẩm thành công",
        description: "loại sản phẩm đã được tạo thành công!",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Tạo loại sản phẩm thất bại",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <TitleContent
          mainChildren={"Loại sản phẩm"}
          minorChildren={"Home / loại sản phẩm / Thêm loại sản phẩm"}
        />
        <Form {...form}>
          <form
            className="my-5 bg-white p-5 rounded-lg"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <h3 className="mb-5 text-[#914F00]">Thêm loại sản phẩm</h3>
            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="nameType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên loại sản phẩm</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nhập tên loại sản phẩm"
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
                    <FormLabel>Thứ tự loại sản phẩm</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nhập thứ tự loại sản phẩm"
                        {...field}
                        type="number"
                      />
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

export default CreateProductTypePage;
