import React, { useEffect } from "react";
import { Route } from "react-router-dom";

const AdminRoutes = (props) => {
  useEffect(() => {}, []);
  return (
    <>
      <Route path={props.path} component={props.component}></Route>
    </>
  );
};

export default AdminRoutes;
