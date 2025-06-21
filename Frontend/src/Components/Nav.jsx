import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { asyncCurrentUser } from "../Store/action/UserAction";
import { useEffect } from "react";

const Nav = () => {
  const users = useSelector((state) => state?.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center p-9 gap-10 text-xl font-bold ">
      {users?.users ? (
        <>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "",
            })}
          >
            Home
          </NavLink>
          <NavLink to="/cart">Cart</NavLink>
          {users && users?.users?.isAdmin && (
            <NavLink to="/admin/create-product">Create Products</NavLink>
          )}
          <NavLink to="/admin/user-profile">Setting</NavLink>
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
