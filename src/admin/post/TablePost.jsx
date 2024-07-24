import PaginationDemo from "@/components/pagination/Pagination";
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
import IconDelete from "@/components/icons/IconDelete";
import IconSquarePen from "@/components/icons/IconSquarePen ";
import Button from "@/components/button/Button";
import IconCheckDisplay from "@/components/icons/IconCheckDisplay";
import IconCreate from "@/components/icons/IconCreate";
import CellAction from "./CellAction";
const TablePost = ({ postData }) => {
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
    const filtered = postData.filter((item) =>
      item.title.toLowerCase().includes(searchName.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchName]);

  return (
    <div className="grid col-start-1 col-end-8 bg-white rounded-lg">
      <div className="flex justify-between m-5">
        <span className="text-[#914F00]">Danh sách bài viết</span>
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
          href={"/admin/post/create"}
        >
          <IconCreate></IconCreate>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="font-bold">
            <TableHead>ID</TableHead>
            <TableHead>Tiêu đề bài viết</TableHead>
            <TableHead>Hình ảnh</TableHead>
            <TableHead>Tác giả</TableHead>
            <TableHead>Ngày đăng</TableHead>
            <TableHead>Hiển thị</TableHead>
            <TableHead>Nổi bật</TableHead>
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
                <TableCell className="p-1">{item.title}</TableCell>
                <TableCell className="p-1 flex items-center justify-center">
                  <img src={item.thumbNail} alt="" className="w-24 h-14" />
                </TableCell>
                <TableCell className="p-1">{item.author}</TableCell>
                <TableCell className="p-1">{item.postingDate}</TableCell>
                <TableCell className="p-1">
                  <div className="flex items-center justify-center w-full h-full">
                    {item.anHien === 1 ? (
                      <IconCheckDisplay className="text-green-600"></IconCheckDisplay>
                    ) : (
                      <IconCheckDisplay className="text-[#333]"></IconCheckDisplay>
                    )}
                  </div>
                </TableCell>
                <TableCell className="p-1">
                  <div className="flex items-center justify-center w-full h-full">
                    {item.noiBat === 1 ? (
                      <IconCheckDisplay className="text-green-600"></IconCheckDisplay>
                    ) : (
                      <IconCheckDisplay className="text-[#333]"></IconCheckDisplay>
                    )}
                  </div>
                </TableCell>
                <TableCell className="p-1">
                  <div className="flex gap-5 items-center justify-center w-full h-full">
                    <CellAction postId={item.idPots}></CellAction>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="m-10 flex items-center justify-between">
        <div className="">Hiển thị 1-10 của 66 kết quả</div>
        <PaginationDemo
          PerPage={newsPerPage}
          dataBase={postData}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        ></PaginationDemo>
      </div>
    </div>
  );
};

export default TablePost;
