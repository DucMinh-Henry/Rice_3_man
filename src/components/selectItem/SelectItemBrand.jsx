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

const SelectItemBrand = ({ onValueChange, defaultValue, type = "brand" }) => {
  const [brandData, setBrandData] = useState({});

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/${type}`);
        setBrandData(response.data.Brands);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBrand();
  }, []);

  // Ensure data is loaded before proceeding
  if (!brandData) {
    return <div>Loading...</div>;
  }

  console.log(brandData);
  return (
    <FormItem>
      <FormLabel>Thương hiệu</FormLabel>
      <FormControl>
        <Select onValueChange={onValueChange} defaultValue={defaultValue}>
          <SelectTrigger>
            <SelectValue placeholder="Chọn thương hiệu" />
          </SelectTrigger>
          <SelectContent>
            {brandData.length > 0 &&
              brandData.map((item) => (
                <SelectItem key={item.idBrand} value={item.idBrand.toString()}>
                  {item.nameBrand}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default SelectItemBrand;
