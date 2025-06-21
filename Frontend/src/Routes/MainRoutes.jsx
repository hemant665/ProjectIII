import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AuthWrapper from "./AuthWrapper";
import UnauthWrapper from "./UnauthWrapper";

const Login = lazy(() => import("../Pages/user/Login"));
const Register = lazy(() => import("../Pages/user/Register"));
const Products = lazy(() => import("../Pages/user/Products"));
const CreateProduct = lazy(() => import("../Pages/admin/CreateProduct"));
const SingleProduct = lazy(() => import("../Pages/admin/SingleProduct"));
const UserProfile = lazy(() => import("../Pages/user/UserProfile"));
const PageNotFound = lazy(() => import("../Pages/user/PageNotFound"));
const Cart = lazy(() => import("../Pages/user/Cart"));

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />

        <Route
          path="/login"
          element={
            <UnauthWrapper>
              <Login />
            </UnauthWrapper>
          }
        />
        <Route
          path="/register"
          element={
            <UnauthWrapper>
              {" "}
              <Register />
            </UnauthWrapper>
          }
        />
        <Route
          path="/cart"
          element={
            <AuthWrapper>
              {" "}
              <Cart />
            </AuthWrapper>
          }
        />
        <Route
          path="/product/:id"
          element={
            <AuthWrapper>
              <SingleProduct />
            </AuthWrapper>
          }
        />
        <Route path="/*" element={<PageNotFound />} />

        <Route
          path="/admin/user-profile"
          element={
            <AuthWrapper>
              {" "}
              <UserProfile />
            </AuthWrapper>
          }
        />
        <Route
          path="/admin/create-product"
          element={
            <AuthWrapper>
              <CreateProduct />
            </AuthWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default MainRoutes;
