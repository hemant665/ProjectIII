import { Route, Routes } from "react-router-dom";
import Home from "../Pages/user/Home";
import Login from "../Pages/user/Login";
import Register from "../Pages/user/Register";
import Products from "../Pages/user/Products";
import CreateUser from "../Pages/admin/CreateUser";
import UpdateUser from "../Pages/admin/UpdateUser";
import CreateProduct from "../Pages/admin/CreateProduct";
import SingleProduct from "../Pages/user/SingleProduct";




const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />


        <Route path="/admin/create-user" element={<CreateUser />} />
        <Route path="/admin/create-product" element={<CreateProduct />} />
        <Route path="/admin/update-user" element={<UpdateUser />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
