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
import IconCheckDisplay from "@/components/icons/IconCheckDisplay";
import IconCreate from "@/components/icons/IconCreate";
import CellAction from "./CellAction";
import moment from "moment";
import PaginationDemo from "@/components/pagination/Pagination";

const TableProductAdmin = ({ productData }) => {
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
    const filtered = productData.filter((item) =>
      item.nameProduct.toLowerCase().includes(searchName.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchName]);

  return (
    <div className="grid col-start-1 col-end-8 bg-white rounded-lg">
      <div className="flex justify-between m-5">
        <span className="text-[#914F00]">Danh sách loại sản phẩm</span>
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="outline-none border px-3 py-1 rounded-md w-80"
          value={searchName}
          onChange={handleSearchChange}
        />
        <Button
          kind={"button"}
          className="p-2 rounded-full"
          href={"/admin/product/create"}
        >
          <IconCreate></IconCreate>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="font-bold">
            <TableHead>ID</TableHead>
            <TableHead>Tên sản phẩm</TableHead>
            <TableHead>Loại sản phẩm</TableHead>
            <TableHead>Giá</TableHead>
            <TableHead>Hình ảnh</TableHead>
            <TableHead>Ngày đăng</TableHead>
            <TableHead>Hiển thị</TableHead>
            <TableHead>Nổi bật</TableHead>
            <TableHead>Hành Động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentProductsData.length > 0 &&
            currentProductsData.map((item, index) => (
              <TableRow className="list-employee" key={item.idProduct}>
                <TableCell className="p-1">
                  {index + 1 + (currentPage - 1) * newsPerPage}
                </TableCell>
                <TableCell className="p-1">{item.nameProduct}</TableCell>
                <TableCell className="p-1">{item.ProductType_idType}</TableCell>
                <TableCell className="p-1">{item.price}</TableCell>
                <TableCell className="p-1 flex items-center justify-center">
                  <img
                    loading="lazy"
                    src={item.urlImage}
                    alt=""
                    className="w-24 h-14"
                  />
                </TableCell>
                <TableCell className="p-1">
                  {moment(item.postingDate).format("YYYY-MM-DD")}
                </TableCell>
                <TableCell className="p-1">
                  <div className="flex justify-center w-full h-full">
                    {item.anHien === 1 ? (
                      <IconCheckDisplay className="text-green-600"></IconCheckDisplay>
                    ) : (
                      <IconCheckDisplay className="text-[#333]"></IconCheckDisplay>
                    )}
                  </div>
                </TableCell>
                <TableCell className="p-1">
                  <div className="flex  justify-center w-full h-full">
                    {item.noiBat === 1 ? (
                      <IconCheckDisplay className="text-green-600"></IconCheckDisplay>
                    ) : (
                      <IconCheckDisplay className="text-[#333]"></IconCheckDisplay>
                    )}
                  </div>
                </TableCell>
                <TableCell className="p-1">
                  <div className="flex gap-2 items-center justify-center w-full h-full">
                    <CellAction productId={item.idProduct}></CellAction>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="m-10 flex items-center justify-between">
        <div className="">Hiển thị 1-5 của {productData.length} kết quả</div>
        <PaginationDemo
          PerPage={newsPerPage}
          dataBase={productData}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        ></PaginationDemo>
      </div>
    </div>
  );
};

export default TableProductAdmin;
