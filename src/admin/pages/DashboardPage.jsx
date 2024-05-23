import React from "react";
import TitleContent from "@/components/titleContent/TitleContent";
import IconCart from "@/components/icons/IconCart";
import TableNewOrder from "@/components/adminDashboard/TableNewOrder";
import TableSellProduct from "@/components/adminDashboard/TableSellProduct";
import IconDolar from "@/components/icons/IconDolar";
import IconNumberAccount from "@/components/icons/IconNumberAccount";
import Chartproduct from "@/components/adminDashboard/dashboard/Chartproduct";
import ChartSellProduct from "@/components/adminDashboard/dashboard/ChartSellProduct";

const DashboardPage = () => {
  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <TitleContent
          mainChildren={"Dashboard"}
          minorCirldren={"Home / Dashboard"}
        ></TitleContent>
        <div className="mt-10 flex justify-between mb-10">
          <div className="p-3 bg-button text-white rounded-lg w-72">
            <span className="text-lg font-medium">Đơn hàng</span>
            <div className="flex gap-5 items-center mt-3">
              <div className="bg-white text-[#d0a73c] w-14 h-14 flex items-center justify-center rounded-full">
                <IconCart></IconCart>
              </div>
              <div className="flex flex-col leading-7 font-medium">
                <span>100</span>
                <span className="text-[#d0a73c]">44 Chưa được xác nhận</span>
              </div>
            </div>
          </div>
          <div className="p-3 bg-button text-white rounded-lg w-72">
            <span className="text-lg font-medium">Doanh thu</span>
            <div className="flex gap-5 items-center mt-3">
              <div className="bg-white text-[#d0a73c] w-14 h-14 flex items-center justify-center rounded-full">
                <IconDolar></IconDolar>
              </div>
              <div className="flex flex-col leading-7 font-medium">
                <span>9.999.999 VND</span>
                <span className="text-[#d0a73c]">555.555 vnd</span>
              </div>
            </div>
          </div>
          <div className="p-3 bg-button text-white rounded-lg w-72">
            <span className="text-lg font-medium">Đơn hàng</span>
            <div className="flex gap-5 items-center mt-3">
              <div className="bg-white text-[#d0a73c] w-14 h-14 flex items-center justify-center rounded-full">
                <IconNumberAccount></IconNumberAccount>
              </div>
              <div className="flex flex-col leading-7 font-medium">
                <span>9.999.999 VND</span>
                <span className="text-[#d0a73c]">555.555 vnd</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-5">
          <TableNewOrder></TableNewOrder>
          <Chartproduct></Chartproduct>
        </div>
        <div className="grid grid-cols-10 gap-5">
          <TableSellProduct></TableSellProduct>
          <ChartSellProduct></ChartSellProduct>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
