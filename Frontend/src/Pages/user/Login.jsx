import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncuserlogin } from "../../Store/action/UserAction";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const SubmitHandler = (user) => {
    dispatch(asyncuserlogin(user));
    navigate("/")
  };


  return (
    <form onSubmit={handleSubmit(SubmitHandler)} className="flex flex-col gap-4 w-1/2">
      <input {...register("email")} type="email" className="border-b-2 p-1 outline-none" placeholder="example@gmail.com" />
      <input {...register("password")} type="password" className="border-b-2 p-1 outline-none" placeholder="*****" />
      <button className="bg-blue-600 cursor-pointer p-1 rounded">Login</button>
      
      <p className="mt-5">
        Don’t have an account?{" "}
        <NavLink to="/register" className="text-blue-400">Register</NavLink>
      </p>
    </form>
  );
};

export default Login;
