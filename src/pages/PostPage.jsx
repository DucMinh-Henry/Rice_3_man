import React, { Fragment, useState } from "react";
import PostCard from "../components/posts/PostCard";
import useSWR from "swr";
import { dbAPI, fetcher } from "@/components/aipConfig/config";
import PaginationDemo from "@/components/pagination/Pagination";
const PostPage = ({ type = "posts" }) => {
  const { data, error } = useSWR(dbAPI.getdataList(type), fetcher);
  const postsData = data || [];
  // console.log(postsData);

  // handle next page
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(10);
  const indexOfLastItem = currentPage * newsPerPage;
  const indexOfFirstItem = indexOfLastItem - newsPerPage;
  const currentpostsData = postsData.slice(indexOfFirstItem, indexOfLastItem);

  // console.log(currentpostsData);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Fragment>
      <div className="page-container">
        <div className="grid grid-cols-5 gap-5 mb-10">
          {currentpostsData.length > 0 &&
            currentpostsData.map((item, index) => (
              <div className="product-list  w-full h-full" key={item.id}>
                <PostCard item={item}></PostCard>
              </div>
            ))}
        </div>
        <div className="mb-10">
          <PaginationDemo
            dataBase={currentpostsData}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          ></PaginationDemo>
        </div>
      </div>
    </Fragment>
  );
};

export default PostPage;
