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
import { productTypeUpdateSchema } from "@/components/constants/productTypeUpdateValidate";

const ProductTypeUpdateform = ({ modalClose, productTypeId }) => {
  const { toast } = useToast();
  const [productTypeData, setProductTypeData] = useState({});

  // console.log(productTypeData);
  useEffect(() => {
    try {
      const fetchproductType = async () => {
        const response = await axios.get(
          `http://localhost:8888/type/${productTypeId}`
        );
        setProductTypeData(response.data);
      };
      fetchproductType();
    } catch (error) {
      console.log(error);
    }
  }, [productTypeId]);

  const form = useForm({
    // resolver: zodResolver(productTypeUpdateSchema),
    defaultValues: {
      nameType: productTypeData.nameType,
      slug: productTypeData.slug,
      order: productTypeData.order,
      anHien: productTypeData.anHien,
    },
    values: productTypeData.Type,
  });

  const onUpdate = async (values) => {
    console.log("onUpdate: ", values);
    try {
      await axios.put(`http://localhost:8888/type/${productTypeId}`, values);
      modalClose();
      toast({
        title: "Cập nhật loại sản phẩm",
        description: "Cập nhật loại sản phẩm thành công",
      });
      // Fetch the updated brand data
      window.location.reload();
    } catch (error) {
      toast({
        title: "Cập nhật loại sản phẩm thất bại",
        description: `${error.message}`,
        variant: "destructive",
      });
    }
  };
  // console.log(brandData);

  if (!productTypeData) {
    return <div>Loading...</div>;
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onUpdate)} className="space-y-4">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 p-5">
          <FormField
            control={form.control}
            name="nameType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên loại sản phẩm</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập tên loại sản phẩm" {...field} />
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
                <FormLabel>Số thứ tự</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập số thứ tự" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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

export default ProductTypeUpdateform;
