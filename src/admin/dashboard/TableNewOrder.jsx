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
import PaginationDemo from "@/components/pagination/Pagination";

const TableNewOrder = () => {
  return (
    <div className="grid col-start-1 col-end-8 bg-white rounded-lg">
      <div className="flex justify-between m-5">
        <span className="text-[#914F00]">Đơn hàng mới nhất</span>
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
            <TableHead>Tên khách hàng</TableHead>
            <TableHead>Số điện thoại</TableHead>
            <TableHead>Ngày mua</TableHead>
            <TableHead>Tổng tiền</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="list-employee">
            <TableCell>1</TableCell>
            <TableCell>Trần Đức Minh</TableCell>
            <TableCell>012395432</TableCell>
            <TableCell>20/10/2024</TableCell>
            <TableCell>100.000</TableCell>
          </TableRow>
          <TableRow className="list-employee">
            <TableCell>1</TableCell>
            <TableCell>Trần Đức Minh</TableCell>
            <TableCell>012395432</TableCell>
            <TableCell>20/10/2024</TableCell>
            <TableCell>100.000</TableCell>
          </TableRow>
          <TableRow className="list-employee">
            <TableCell>1</TableCell>
            <TableCell>Trần Đức Minh</TableCell>
            <TableCell>012395432</TableCell>
            <TableCell>20/10/2024</TableCell>
            <TableCell>100.000</TableCell>
          </TableRow>
          <TableRow className="list-employee">
            <TableCell>1</TableCell>
            <TableCell>Trần Đức Minh</TableCell>
            <TableCell>012395432</TableCell>
            <TableCell>20/10/2024</TableCell>
            <TableCell>100.000</TableCell>
          </TableRow>
          <TableRow className="list-employee">
            <TableCell>1</TableCell>
            <TableCell>Trần Đức Minh</TableCell>
            <TableCell>012395432</TableCell>
            <TableCell>20/10/2024</TableCell>
            <TableCell>100.000</TableCell>
          </TableRow>
          <TableRow className="list-employee">
            <TableCell>1</TableCell>
            <TableCell>Trần Đức Minh</TableCell>
            <TableCell>012395432</TableCell>
            <TableCell>20/10/2024</TableCell>
            <TableCell>100.000</TableCell>
          </TableRow>
          <TableRow className="list-employee">
            <TableCell>1</TableCell>
            <TableCell>Trần Đức Minh</TableCell>
            <TableCell>012395432</TableCell>
            <TableCell>20/10/2024</TableCell>
            <TableCell>100.000</TableCell>
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

export default TableNewOrder;
