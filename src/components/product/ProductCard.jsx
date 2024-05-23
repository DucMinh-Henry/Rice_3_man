import React, { useContext } from "react";
import Button from "../button/Button";
import IconAddToCart from "../icons/IconAddToCart";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Cart } from "../context/CartContext";

const ProductCard = ({ item }) => {
  const { id, name, price, url } = item || {};

  // Format the price to VND using the locale, style, and currency.
  const VNDDong = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  // handle add to card
  const { cart, setCart } = useContext(Cart);

  const handleAddToCart = () => {
    const existingItem = cart.find((item) => item.id === id);
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
        className="rounded-md mb-3 h-[280px] min-w-full cursor-pointer"
        src={url}
        alt=""
        onClick={() => {
          navigate(`/product/${id}`);
        }}
      />
      <div className="w-full">
        <div className="flex items-center justify-between gap-3 mb-2 mr-3">
          <span className="text-base w-full h-12 line-clamp-2">{name}</span>
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
              navigate(`/product/${id}`);
            }}
          >
            <span className="px-1 border border-solid border-white hover:border-[#053024]">
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
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    url: PropTypes.string,
  }),
};

export default ProductCard;
