import TitleContent from "@/components/titleContent/TitleContent";
import React from "react";
import TableAccount from "./TableAccount";
import { dbAPI, fetcher } from "@/components/aipConfig/config";
import useSWR from "swr";

const AccountPage = ({ type = "user" }) => {
  const { data, error } = useSWR(dbAPI.getdataList(type), fetcher);

  // Ensure data is loaded before proceeding
  if (!data) {
    return <div>Loading...</div>;
  }

  // Check for errors or absence of data
  if (error || !data.Users) {
    return <div>{error ? "Error fetching data" : "No data available"}</div>;
  }

  // Destructure the products array from data
  const { Users: userData } = data;

  // console.log(userData);
  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <TitleContent
          mainChildren={"Tài khoản"}
          minorCirldren={"Home / Tài khoản / Danh sách tài khoản"}
        ></TitleContent>
        <TableAccount userData={userData}></TableAccount>
      </div>
    </div>
  );
};

export default AccountPage;
