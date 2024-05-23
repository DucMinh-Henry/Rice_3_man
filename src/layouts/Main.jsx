import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./footer";
import Banner from "../components/banner/Banner";
import FromBeginPageClick from "./FromBeginPageClick";

const Main = () => {
  return (
    <Fragment>
      <Header></Header>
      <Banner></Banner>
      <Outlet></Outlet>
      <FromBeginPageClick></FromBeginPageClick>
      <Footer></Footer>
    </Fragment>
  );
};

export default Main;
