import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Button from "@/components/button/Button";
import PaginationDemo from "@/components/pagination/Pagination";
import CellAction from "./CellAction";

const TableAccount = ({ userData }) => {
  const [searchName, setSearchName] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  // handle next page
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(5);
  const indexOfLastItem = currentPage * newsPerPage;
  const indexOfFirstItem = indexOfLastItem - newsPerPage;
  const currentProductsData = filteredItems.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Sreach
  // Xử lý thay đổi trong ô tìm kiếm
  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  useEffect(() => {
    const filtered = userData.filter((item) =>
      item.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchName]);
  return (
    <div className="grid col-start-1 col-end-8 bg-white rounded-lg">
      <div className="flex justify-between m-5">
        <span className="text-[#914F00]">Danh sách tài khoản</span>
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="outline-none border px-3 py-1 rounded-md w-80"
          value={searchName}
          onChange={handleSearchChange}
        />
        {/* <Button
          kind={"button"}
          className="px-3 py-2 rounded-md"
          href={"/admin/account/create"}
        >
          Tạo mới
        </Button> */}
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
          {currentProductsData.length > 0 &&
            currentProductsData.map((item, index) => (
              <TableRow className="list-employee" key={index}>
                <TableCell className="p-1">
                  {index + 1 + (currentPage - 1) * newsPerPage}
                </TableCell>
                <TableCell className="p-1">{item.name}</TableCell>
                <TableCell className="p-1">{item.email}</TableCell>
                <TableCell className="p-1">{item.phone}</TableCell>
                <TableCell className="p-1 flex items-center justify-center">
                  <img
                    loading="lazy"
                    src={item.avatar}
                    alt=""
                    className="w-24 h-14"
                  />
                </TableCell>
                <TableCell className="p-1">{item.role}</TableCell>
                <TableCell className="p-1">
                  <div className="flex gap-2 items-center justify-center w-full h-full">
                    <CellAction userId={item.id}></CellAction>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="m-10 flex items-center justify-between">
        <div className="">Hiển thị 1-5 của {userData.length} kết quả</div>
        <PaginationDemo
          PerPage={newsPerPage}
          dataBase={userData}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        ></PaginationDemo>
      </div>
    </div>
  );
};

export default TableAccount;
