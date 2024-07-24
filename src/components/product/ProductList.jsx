import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import ProductCard from "./ProductCard";
import { CartData } from "../context/CartContext";
import axios from "@/api/axios";

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const { cart, setCart } = CartData();
  // Get data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/product`);
        setProductData(response.data.ListProduct);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <Swiper grabCursor={true} spaceBetween={20} slidesPerView={"auto"}>
      {productData.map((item, index) => (
        <SwiperSlide key={index}>
          <ProductCard item={item} cart={cart} setCart={setCart}></ProductCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductList;
