import React, { useContext, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { dbAPI, fetcher } from "../aipConfig/config";
import ProductCard from "./ProductCard";
import { Cart } from "../context/CartContext";

const ProductList = ({ type = "products" }) => {
  const { data, error } = useSWR(dbAPI.getdataList(type), fetcher);
  // const isLoading = !data && !error;
  // console.log(data);
  const products = data || [];
  // console.log(products);

  // Add to cart
  const { cart, setCart } = useContext(Cart);
  // console.log(cart);
  // console.log(useContext(Cart));

  return (
    <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
      {products.length > 0 &&
        products.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard
              item={item}
              cart={cart}
              setCart={setCart}
              key={item.id}
            ></ProductCard>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ProductList;
