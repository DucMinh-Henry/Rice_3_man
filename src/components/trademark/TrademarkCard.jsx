import React from "react";
import PropTypes from "prop-types";

const TrademarkCard = ({ item }) => {
  const { anHien, idBrand, nameBrand, order, slug, urlImageBrand } = item || {};
  return (
    <div className="bg-[#fff] flex flex-col justify-center items-center rounded-md">
      <img
        loading="lazy"
        className="p-5 min-w-[272px] min-h-[274px] object-cover"
        src={urlImageBrand}
        alt=""
      />
      <span className="text-xl py-4">{nameBrand}</span>
    </div>
  );
};

TrademarkCard.protoType = {
  item: PropTypes.shape({
    anHien: PropTypes.number,
    idBrand: PropTypes.number,
    nameBrand: PropTypes.string,
    order: PropTypes.number,
    slug: PropTypes.string,
    urlImageBrand: PropTypes.string,
  }),
};

export default TrademarkCard;
