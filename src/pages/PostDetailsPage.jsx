import { dbAPI, fetcher } from "@/components/aipConfig/config";
import PostList from "@/components/posts/PostList";
import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const { data, error } = useSWR(dbAPI.getPostDetails(postId), fetcher);

  if (error) return null;
  if (!data) return <div>Loading...</div>;
  const { id, name, description, url, author } = data;
  console.log(data);

  return (
    <div className="page-container">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col bg-secondary p-5 rounded-lg gap-8 mb-10 w-[60%] h-auto">
          <img src={url} alt="" className="object-cover rounded-lg w-[100%]" />
          <div className="">
            <h2 className="text-xl font-semibold mb-5">{name}</h2>
            <p className="text-base font-normal text-black">{description}</p>
          </div>
          <div className="flex justify-end gap-3">
            <span className="text-base font-normal text-black">Tác giả:</span>
            <span className="text-base font-medium text-blue-500">
              {author}
            </span>
          </div>
        </div>
      </div>
      <section className="mb-10">
        <span className="text-[#FF8E00] font-semibold text-lg">
          BÀI VIẾT NỔI BẬT
        </span>
        <div className="w-full border border-solid border-[#FF8E00] mb-5"></div>
        <div className="product-list">
          <PostList></PostList>
        </div>
      </section>
    </div>
  );
};

export default PostDetailsPage;
