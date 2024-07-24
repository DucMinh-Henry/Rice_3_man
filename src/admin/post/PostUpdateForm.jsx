import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useMemo, useState } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";

const PostUpdateForm = ({ modalClose, postId }) => {
  const { toast } = useToast();
  const [postData, setPostData] = useState({});
  const [imgURL, setImgURL] = useState("");

  // console.log(postData);

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const response = await axios.get(
          `http://localhost:8888/post/${postId}`
        );
        setPostData(response.data);
      };
      fetchPost();
    } catch (error) {
      console.log(error);
    }
  }, [postId]);

  const form = useForm({
    // resolver: zodResolver(accountSchema),
    defaultValues: {
      title: postData.title,
      slug: postData.slug,
      thumbNail: undefined,
      content: postData.content,
      postingDate: postData.postingDate,
      anHien: postData.anHien,
      noiBat: postData.noiBat,
      author: postData.author,
    },
    values: postData.Post,
  });

  const onUpdate = async (values) => {
    console.log("onUpdate: ", values);
    try {
      await axios.put(`http://localhost:8888/post/${postId}`, {
        ...values,
        thumbNail: `http://localhost:8888/image/get/${imgURL}`,
      });
      modalClose();
      toast({
        title: "Cập nhật bài viết",
        description: "Cập nhật bài viết thành công",
      });
      // Fetch the updated product data
      window.location.reload();
    } catch (error) {
      toast({
        title: "Cập nhật bài viết thất bại",
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

  // console.log(imgURL);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onUpdate)} className="space-y-4">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 p-5">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên bài viết</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập tên bài viết" {...field} />
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
                <FormLabel>Ngày cập nhật</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nhập ngày cập nhật"
                    {...field}
                    type="date"
                  />
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
                  <Input placeholder="Nhập tên tác giả" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-5">
            <FormField
              control={form.control}
              name="anHien"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        field.onChange(checked ? 1 : 0);
                      }}
                      className="rounded-full"
                    />
                    <label className="ml-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Hiển thị
                    </label>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="noiBat"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        field.onChange(checked ? 1 : 0);
                      }}
                      className="rounded-full"
                    />
                    <label className="ml-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Nổi bật
                    </label>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 text-white">
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
  );
};

export default PostUpdateForm;
