import TitleContent from "@/components/titleContent/TitleContent";
import React from "react";
import TablePost from "./TablePost";
import useSWR from "swr";
import { dbAPI, fetcher } from "@/components/aipConfig/config";

const PostPageAdminPage = ({ type = "post" }) => {
  const { data, error } = useSWR(dbAPI.getdataList(type), fetcher);

  // Ensure data is loaded before proceeding
  if (!data) {
    return <div>Loading...</div>;
  }

  // Check for errors or absence of data
  if (error || !data.Posts) {
    return <div>{error ? "Error fetching data" : "No data available"}</div>;
  }

  // Destructure the products array from data
  const { Posts: postData } = data;
  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <TitleContent
          mainChildren={"Bài viết"}
          minorCirldren={"Home / Bài viết / Danh sách bài viết"}
        ></TitleContent>
        <TablePost postData={postData}></TablePost>
      </div>
    </div>
  );
};

export default PostPageAdminPage;
