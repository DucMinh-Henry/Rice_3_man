import TableProductAdmin from "@/components/adminDashboard/TableProductAdmin";
import TitleContent from "@/components/titleContent/TitleContent";
import React from "react";

const ProductAdminPage = () => {
  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <TitleContent
          mainChildren={"Sản phẩm"}
          minorCirldren={"Home / Sản phẩm / Danh sách sản phẩm"}
        ></TitleContent>
        <TableProductAdmin></TableProductAdmin>
      </div>
    </div>
  );
};

export default ProductAdminPage;
