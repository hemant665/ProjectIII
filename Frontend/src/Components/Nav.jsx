import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncuserlogout,asyncCurrentUser  } from "../Store/action/UserAction";
import { useEffect } from "react";

const Nav = () => {
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  console.log( "Nav: ", user?.users?.isAdmin)

  useEffect(() => {
    dispatch(asyncCurrentUser()); 
}, [dispatch]);

  const logooutHandler = () => {
    dispatch(asyncuserlogout());
    navigator("/")
  }
 

  return (
    <div className="flex justify-center items-center p-4 gap-10 text-xl">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      {user && user?.users?.isAdmin ? (
        <>
          <NavLink to="/admin/create-product">Create Products</NavLink>
          <button onClick={logooutHandler} className="bg-red-700 cursor-pointer px-1 rounded font-extralight">Log Out</button>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}
    </div>
  );
};

export default Nav;
