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
import { Checkbox } from "@/components/ui/checkbox";
import { brandSchema } from "@/components/constants/BrandValidation";

const BrandUpdateForm = ({ modalClose, brandId }) => {
  const { toast } = useToast();
  const [brandData, setBrandData] = useState({});
  const [imgURL, setImgURL] = useState("");
  const [newImageUploaded, setNewImageUploaded] = useState(false);

  // console.log(brandData);
  useEffect(() => {
    try {
      const fetchBrand = async () => {
        const response = await axios.get(
          `http://localhost:8888/brand/${brandId}`
        );
        setBrandData(response.data.Brands);
      };
      fetchBrand();
    } catch (error) {
      console.log(error);
    }
  }, [brandId]);

  const form = useForm({
    // resolver: zodResolver(brandSchema),
    defaultValues: {
      nameBrand: brandData.nameBrand || "",
      slug: brandData.slug || "",
      urlImageBrand: brandData.urlImageBrand || "",
      order: brandData.order || "",
      anHien: brandData.anHien || "",
    },
    values: {
      nameBrand: brandData.nameBrand || "",
      slug: brandData.slug || "",
      urlImageBrand: brandData.urlImageBrand || "",
      order: brandData.order || "",
      anHien: brandData.anHien || "",
    },
  });

  const onUpdate = async (values) => {
    // console.log("onUpdate: ", values);
    try {
      await axios.put(`http://localhost:8888/brand/${brandId}`, {
        ...values,
        urlImageBrand: newImageUploaded
          ? `http://localhost:8888/image/get/${imgURL}`
          : values.urlImageBrand,
      });
      modalClose();
      toast({
        title: "Cập nhật thương hiệu",
        description: "Cập nhật thương hiệu thành công",
      });
      // Fetch the updated brand data
      // window.location.reload();
    } catch (error) {
      toast({
        title: "Cập nhật thương hiệu thất bại",
        description: `${error.message}`,
        variant: "destructive",
      });
    }
  };
  console.log(brandData);

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

  if (!brandData) {
    return <div>Loading...</div>;
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onUpdate)} className="space-y-4">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 p-5">
          <FormField
            control={form.control}
            name="nameBrand"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên thương hiệu</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập tên thương hiệu" {...field} />
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
            <FormLabel htmlFor="urlImageBrand">Hình ảnh</FormLabel>
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
            name="order"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Số thứ tự</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập số thứ tự" {...field} />
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

export default BrandUpdateForm;
