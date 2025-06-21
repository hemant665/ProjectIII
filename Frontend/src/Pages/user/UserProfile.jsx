// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  asyncDeleteUser,
  asyncUpdateUser,
  asyncuserlogout,
} from "../../Store/action/UserAction";

const UserProfile = () => {
  const { users } = useSelector((state) => state?.users);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      userName: users?.userName,
      email: users?.email,
      password: users?.password,
    },
  });

  const dispatch = useDispatch();
  const navigator = useNavigate();

  const UserUpdateHandler = (user) => {
    dispatch(asyncUpdateUser(users.id, user));
    navigator("/products");
  };

  const DeleteHandler = () => {
    dispatch(asyncDeleteUser(users.id));
    navigator("/login");
  };

  const logooutHandler = () => {
    dispatch(asyncuserlogout());
    navigator("/login");
  };

  return (
    <form
      onSubmit={handleSubmit(UserUpdateHandler)}
      className="flex flex-col gap-4 w-1/2"
    >
      <input
        {...register("userName")}
        type="text"
        className="border-b-2 p-1 outline-none"
        placeholder="userName"
      />
      <input
        {...register("email")}
        type="email"
        className="border-b-2 p-1 outline-none"
        placeholder="email"
      />
      <input
        {...register("password")}
        type="text"
        className="border-b-2 p-1 outline-none"
        placeholder="Write the password"
      />

      <div className="flex justify-between">
        <button
          onClick={UserUpdateHandler}
          className="bg-blue-600 cursor-pointer p-1 rounded"
        >
          Update User
        </button>
        <button
          type="button"
          onClick={DeleteHandler}
          className="bg-blue-600 cursor-pointer p-1 rounded"
        >
          Delete User
        </button>
      </div>
      <div className=" mt-5">
        {users && (
          <button
            onClick={logooutHandler}
            className="bg-red-700 cursor-pointer px-2 py-1 rounded font-extralight"
          >
            Log Out
          </button>
        )}
      </div>
    </form>
  );
};

export default UserProfile;
