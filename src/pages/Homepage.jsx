import React from "react";
import "swiper/scss";
import ProductList from "../components/product/ProductList";
import PostList from "../components/posts/PostList";
import TrademarkList from "../components/trademark/TrademarkList";
import IconDelivery from "public/svg/ck1.svg";
import IconFree from "public/svg/ck2.svg";
import IconReputation from "public/svg/ck3.svg";
import IconTeam from "public/svg/ck4.svg";

const HomePage = () => {
  return (
    <div className="page-container">
      <div className="flex justify-center items-center bg-button text-white p-5 my-10">
        <ItemPolice
          url={IconDelivery}
          title={"GIAO HÀNG 30 PHÚT"}
          children={"Khoảng cách dưới 5km"}
        ></ItemPolice>
        <ItemPolice
          url={IconFree}
          title={"MIỄN PHÍ GIAO HÀNG"}
          children={"Đơn hàng từ 5kg đến khi có thông báo mới"}
        ></ItemPolice>
        <ItemPolice
          url={IconReputation}
          title={"UY TÍN - ĐÚNG HẸN"}
          children={""}
        ></ItemPolice>
        <ItemPolice
          url={IconTeam}
          title={"ĐỘI NGŨ CHUYÊN NGHIỆP"}
          children={""}
          className={"border-none"}
        ></ItemPolice>
      </div>
      <section className="mb-10">
        <span className="text-[#007033] font-semibold text-lg">
          THƯƠNG HIỆU NỔI BẬT
        </span>
        <div className="w-full border border-solid border-[#007033] mb-5"></div>
        <div className="product-list">
          <TrademarkList></TrademarkList>
        </div>
      </section>
      <section className="mb-10">
        <span className="capitalize text-[#007033] font-semibold text-lg">
          SẢN PHẨM NỔI BẬT
        </span>
        <div className="w-full border border-solid border-[#007033] mb-5"></div>
        <div className="product-list">
          <ProductList></ProductList>
        </div>
      </section>
      <section className="mb-10">
        <span className="capitalize text-[#007033] font-semibold text-lg">
          SẢN PHẨM MỚI NHẤT
        </span>
        <div className="w-full border border-solid border-[#007033] mb-5"></div>
        <div className="product-list">
          <ProductList></ProductList>
        </div>
      </section>
      <section className="mb-10">
        <span className="text-[#007033] font-semibold text-lg">
          BÀI VIẾT NỔI BẬT
        </span>
        <div className="w-full border border-solid border-[#007033] mb-5"></div>
        <div className="product-list">
          <PostList></PostList>
        </div>
      </section>
    </div>
  );
};

const ItemPolice = ({ url, title, children, className }) => {
  return (
    <div
      className={`flex justify-start items-center gap-3 py-2 border-r w-72 h-20 ${className}`}
    >
      <img src={url} alt="" className="w-20 h-20" />
      <div className="">
        <h2 className="text-lg font-semibold leading-1 overflow-hidden line-clamp-2">
          {title}
        </h2>
        <span className="leading-1 overflow-hidden line-clamp-2">
          {children}
        </span>
      </div>
    </div>
  );
};

export default HomePage;
