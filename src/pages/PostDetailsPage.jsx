import axios from "@/api/axios";
import PostList from "@/components/posts/PostList";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const productResponse = await axios.get(
          `http://localhost:8888/post/${postId}`
        );
        setPostData(productResponse.data.Post);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchPostData();
  }, []);

  // console.log(postData);

  return (
    <div className="page-container">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col bg-secondary p-5 rounded-lg gap-8 mb-10 w-[60%] h-auto">
          <img
            src={postData.thumbNail}
            alt=""
            className="object-cover rounded-lg w-[100%]"
          />
          <div className="">
            <h2 className="text-xl font-semibold mb-5 text-white">
              {postData.title}
            </h2>
            <p className="text-base font-normal text-white">
              <div dangerouslySetInnerHTML={{ __html: postData.content }}></div>
            </p>
          </div>
          <div className="flex justify-end gap-3">
            <span className="text-base font-normal text-white">Tác giả:</span>
            <span className="text-base font-medium text-blue-500">
              {postData.author}
            </span>
          </div>
        </div>
      </div>
      <section className="mb-10">
        <span className="text-secondary font-semibold text-lg">
          BÀI VIẾT NỔI BẬT
        </span>
        <div className="w-full border border-solid border-secondary mb-5"></div>
        <div className="product-list">
          <PostList></PostList>
        </div>
      </section>
    </div>
  );
};

export default PostDetailsPage;
