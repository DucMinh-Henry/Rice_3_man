import React, { useState } from "react";
import "swiper/scss";
import iconMinus from "public/svg/minus.svg";
import iconPlus from "public/svg/plus.svg";
import iconCart from "public/svg/Add_Cart_white.svg";
import iconPolicy from "public/svg/policy_round.svg";
import iconFreeDelivery from "public/svg/free_delivery.svg";
import iconPublished from "public/svg/published.svg";
import iconPhone from "public/svg/phone.svg";
import iconDiscount from "public/svg/discount.svg";
import ProductList from "@/components/product/ProductList";
import useSWR from "swr";
import { dbAPI, fetcher } from "@/components/aipConfig/config";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { data, error } = useSWR(dbAPI.getProductDetails(productId), fetcher);
  //
  const [number, setNumber] = useState(1);
  // Format the price to VND using the locale, style, and currency.
  const VNDDong = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  
  if (error) return null;
  if (!data) return <div>Loading...</div>;
  const { id, name, price, url } = data;
  console.log(productId);

  return (
    <div className="page-container">
      <div className="page-container grid grid-cols-10 gap-40 mb-10">
        <div className="grid col-start-1 col-end-7">
          <div className="flex gap-5">
            <img
              src={url}
              alt=""
              className="rounded-lg object-cover max-w-[300px]"
            />
            <div className="flex flex-col justify-between w-full bg-secondary rounded-md p-5">
              <div className="flex flex-col justify-between leading-8">
                <h2 className="font-semibold text-lg">{name}</h2>
                <div className="flex gap-2">
                  <span>Tình trạng:</span>
                  <span className="text-[#FF8E00]">Còn hàng</span>
                </div>
                <div className="flex gap-2">
                  <span>Mã sản phẩm:</span>
                  <span className="text-[#FF8E00]">{id}</span>
                </div>
              </div>
              <span className="text-[#FF8E00] text-2xl">
                {VNDDong.format(price)}
              </span>
              <div className="flex items-center gap-2">
                <span>Số lượng:</span>
                <img
                  src={iconMinus}
                  alt=""
                  onClick={() => setNumber(number <= 1 ? 1 : number - 1)}
                  className="cursor-pointer"
                />
                <span>{number}</span>
                <img
                  src={iconPlus}
                  alt=""
                  onClick={() => setNumber(number + 1)}
                  className="cursor-pointer"
                />
              </div>
              <button className="flex gap-10 px-full bg-button justify-center items-center text-white rounded-md">
                <img src={iconCart} alt="" className="text-white" />
                <div className="flex flex-col p-2">
                  <span className="text-lg font-medium">Thêm vào giỏ hàng</span>
                  <span className="">Giao hàng tận nơi miễn phí</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="grid col-start-7 col-end-11 bg-secondary p-5 rounded-lg gap-5">
          <div className="flex justify-center items-center gap-5">
            <span className="text-2xl font-semibold">Chính sách cửa hàng</span>
            <img src={iconPolicy} alt="" />
          </div>
          <div className="flex flex-col gap-5 items-start">
            <StorePolicy
              rsc={iconFreeDelivery}
              title={"Miễn phí vận chuyển"}
              children={"Cho tất cả đơn hàng trong nội thành Hồ Chí Minh"}
            ></StorePolicy>
            <StorePolicy
              rsc={iconPublished}
              title={"Miễn phí đổi trả"}
              children={"Đối với sản phẩm lỗi sản xuất hoặc vận chuyển"}
            ></StorePolicy>
            <StorePolicy
              rsc={iconPhone}
              title={"Hỗ trợ nhanh chóng"}
              children={"Gọi Hotline: 19001010 để được hỗ trợ ngay"}
            ></StorePolicy>
            <StorePolicy
              rsc={iconDiscount}
              title={"Ưu đãi combo"}
              children={"Mua theo combo, mua càng nhiều giá càng rẻ"}
            ></StorePolicy>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <span className="capitalize text-[#FF8E00] font-semibold text-lg">
          SẢN PHẨM NỔI BẬT
        </span>
        <div className="w-full border border-solid border-[#FF8E00] mb-5"></div>
        <div className="product-list">
          <ProductList></ProductList>
        </div>
      </div>
    </div>
  );
};

function StorePolicy({ rsc, title, children }) {
  return (
    <div className="flex items-center gap-5">
      <img src={rsc} alt="" />
      <div className="flex flex-col justify-center">
        <span className="text-lg font-semibold">{title}</span>
        <span>{children}</span>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
