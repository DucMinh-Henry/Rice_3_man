import React, { Fragment } from "react";
import PostCard from "../components/posts/PostCard";
import { PaginationDemo } from "@/components/pagination/Pagination";
import useSWR from "swr";
import { dbAPI, fetcher } from "@/components/aipConfig/config";
const PostPage = ({ type = "posts" }) => {
  const { data, error } = useSWR(dbAPI.getdataList(type), fetcher);
  const postsData = data || [];
  console.log(postsData);
  return (
    <Fragment>
      <div className="page-container">
        <div className="grid grid-cols-5 gap-5 mb-10">
          {postsData.length > 0 &&
            postsData.map((item, index) => (
              <div
                className="product-list  w-full h-full"
                key={item.id}
              >
                <PostCard item={item}></PostCard>
              </div>
            ))}
        </div>
        <div className="mb-10">
          <PaginationDemo></PaginationDemo>
        </div>
      </div>
    </Fragment>
  );
};

export default PostPage;
