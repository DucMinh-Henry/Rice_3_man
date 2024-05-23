import React from "react";
import PropTypes from "prop-types";

const TrademarkCard = ({ item }) => {
  const { id, name, slug, url } = item || {};
  return (
    <div className="bg-[#fff] flex flex-col justify-center items-center">
      <img
        className="p-5 min-w-[272px] min-h-[274px] object-cover"
        src={url}
        alt=""
      />
      <span className="text-xl py-4">{name}</span>
    </div>
  );
};

TrademarkCard.protoType = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slug: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default TrademarkCard;
