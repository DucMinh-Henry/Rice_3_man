import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import TrademarkCard from "./TrademarkCard";
import axios from "@/api/axios";

const TrademarkList = ({ type = "brand" }) => {
  const [brandData, setBrandData] = useState({});

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/${type}`);
        setBrandData(response.data.Brands);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBrand();
  }, []);

  // Ensure data is loaded before proceeding
  if (!brandData) {
    return <div>Loading...</div>;
  }

  // console.log(brandData);

  return (
    <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
      {brandData.length > 0 &&
        brandData.map((item, index) => (
          <SwiperSlide key={index}>
            <TrademarkCard item={item}></TrademarkCard>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default TrademarkList;
