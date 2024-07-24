import React, { useEffect, useState } from "react";
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
import axios from "@/api/axios";

const SelectItemTypeProduct = ({
  onValueChange,
  defaultValue,
  type = "type",
}) => {
  const [productTypeData, setProductTypeData] = useState({});

  useEffect(() => {
    const fetchProductType = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/${type}`);
        setProductTypeData(response.data.Type);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductType();
  }, []);

  // Ensure data is loaded before proceeding
  if (!productTypeData) {
    return <div>Loading...</div>;
  }

  console.log(productTypeData);

  return (
    <FormItem>
      <FormLabel>Loại sản phẩm</FormLabel>
      <FormControl>
        <Select onValueChange={onValueChange} defaultValue={defaultValue}>
          <SelectTrigger>
            <SelectValue placeholder="Chọn loại sản phẩm" />
          </SelectTrigger>
          <SelectContent>
            {productTypeData.length > 0 &&
              productTypeData.map((item) => (
                <SelectItem key={item.idType} value={item.idType.toString()}>
                  {item.nameType}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default SelectItemTypeProduct;
