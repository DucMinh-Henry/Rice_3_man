import TableBill from "@/components/adminDashboard/TableBill";
import TitleContent from "@/components/titleContent/TitleContent";
import React from "react";

const BillPage = () => {
  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <TitleContent
          mainChildren={"Hóa đơn"}
          minorCirldren={"Home / Hóa đơn / Danh sách hóa đơn"}
        ></TitleContent>
        <TableBill></TableBill>
      </div>
    </div>
  );
};

export default BillPage;
