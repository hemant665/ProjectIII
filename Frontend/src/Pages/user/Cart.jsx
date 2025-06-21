/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../../Store/action/UserAction";

const Cart = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state?.users);
  const { products } = useSelector((state) => state.products);

  console.log();

  const DecreaseQuantityHandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };

    if (copyuser.cart[index].quantity > 1) {
      copyuser.cart[index] = {
        product,
        quantity: copyuser.cart[index].quantity - 1,
      };
    } else {
      console.log("produt DEleted");
      copyuser.cart.splice(index, 1);
    }

    dispatch(asyncUpdateUser(copyuser.id, copyuser));
  };

  const IncreaseQuantityHandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };

    copyuser.cart[index] = {
      product,
      quantity: copyuser.cart[index].quantity + 1,
    };

    dispatch(asyncUpdateUser(copyuser.id, copyuser));
  };

  const cartItems = users?.cart.map((c, index) => (
    <li
      key={c.product.id}
      className="flex justify-between items-center bg-zinc-500 rounded p-2"
    >
      <img
        className="h-[90px] w-[150px] object-cover"
        src={c.product.image}
        alt=""
      />
      <div className="flex flex-col justify-start">
        <h1 className="font-bold">{c.product.title}</h1>
        <p>{c.product.description.slice(0, 50)}.....</p>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <p className="font-bold">Price</p>
        <p>{c.product.price * c.quantity}</p>
      </div>
      <p className="flex flex-col gap-3 items-center">
        <p className="font-bold">Quantity</p>
        <div className="flex gap-3">
          <button
            onClick={() => DecreaseQuantityHandler(index, c.product)}
            className="text-2xl cursor-pointer"
          >
            -
          </button>
          <span className="bg-zinc-700 px-3 flex items-center rounded">
            {c.quantity}
          </span>
          <button
            onClick={() => IncreaseQuantityHandler(index, c.product)}
            className="text-2xl cursor-pointer"
          >
            +
          </button>
        </div>
      </p>
    </li>
  ));

  return users.cart.length > 0 ? (
    <ul className="flex flex-col gap-3 ">{cartItems}</ul>
  ) : (
    "Cart is Empty"
  );
};

export default Cart;
