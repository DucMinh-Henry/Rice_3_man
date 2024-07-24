import TitleContent from "@/components/titleContent/TitleContent";
import React from "react";
import TableBrand from "./TableBrand";
import useSWR from "swr";
import { dbAPI, fetcher } from "@/components/aipConfig/config";

const BrandPage = ({ type = "brand" }) => {
  const { data, error } = useSWR(dbAPI.getdataList(type), fetcher);

  // Ensure data is loaded before proceeding
  if (!data) {
    return <div>Loading...</div>;
  }

  // Check for errors or absence of data
  if (error || !data.Brands) {
    return <div>{error ? "Error fetching data" : "No data available"}</div>;
  }

  // Destructure the products array from data
  const { Brands: brandData } = data;
  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <TitleContent
          mainChildren={"Danh sách thương hiệu sản phẩm"}
          minorCirldren={"Home / Thương hiệu sản phẩm"}
        ></TitleContent>
        <TableBrand brandData={brandData}></TableBrand>
      </div>
    </div>
  );
};

export default BrandPage;
