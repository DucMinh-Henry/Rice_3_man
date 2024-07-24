import React, { useState } from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const PostCard = ({ item }) => {
  const { idPots, title, content, thumbNail } = item;
  const navigate = useNavigate();

  // console.log(item);
  return (
    <div className="bg-[#fff] rounded-lg p-3 max-h-[450px]">
      <img
        loading="lazy"
        className="rounded-lg mb-3 h-[280px]"
        src={thumbNail}
        alt=""
      />
      <p className="text-xl font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
        {title}
      </p>
      <div
        className="line-clamp-3 h-14 overflow-hidden"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      <div className="flex items-center justify-center my-3">
        <Button
          type="button"
          kind="button"
          className="flex items-center justify-center text-lg font-semibold p-1 bg-[#053024] hover:bg-[#fdc97d] hover:text-[#053024]"
          onClick={() => {
            navigate(`/post/${idPots}`);
          }}
        >
          <span className="px-2 border border-solid border-white hover:border-[#053024]">
            Đọc tiếp
          </span>
        </Button>
      </div>
    </div>
  );
};

export default PostCard;
