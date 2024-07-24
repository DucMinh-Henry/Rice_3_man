import React, { useState } from "react";
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
import { postsSchema } from "@/components/constants/postsValidation";

const CreatePostPage = () => {
  const { toast } = useToast();
  const [imgURL, setImgURL] = useState("");

  const form = useForm({
    resolver: zodResolver(postsSchema),
    defaultValues: {
      title: "",
      slug: "",
      thumbNail: undefined,
      content: "",
      postingDate: "",
      anHien: "",
      noiBat: "",
      author: "",
    },
  });

  const onSubmit = async (values) => {
    console.log(values);
    try {
      await axios.post(`http://localhost:8888/post/`, {
        ...values,
        thumbNail: `http://localhost:8888/image/get/${imgURL}`,
      });
      form.reset();
      toast({
        title: "Thêm bài viết thành công",
        description: "bài viết đã được tạo thành công!",
      });
    } catch (error) {
      toast({
        title: "Tạo bài viết thất bại",
        variant: "destructive",
      });
    }
  };

  const onChooseImage = async (event) => {
    const file = event.target.files[0];
    if (file) {
      form.setValue("thumbNail", [file]);
    }
    try {
      const response = await axios.post(
        `http://localhost:8888/image`,
        form.getValues("thumbNail"),
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
          mainChildren={"bài viết"}
          minorChildren={"Home / bài viết / Thêm bài viết"}
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
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên sản phẩm</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập tiêu đề bài viết" {...field} />
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
              <div className="flex flex-col justify-between space-y-2 ">
                <FormLabel htmlFor="thumbNail">Hình ảnh</FormLabel>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:text-sm file:font-medium"
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp"
                  onChange={onChooseImage}
                />
                {form.formState.errors.thumbNail && (
                  <div className="error text-sm text-primary">
                    {form.formState.errors.thumbNail.message}
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
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tác giả</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nhập tác giả"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nội dung</FormLabel>
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

export default CreatePostPage;
