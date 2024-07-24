import React, { useContext } from "react";
import Button from "../button/Button";
import IconAddToCart from "../icons/IconAddToCart";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { CartData } from "../context/CartContext";

const ProductCard = ({ item }) => {
  const {
    idProduct,
    idType,
    idBrand,
    nameProduct,
    slug,
    price,
    urlImage,
    describe,
    postingDate,
    views,
    purchases,
    anHien,
    noiBat,
    ProductType_idType,
    Brand_idBrand,
  } = item || {};

  // Format the price to VND using the locale, style, and currency.
  const VNDDong = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  // handle add to card
  const { cart, setCart } = CartData();

  const handleAddToCart = () => {
    const existingItem = cart.find((item) => item.idProduct === idProduct);
    if (existingItem) {
      setCart(cart);
    } else {
      // Ensure cart is an array before adding a new item
      if (Array.isArray(cart)) {
        setCart([...cart, item]);
      } else {
        setCart([item]);
      }
    }
  };
  // console.log(cart);

  const navigate = useNavigate();
  return (
    <div className="bg-white flex flex-col justify-center items-center p-3 product-list h-full shadow-custom mb-0 rounded-md">
      <img
        loading="lazy"
        className="rounded-md mb-3 h-[280px] min-w-full cursor-pointer"
        src={urlImage}
        alt=""
        onClick={() => {
          navigate(`/product/${idProduct}`);
        }}
      />
      <div className="w-full">
        <div className="flex items-center justify-between gap-3 mb-2 mr-3 ">
          <span className="text-base w-full h-12 line-clamp-2">
            {nameProduct}
          </span>
          <IconAddToCart
            onClick={handleAddToCart}
            className="cursor-pointer"
          ></IconAddToCart>
        </div>
        <div className="flex items-center justify-between gap-3 w-full">
          <span className="text-lg text-primary font-bold">
            {VNDDong.format(price)}
          </span>
          <Button
            type="button"
            kind="button"
            className="flex items-center justify-center text-lg font-semibold p-1 bg-[#053024] hover:bg-[#fdc97d] hover:text-[#053024]"
            onClick={() => {
              navigate(`/product/${idProduct}`);
            }}
          >
            <span className="px-1 border border-solidProduct border-white hover:border-[#053024]">
              Mua
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  item: PropTypes.shape({
    idProduct: PropTypes.number,
    nameProduct: PropTypes.string,
    price: PropTypes.number,
    urlImage: PropTypes.string,
  }),
};

export default ProductCard;
