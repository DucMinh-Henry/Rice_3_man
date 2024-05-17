import React, { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./layouts/Main";
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

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <HomePage></HomePage>
                </>
              }
            ></Route>
          </Route>
          <Route element={<Main></Main>}>
            <Route
              path="/products"
              element={
                <>
                  <ProductPage></ProductPage>
                </>
              }
            ></Route>
          </Route>
          <Route element={<Main></Main>}>
            <Route
              path="/product/:productId"
              element={
                <>
                  <ProductDetailsPage></ProductDetailsPage>
                </>
              }
            ></Route>
          </Route>
          <Route element={<Main></Main>}>
            <Route
              path="/posts"
              element={
                <>
                  <PostPage></PostPage>
                </>
              }
            ></Route>
          </Route>
          <Route element={<Main></Main>}>
            <Route
              path="/post/:postId"
              element={
                <>
                  <PostDetailsPage></PostDetailsPage>
                </>
              }
            ></Route>
          </Route>
          <Route element={<Main></Main>}>
            <Route
              path="/carts"
              element={
                <>
                  <CartPage></CartPage>
                </>
              }
            ></Route>
          </Route>
          <Route element={<Main></Main>}>
            <Route
              path="/infoAccount"
              element={
                <>
                  <AccountInfoPage></AccountInfoPage>
                </>
              }
            ></Route>
          </Route>
          <Route element={<Main></Main>}>
            <Route
              path="/updateAccount"
              element={
                <>
                  <AccountUpdatePage></AccountUpdatePage>
                </>
              }
            ></Route>
          </Route>
          <Route element={<Main></Main>}>
            <Route
              path="/deleteAccount"
              element={
                <>
                  <AccountDeletePage></AccountDeletePage>
                </>
              }
            ></Route>
          </Route>
          <Route
            path="/login"
            element={
              <>
                <SignInPage></SignInPage>
              </>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <>
                <SignUpPage></SignUpPage>
              </>
            }
          ></Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
