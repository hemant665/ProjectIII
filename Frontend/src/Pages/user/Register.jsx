import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncregisteruser } from "../../Store/action/UserAction";
import { useDispatch } from "react-redux";
import { nanoid } from 'nanoid'


const Register = () => {

  const {register ,handleSubmit} = useForm()

  const dispatch = useDispatch();
  const navigator = useNavigate();
  
  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    console.log(user)
    dispatch(asyncregisteruser(user))
    navigator("/login")
  }

  return (
    <form onSubmit={handleSubmit(RegisterHandler)} className="flex flex-col gap-4 w-1/2">
      <input {...register("userName")} type="text" className="border-b-2 p-1 outline-none" placeholder="Jone-Doe" />
      <input {...register("email")} type="email" className="border-b-2 p-1 outline-none" placeholder="example@gmail.com" />
      <input {...register("password")} type="password" className="border-b-2 p-1 outline-none" placeholder="*****" />
      <button className="bg-blue-600 cursor-pointer p-1 rounded"> Register</button>
      
      <p className="mt-5">Already have an account <NavLink to="/login" className="text-blue-400">Login</NavLink></p>

    </form>
  )
}

export default Register