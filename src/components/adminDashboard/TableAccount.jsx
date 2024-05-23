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
import IconDelete from "@/components/icons/IconDelete";
import IconSquarePen from "@/components/icons/IconSquarePen ";
import Button from "@/components/button/Button";
import IconCreate from "../icons/IconCreate";
import PaginationDemo from "../pagination/Pagination";

const TableAccount = () => {
  return (
    <div className="grid col-start-1 col-end-8 bg-white rounded-lg">
      <div className="flex justify-between m-5">
        <span className="text-[#914F00]">Danh sách tài khoản</span>
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="outline-none border px-3 py-1 rounded-md w-80"
        />
        <Button
          kind={"button"}
          className="p-2 rounded-full"
          href={"/admin/account/create"}
        >
          <IconCreate></IconCreate>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="font-bold">
            <TableHead>ID</TableHead>
            <TableHead>Tên</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Số điện thoại</TableHead>
            <TableHead>Hình ảnh</TableHead>
            <TableHead>Vai trò</TableHead>
            <TableHead>Hành Động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="list-employee">
            <TableCell className="p-1">1</TableCell>
            <TableCell className="p-1">Trần Đức Minh</TableCell>
            <TableCell className="p-1">Email</TableCell>
            <TableCell className="p-1">023421312432</TableCell>
            <TableCell className="p-1 flex items-center justify-center">
              <img
                src="https://th.bing.com/th/id/OIP.vJ66xBnN-InaRG2eylG1UgHaF7?pid=ImgDet&w=179&h=143&c=7&dpr=1.3"
                alt=""
                className="w-24 h-14"
              />
            </TableCell>
            <TableCell className="p-1">1</TableCell>
            <TableCell className="p-1">
              <div className="flex gap-5 items-center justify-center w-full h-full">
                <IconSquarePen></IconSquarePen>
                <IconDelete></IconDelete>
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

export default TableAccount;
