import TableProductType from "@/components/adminDashboard/TableProductType";
import TitleContent from "@/components/titleContent/TitleContent";
import React from "react";

const ProductTypePage = () => {
  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <TitleContent
          mainChildren={"Loại sản phẩm"}
          minorCirldren={"Home / Loại sản phẩm / Danh sách loại sản phẩm"}
        ></TitleContent>
        <TableProductType></TableProductType>
      </div>
    </div>
  );
};

export default ProductTypePage;
