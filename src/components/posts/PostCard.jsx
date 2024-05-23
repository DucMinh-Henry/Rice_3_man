import React from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const PostCard = ({ item }) => {
  const { id, name, description, url } = item;
  const navigate = useNavigate();

  return (
    <div className="bg-[#fff] rounded-lg p-3 max-h-[450px]">
      <img className="rounded-lg mb-3 h-[280px]" src={url} alt="" />
      <p className="text-xl font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
        {name}
      </p>
      <p className="line-clamp-3 h-14">{description}</p>
      <div className="flex items-center justify-center my-3">
        <Button
          type="button"
          kind="button"
          className="flex items-center justify-center text-lg font-semibold p-1 bg-[#053024] hover:bg-[#fdc97d] hover:text-[#053024]"
          onClick={() => {
            navigate(`/post/${id}`);
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
