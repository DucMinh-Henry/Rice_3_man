import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { dbAPI, fetcher } from "../aipConfig/config";
import ProductCard from "./ProductCard";

const ProductList = ({ type = "products" }) => {
  const { data, error } = useSWR(dbAPI.getdataList(type), fetcher);
  // const isLoading = !data && !error;
  // console.log(data);
  const products = data || [];
  // console.log(products);
  return (
    <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
      {products.length > 0 &&
        products.map((item, index) => (
          <SwiperSlide key={`${item.id}_${index}`}>
            <ProductCard item={item}></ProductCard>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ProductList;
