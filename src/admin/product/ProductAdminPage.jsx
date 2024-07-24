import TitleContent from "@/components/titleContent/TitleContent";
import React from "react";
import TableProductAdmin from "./TableProductAdmin";
import useSWR from "swr";
import { dbAPI, fetcher } from "@/components/aipConfig/config";

const ProductAdminPage = ({ type = "product" }) => {
  const { data, error } = useSWR(dbAPI.getdataList(type), fetcher);

  // Ensure data is loaded before proceeding
  if (!data) {
    return <div>Loading...</div>;
  }

  // Check for errors or absence of data
  if (error || !data.ListProduct) {
    return <div>{error ? "Error fetching data" : "No data available"}</div>;
  }

  // Destructure the products array from data
  const { ListProduct: productData } = data;

  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <TitleContent
          mainChildren={"Sản phẩm"}
          minorCirldren={"Home / Sản phẩm / Danh sách sản phẩm"}
        ></TitleContent>
        <TableProductAdmin productData={productData}></TableProductAdmin>
      </div>
    </div>
  );
};

export default ProductAdminPage;
