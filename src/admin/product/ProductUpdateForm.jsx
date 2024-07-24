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
import { productUpdateSchema } from "@/components/constants/ProductUpdateValidation";

const ProductUpdateForm = ({ modalClose, productId }) => {
  const { toast } = useToast();
  const [productData, setProductData] = useState({});
  const [imgURL, setImgURL] = useState("");
  const [newImageUploaded, setNewImageUploaded] = useState(false);

  console.log(productData);

  useEffect(() => {
    try {
      const fetchProduct = async () => {
        const response = await axios.get(
          `http://localhost:8888/product/id/${productId}`
        );
        setProductData(response.data.ProductID);
      };
      fetchProduct();
    } catch (error) {
      console.log(error);
    }
  }, [productId]);

  const form = useForm({
    // resolver: zodResolver(productUpdateSchema),
    defaultValues: {
      nameProduct: productData.nameProduct || "",
      ProductType_idType: productData.ProductType_idType || "",
      price: productData.price || "",
      urlImage:
        productData.urlImage !== "http://localhost:8888/image/get/"
          ? productData.urlImage
          : "",
      postingDate: productData.postingDate || "",
      anHien: productData.anHien || "",
      noiBat: productData.noiBat || "",
    },
    values: {
      nameProduct: productData.nameProduct || "",
      ProductType_idType: productData.ProductType_idType || "",
      price: productData.price || "",
      urlImage: productData.urlImage || "",
      postingDate: productData.postingDate || "",
      anHien: productData.anHien || "",
      noiBat: productData.noiBat || "",
    },
  });

  const onUpdate = async (values) => {
    console.log("onUpdate: ", values);
    try {
      await axios.put(`http://localhost:8888/product/id/${productId}`, {
        ...values,
        urlImage: newImageUploaded
          ? `http://localhost:8888/image/get/${imgURL}`
          : values.urlImage,
      });
      modalClose();
      toast({
        title: "Cập nhật sản phẩm",
        description: "Cập nhật sản phẩm thành công",
      });
      console.log("onUpdate: ", values);
      // Fetch the updated product data
      window.location.reload();
    } catch (error) {
      toast({
        title: "Cập nhật sản phẩm thất bại",
        variant: "destructive",
      });
    }
  };
  // console.log(imgURL);

  const onChooseImage = async (event) => {
    setNewImageUploaded(true);
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

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onUpdate)} className="space-y-4">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 p-5">
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
            name="ProductType_idType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Loại sản phẩm</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập loại sản phẩm" {...field} />
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
                  <Input placeholder="Nhập giá sản phẩm" {...field} />
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

export default ProductUpdateForm;
