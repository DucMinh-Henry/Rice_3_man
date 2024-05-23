import TableBrand from "@/components/adminDashboard/TableBrand";
import TitleContent from "@/components/titleContent/TitleContent";
import React from "react";

const BrandPage = () => {
  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <TitleContent
          mainChildren={"Danh sách thương hiệu sản phẩm"}
          minorCirldren={"Home / Thương hiệu sản phẩm"}
        ></TitleContent>
        <TableBrand></TableBrand>
      </div>
    </div>
  );
};

export default BrandPage;
