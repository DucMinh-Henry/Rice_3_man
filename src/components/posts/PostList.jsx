import React from "react";
import PostCard from "./PostCard";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { dbAPI, fetcher } from "../aipConfig/config";
const PostList = ({ type = "posts" }) => {
  const { data, error } = useSWR(dbAPI.getdataList(type), fetcher);
  const postsData = data || [];
  // console.log(postsData);
  return (
    <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
      {postsData.length > 0 &&
        postsData.map((item) => (
          <SwiperSlide key={item.id}>
            <PostCard item={item}></PostCard>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default PostList;
