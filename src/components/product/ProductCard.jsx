import React from "react";
import Button from "../button/Button";
import IconAddToCart from "../icons/IconAddToCart";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { id, name, price, url } = item || {};
  // Format the price to VND using the locale, style, and currency.
  const VNDDong = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  // console.log(item);
  // handle add to card
  
  const navigate = useNavigate();
  return (
    <div className="bg-[#FADAB3] rounded-lg flex flex-col justify-center items-center p-3 select-none h-full">
      <img className="rounded-md mb-3 h-[280px] min-w-full" src={url} alt="" />
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <span className="text-xl font-semibold">{name}</span>
          <span className="text-xl font-semibold">{VNDDong.format(price)}</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <IconAddToCart></IconAddToCart>
          <div className="flex items-center justify-center">
            <Button
              type="button"
              kind="button"
              className="px-3 py-1 rounded-md"
              onClick={() => {
                navigate(`/product/${id}`);
              }}
            >
              Mua
            </Button>
          </div>
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
