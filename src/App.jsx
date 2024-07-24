import { useDispatch, useSelector } from "react-redux";
import { Fragment, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
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
} from "./imports";
import { authRefreshToken, authUpdateUser } from "./store/auth/auth-slice";
import { getToken, logOut } from "./utils/auth";
import ProtectRoute from "./routes/ProtectRoute";

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getToken();
      // console.log("useEffect ~ access_token:", access_token);
      dispatch(
        authUpdateUser({
          user: user,
          accessToken: access_token,
        })
      );
    } else {
      const { refresh_token } = getToken();
      if (refresh_token) {
        dispatch(authRefreshToken(refresh_token));
      } else {
        dispatch(authUpdateUser({}));
        logOut();
      }
    }
  }, [dispatch, user]);

  return (
    <Fragment>
      <ScrollToTop />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route element={<Main />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route
              path="/product/:productId"
              element={<ProductDetailsPage />}
            />
            <Route path="/posts" element={<PostPage />} />
            <Route path="/post/:postId" element={<PostDetailsPage />} />
            <Route path="/carts" element={<CartPage />} />
            <Route path="/infoAccount" element={<AccountInfoPage />} />
            <Route path="/updateAccount" element={<AccountUpdatePage />} />
            <Route path="/deleteAccount" element={<AccountDeletePage />} />
          </Route>
          <Route path="/payment" element={<PaymentPage />} />
          {/* <Route path="/admin" element={<ProtectRoute roles={[1]} />}> */}
          <Route element={<MainDashboard />}>
            <Route path="/admin/dashboard" element={<DashboardPage />} />
            <Route path="/admin/product-type" element={<ProductTypePage />} />
            <Route
              path="/admin/product-type/create"
              element={<CreateProductTypePage />}
            />
            <Route path="/admin/account" element={<AccountPage />} />
            <Route
              path="/admin/account/create"
              element={<CreateAccountPage />}
            />
            <Route path="/admin/brand" element={<BrandPage />} />
            <Route path="/admin/brand/create" element={<CreateBrandPage />} />
            <Route path="/admin/post" element={<PostPageAdminPage />} />
            <Route path="/admin/post/create" element={<CreatePostPage />} />
            <Route path="/admin/product" element={<ProductAdminPage />} />
            <Route
              path="/admin/product/create"
              element={<CreateProductAdminPage />}
            />
            <Route path="/admin/order" element={<BillPage />} />
            <Route path="/admin/profile" element={<IndividualInfoPage />} />
            <Route
              path="/admin/profile-update"
              element={<AccountUpdateAdmin />}
            />
            <Route
              path="/admin/profile-delete"
              element={<AccountDeleteAdmin />}
            />
          </Route>
          {/* </Route> */}
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
