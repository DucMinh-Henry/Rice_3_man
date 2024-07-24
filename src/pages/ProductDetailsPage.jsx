import React, { useContext, useEffect, useState } from "react";
import "swiper/scss";
import iconPolicy from "public/svg/policy_round.svg";
import iconFreeDelivery from "public/svg/free_delivery.svg";
import iconPublished from "public/svg/published.svg";
import iconPhone from "public/svg/phone.svg";
import iconDiscount from "public/svg/discount.svg";
import ProductList from "@/components/product/ProductList";
import { useParams } from "react-router-dom";
import IconCart from "@/components/icons/IconCart";
import IconMinus from "@/components/icons/IconMinus";
import IconPlus from "@/components/icons/IconPlus";
import Button from "@/components/button/Button";
import { CartData } from "@/components/context/CartContext";
import axios from "@/api/axios";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState([]);
  const [number, setNumber] = useState(1);
  const { cart, setCart } = CartData();

  // Get data
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productResponse = await axios.get(
          `http://localhost:8888/product/id/${productId}`
        );
        setProductData(productResponse.data.ProductID);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [productId]);

  // console.log(productData);
  // Format the price to VND using the locale, style, and currency.
  const VNDDong = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const handleAddToCart = () => {
    const existingItem = cart.find(
      (item) => item.idProduct === productData.idProduct
    );
    if (!existingItem) {
      setCart([...cart, { ...data, quantity: number }]);
    }
  };

  return (
    <div className="page-container">
      <div className="grid grid-cols-10 gap-40 mb-10">
        <div className="col-span-6">
          <div className="flex gap-5">
            <img
              src={productData.urlImage}
              alt={productData.nameProduct}
              className="rounded-lg object-cover w-[250px]"
            />
            <div className="flex flex-col justify-between w-full bg-white rounded-md gap-5 p-5">
              <div className="flex flex-col justify-between leading-8">
                <h2 className="font-semibold text-lg">
                  {productData.nameProduct}
                </h2>
                <div className="flex gap-2">
                  <span>Tình trạng:</span>
                  <span className="text-primary">Còn hàng</span>
                </div>
                <div className="flex gap-2">
                  <span>Mã sản phẩm:</span>
                  <span className="text-primary">{productData.idProduct}</span>
                </div>
              </div>
              <span className="text-primary text-2xl font-bold">
                {VNDDong.format(productData.price)}
              </span>
              <div className="flex items-center gap-2">
                <span>Số lượng:</span>
                <div className="border flex justify-center items-center">
                  <div className="px-1 border-r cursor-pointer bg-[#f8f8f8]">
                    <IconMinus
                      onClick={() => setNumber((prev) => Math.max(1, prev - 1))}
                      className="w-4"
                    />
                  </div>
                  <span className="w-6 text-center">{number}</span>
                  <div className="px-1 border-l cursor-pointer bg-[#f8f8f8]">
                    <IconPlus
                      onClick={() => setNumber((prev) => prev + 1)}
                      className="w-4"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-10 justify-center items-center">
                <Button
                  className="p-1 px-full bg-button text-white hover:bg-[#fdc97d] hover:text-[#053024]"
                  onClick={handleAddToCart}
                >
                  <div className="w-full flex gap-3 px-3 justify-center items-center border border-solid border-white hover:border-[#053024]">
                    <IconCart className="w-6 h-6" />
                    <span className="text-lg font-semibold">
                      Thêm vào giỏ hàng
                    </span>
                  </div>
                </Button>
                <Button
                  className="p-1 px-full bg-button text-white hover:bg-[#fdc97d] hover:text-[#053024]"
                  onClick={handleAddToCart}
                  href={"/payment"}
                >
                  <span className="text-lg font-semibold w-full px-3 flex gap-10 justify-center items-center border border-solid border-white hover:border-[#053024]">
                    Mua ngay
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-white p-5 rounded-lg gap-5">
          <div className="flex justify-center items-center gap-5">
            <span className="text-2xl font-semibold">Chính sách cửa hàng</span>
            <img src={iconPolicy} alt="Policy" />
          </div>
          <div className="flex flex-col gap-5 items-start">
            <StorePolicy
              rsc={iconFreeDelivery}
              title="Miễn phí vận chuyển"
              children="Cho tất cả đơn hàng trong nội thành Hồ Chí Minh"
            />
            <StorePolicy
              rsc={iconPublished}
              title="Miễn phí đổi trả"
              children="Đối với sản phẩm lỗi sản xuất hoặc vận chuyển"
            />
            <StorePolicy
              rsc={iconPhone}
              title="Hỗ trợ nhanh chóng"
              children="Gọi Hotline: 19001010 để được hỗ trợ ngay"
            />
            <StorePolicy
              rsc={iconDiscount}
              title="Ưu đãi combo"
              children="Mua theo combo, mua càng nhiều giá càng rẻ"
            />
          </div>
        </div>
      </div>
      <div className="mb-10">
        <span className="capitalize text-[#007033] font-semibold text-lg">
          SẢN PHẨM NỔI BẬT
        </span>
        <div className="w-full border border-solid border-[#007033] mb-5"></div>
        <div className="product-list">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

function StorePolicy({ rsc, title, children }) {
  return (
    <div className="flex items-center gap-5">
      <img src={rsc} alt={title} />
      <div className="flex flex-col justify-center">
        <span className="text-lg font-semibold">{title}</span>
        <span>{children}</span>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
