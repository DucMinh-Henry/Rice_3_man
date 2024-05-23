import TableAccount from "@/components/adminDashboard/TableAccount";
import TitleContent from "@/components/titleContent/TitleContent";
import React from "react";

const AccountPage = () => {
  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <TitleContent
          mainChildren={"Tài khoản"}
          minorCirldren={"Home / Tài khoản / Danh sách tài khoản"}
        ></TitleContent>
        <TableAccount></TableAccount>
      </div>
    </div>
  );
};

export default AccountPage;
