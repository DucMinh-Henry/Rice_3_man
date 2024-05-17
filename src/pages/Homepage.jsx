import React from "react";
import "swiper/scss";
import ProductList from "../components/product/ProductList";
import PostList from "../components/posts/PostList";
import TrademarkList from "../components/trademark/TrademarkList";

const HomePage = () => {
  return (
    <div className="page-container">
      <section className="mb-10">
        <span className="text-[#FF8E00] font-semibold text-lg">
          THƯƠNG HIỆU NỔI BẬT
        </span>
        <div className="w-full border border-solid border-[#FF8E00] mb-5"></div>
        <div className="product-list">
          <TrademarkList></TrademarkList>
        </div>
      </section>
      <section className="mb-10">
        <span className="capitalize text-[#FF8E00] font-semibold text-lg">
          SẢN PHẨM NỔI BẬT
        </span>
        <div className="w-full border border-solid border-[#FF8E00] mb-5"></div>
        <div className="product-list">
          <ProductList></ProductList>
        </div>
      </section>
      <section className="mb-10">
        <span className="capitalize text-[#FF8E00] font-semibold text-lg">
          SẢN PHẨM MỚI NHẤT
        </span>
        <div className="w-full border border-solid border-[#FF8E00] mb-5"></div>
        <div className="product-list">
          <ProductList></ProductList>
        </div>
      </section>
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

export default HomePage;
