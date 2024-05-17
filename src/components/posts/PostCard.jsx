import React from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const PostCard = ({ item }) => {
  const { id, name, description, url } = item;
  const navigate = useNavigate();

  return (
    <div className="bg-[#FADAB3] rounded-lg p-3 max-h-[450px]">
      <img className="rounded-lg mb-3 h-[280px]" src={url} alt="" />
      <p className="text-xl font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
        {name}
      </p>
      <p className="overflow-hidden h-[3.6rem] text-base leading-[1.2rem] text-ellipsis">
        {description}
      </p>
      <div className="flex items-center justify-center">
        <Button
          type="button"
          kind="button"
          className="mt-3 px-3 py-1 rounded-md"
          onClick={() => navigate(`/post/${id}`)}
        >
          Đọc tiếp
        </Button>
      </div>
    </div>
  );
};

export default PostCard;
