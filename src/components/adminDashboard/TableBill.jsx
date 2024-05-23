import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import IconCheckDisplay from "../icons/IconCheckDisplay";
import IconSquarePen from "../icons/IconSquarePen ";
import PaginationDemo from "../pagination/Pagination";

const TableBill = () => {
  return (
    <div className="grid col-start-1 col-end-8 bg-white rounded-lg">
      <div className="flex justify-between m-5">
        <span className="text-[#914F00]">Danh sách hóa đơn</span>
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="outline-none border px-3 py-1 rounded-md w-80"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow className="font-bold">
            <TableHead>ID</TableHead>
            <TableHead>Người nhận</TableHead>
            <TableHead>Số điện thoại</TableHead>
            <TableHead>Ngày mua</TableHead>
            <TableHead>Tổng tiền</TableHead>
            <TableHead>trạng thái</TableHead>
            <TableHead>Vận chuyển</TableHead>
            <TableHead>Thanh toán</TableHead>
            <TableHead>Hành Động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="list-employee">
            <TableCell className="p-1">1</TableCell>
            <TableCell className="p-1">Trần Đức Minh</TableCell>
            <TableCell className="p-1">032478543</TableCell>
            <TableCell className="p-1">110000</TableCell>
            <TableCell className="p-1">10/12/2024</TableCell>
            <TableCell className="p-1">
              <div className="flex justify-center w-full h-full">
                <IconCheckDisplay></IconCheckDisplay>
              </div>
            </TableCell>
            <TableCell className="p-1">
              <div className="flex justify-center w-full h-full">
                <IconCheckDisplay></IconCheckDisplay>
              </div>
            </TableCell>
            <TableCell className="p-1">
              <div className="flex  justify-center w-full h-full">
                <IconCheckDisplay></IconCheckDisplay>
              </div>
            </TableCell>
            <TableCell className="p-1">
              <div className="flex gap-5 items-center justify-center w-full h-full">
                <IconSquarePen></IconSquarePen>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="list-employee">
            <TableCell className="p-1">1</TableCell>
            <TableCell className="p-1">Trần Đức Minh</TableCell>
            <TableCell className="p-1">032478543</TableCell>
            <TableCell className="p-1">110000</TableCell>
            <TableCell className="p-1">10/12/2024</TableCell>
            <TableCell className="p-1">
              <div className="flex justify-center w-full h-full">
                <IconCheckDisplay></IconCheckDisplay>
              </div>
            </TableCell>
            <TableCell className="p-1">
              <div className="flex justify-center w-full h-full">
                <IconCheckDisplay></IconCheckDisplay>
              </div>
            </TableCell>
            <TableCell className="p-1">
              <div className="flex  justify-center w-full h-full">
                <IconCheckDisplay></IconCheckDisplay>
              </div>
            </TableCell>
            <TableCell className="p-1">
              <div className="flex gap-5 items-center justify-center w-full h-full">
                <IconSquarePen></IconSquarePen>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="m-10 flex items-center justify-between">
        <div className="">Hiển thị 1-10 của 66 kết quả</div>
        {/* <PaginationDemo></PaginationDemo> */}
      </div>
    </div>
  );
};

export default TableBill;
