import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import TrademarkCard from "./TrademarkCard";
import useSWR from "swr";
import { dbAPI, fetcher } from "../aipConfig/config";

const TrademarkList = ({ type = "brands" }) => {
  const { data, error } = useSWR(dbAPI.getdataList(type), fetcher);

  const brands = data || [];
  // console.log(brands);
  return (
    <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
      {brands.length > 0 &&
        brands.map((item) => (
          <SwiperSlide key={item.id}>
            <TrademarkCard item={item}></TrademarkCard>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default TrademarkList;
