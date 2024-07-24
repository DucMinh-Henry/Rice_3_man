import PieChartDashboard from "@/components/chart/PieChart";
import React from "react";

const data1 = [
  { label: "Group A", value: 2400, color: "#914F00" },
  { label: "Group B", value: 4567, color: "#344BFD" },
  { label: "Group C", value: 1398, color: "#F75274" },
  { label: "Group D", value: 9800, color: "#F4A79D" },
  { label: "Group E", value: 3908, color: "#FF0000" },
];

const Chartproduct = () => {
  return (
    <div className="grid col-start-8 col-end-11 bg-white rounded-lg">
      <div className="p-5">
        <span className="text-[#914F00]">Loại sản phẩm</span>
        <div className="flex flex-col gap-1 mt-5">
          <div className="flex gap-5 items-center">
            <div className="w-10 h-5 bg-[#F68D2B] rounded-md"></div>
            <span className="text-lg">Gạo tẻ</span>
          </div>
          <div className="flex gap-5 items-center">
            <div className="w-10 h-5 bg-[#344BFD] rounded-md"></div>
            <span className="text-lg">Gạo tẻ</span>
          </div>
          <div className="flex gap-5 items-center">
            <div className="w-10 h-5 bg-[#F75274] rounded-md"></div>
            <span className="text-lg">Gạo tẻ</span>
          </div>
          <div className="flex gap-5 items-center">
            <div className="w-10 h-5 bg-[#F4A79D] rounded-md"></div>
            <span className="text-lg">Gạo tẻ</span>
          </div>
          <div className="flex gap-5 items-center">
            <div className="w-10 h-5 bg-[#FF0000] rounded-md"></div>
            <span className="text-lg">Gạo tẻ</span>
          </div>
        </div>
        <PieChartDashboard data={data1}></PieChartDashboard>
      </div>
    </div>
  );
};

export default Chartproduct;
