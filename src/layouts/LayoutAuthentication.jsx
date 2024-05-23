import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { useSelector } from "react-redux";
import ErrorComponent from "@/components/common/ErrorComponent";
import IconLogo from "@/components/icons/IconLogo";

const LayoutAuthentication = (props) => {
  const { children, heading = "" } = props;
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.email) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  if (user && user.email) return null;
  return (
    <div className="relative w-full min-h-screen p-10">
      <Link to="/" className="inline-block mb-5 lg:mb-16 rounded-lg">
        <IconLogo></IconLogo>
      </Link>
      <div className="w-full max-w-[556px] bg-white shadow-xl rounded-xl px-5 lg:px-16 py-12 mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-5">{heading}</h1>
        {children}
      </div>
    </div>
  );
};
LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};
export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
