import TablePost from "@/components/adminDashboard/TablePost";
import TitleContent from "@/components/titleContent/TitleContent";
import React from "react";

const PostPageAdminPage = () => {
  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <TitleContent
          mainChildren={"Bài viết"}
          minorCirldren={"Home / Bài viết / Danh sách bài viết"}
        ></TitleContent>
        <TablePost></TablePost>
      </div>
    </div>
  );
};

export default PostPageAdminPage;
