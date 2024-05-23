// App.js
import {
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
} from "./imports";

function App() {
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
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
