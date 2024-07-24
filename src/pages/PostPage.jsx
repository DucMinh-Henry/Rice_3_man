import React, { Fragment, useEffect, useState } from "react";
import PostCard from "../components/posts/PostCard";
import PaginationDemo from "@/components/pagination/Pagination";
import axios from "@/api/axios";
const PostPage = () => {
  const [postData, setPostData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(10);

  // console.log(postsData);
  // Get data
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const productResponse = await axios.get(`http://localhost:8888/post`);
        setPostData(productResponse.data.Posts);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchPostData();
  }, []);

  // handle next page
  const indexOfLastItem = currentPage * newsPerPage;
  const indexOfFirstItem = indexOfLastItem - newsPerPage;
  const currentpostsData = postData.slice(indexOfFirstItem, indexOfLastItem);

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
              <div className="product-list  w-full h-full" key={index}>
                <PostCard item={item}></PostCard>
              </div>
            ))}
        </div>
        <div className="mb-10">
          <PaginationDemo
            PerPage={newsPerPage}
            dataBase={postData}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          ></PaginationDemo>
        </div>
      </div>
    </Fragment>
  );
};

export default PostPage;
