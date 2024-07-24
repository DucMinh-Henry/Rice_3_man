import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { SwiperSlide, Swiper } from "swiper/react";
import axios from "@/api/axios";
const PostList = ({ type = "post" }) => {
  const [postData, setPostData] = useState({});

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/${type}`);
        setPostData(response.data.Posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBrand();
  }, []);

  // console.log(postsData);

  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
      {postData.length > 0 &&
        postData.map((item, index) => (
          <SwiperSlide key={index}>
            <PostCard item={item}></PostCard>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default PostList;
