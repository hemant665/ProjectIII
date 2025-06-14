import MainRoutes from "./Routes/MainRoutes";
import Nav from "./Components/Nav";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { asyncLoadProducts } from "./Store/action/ProductAction";
import { asyncCurrentUser } from "./Store/action/UserAction";


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncLoadProducts())
    dispatch(asyncCurrentUser())
  })
  
  
  return (
    <div className="bg-zinc-700 h-screen w-full text-white px-[10%] overflow-auto">
      <Nav />

      <div className="mt-10">
        <MainRoutes />
      </div>
    </div>
  );
};

export default App;
