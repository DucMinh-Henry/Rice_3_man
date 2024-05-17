import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ProductCard from "@/components/product/ProductCard";
import { PaginationDemo } from "@/components/pagination/Pagination";
import useSWR from "swr";
import { dbAPI, fetcher } from "@/components/aipConfig/config";

const ProductPage = ({ type = "products" }) => {
  const { data, error } = useSWR(dbAPI.getdataList(type), fetcher);
  const productsData = data || [];
  console.log(productsData);
  return (
    <div className="page-container flex flex-col justify-center items-center">
      <div className="grid grid-cols-10 gap-5 mb-10">
        <div className="grid col-start-1 col-end-3">
          <div className="">
            <div className="bg-secondary rounded-md p-5">
              <h2 className="mb-4 mx-auto font-semibold text-lg">
                Danh mục sản phẩm
              </h2>
              <div className="flex flex-col gap-3 w-full max-h-80">
                <span className="p-2 bg-button text-white rounded-sm">
                  Gạo trắng(gạo tẻ)
                </span>
                <span className="p-2">Gạo nếp</span>
                <span className="p-2">Gạo lứt</span>
                <span className="p-2">Gạo tấm</span>
                <span className="p-2">Gạo hữu cơ</span>
                <span className="p-2">Gạo mầm, hỗn hợp</span>
              </div>
            </div>
            <div className="mt-5 p-5">
              <h2 className="font-semibold text-lg mb-3">Lọc giá</h2>
              <div className="">
                <RadioGroup defaultValue="comfortable">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="r1" id="r1" />
                      <Label htmlFor="r1">100.000 - 200.000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="r2" id="r2" />
                      <Label htmlFor="r2">200.000 - 300.000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="r3" id="r3" />
                      <Label htmlFor="r3">300.000 - 500.000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="r4" id="r4" />
                      <Label htmlFor="r4">500.000 - 1.000.000</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
        <div className="grid col-start-3 col-end-11">
          <RadioGroup defaultValue="comfortable">
            <div className="flex gap-4 h-9 items-center mb-5">
              <span className="font-semibold">Sắp xếp:</span>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="r1" id="r1" />
                <Label htmlFor="r1">A-Z</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="r2" id="r2" />
                <Label htmlFor="r2">Z-A</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="r3" id="r3" />
                <Label htmlFor="r3">Giá tăng dần</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="r4" id="r4" />
                <Label htmlFor="r4">Giá giảm dần</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="r5" id="r5" />
                <Label htmlFor="r5">Mới nhất</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="r6" id="r6" />
                <Label htmlFor="r6">Cũ nhất</Label>
              </div>
            </div>
          </RadioGroup>
          <div className="grid grid-cols-4 gap-5">
            {productsData.length > 0 &&
              productsData.map((item) => (
                <ProductCard key={item.id} item={item}></ProductCard>
              ))}
          </div>
        </div>
      </div>
      <div className="mb-10">
        <PaginationDemo></PaginationDemo>
      </div>
    </div>
  );
};

export default ProductPage;
