// imports.js
// React and related libraries
import React, { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Layouts
import Main from "./layouts/Main";
import MainDashboard from "./admin/common/main";

// Pages
import HomePage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import PostPage from "./pages/PostPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import CartPage from "./pages/CartPage";
import AccountUpdatePage from "./pages/AccountUpdatePage";
import AccountInfoPage from "./pages/AccountInfoPage";
import AccountDeletePage from "./pages/AccountDeletePage";
import PaymentPage from "./pages/PaymentPage";

// Admin Pages
import DashboardPage from "./admin/pages/DashboardPage";
import ProductTypePage from "./admin/productType/ProductTypePage";
import AccountPage from "./admin/account/AccountPage";
import BrandPage from "./admin/brand/BrandPage";
import ProductAdminPage from "./admin/product/ProductAdminPage";
import PostPageAdminPage from "./admin/post/PostPageAdminPage";
import CreateProductTypePage from "./admin/productType/CreateProductTypePage";
import CreateBrandPage from "./admin/brand/CreateBrandPage";
import CreateAccountPage from "./admin/account/CreateAccountPage";
import CreatePostPage from "./admin/post/CreatePostPage";
import CreateProductAdminPage from "./admin/product/CreateProductAdminPage";
import BillPage from "./admin/bill/BillPage";
import IndividualInfoPage from "./admin/individualInfo/IndividualInfoPage";
import AccountUpdateAdmin from "./admin/individualInfo/AccountUpdateAdmin";
import AccountDeleteAdmin from "./admin/individualInfo/AccountDeleteAdmin";

// Components
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

export {
  Fragment,
  Suspense,
  Route,
  Routes,
  Main,
  MainDashboard,
  HomePage,
  ProductPage,
  PostPage,
  ProductDetailsPage,
  SignInPage,
  SignUpPage,
  PostDetailsPage,
  CartPage,
  AccountUpdatePage,
  AccountInfoPage,
  AccountDeletePage,
  PaymentPage,
  DashboardPage,
  ProductTypePage,
  AccountPage,
  BrandPage,
  ProductAdminPage,
  PostPageAdminPage,
  CreateProductTypePage,
  CreateBrandPage,
  CreateAccountPage,
  CreatePostPage,
  CreateProductAdminPage,
  BillPage,
  IndividualInfoPage,
  AccountUpdateAdmin,
  AccountDeleteAdmin,
  ScrollToTop,
};
