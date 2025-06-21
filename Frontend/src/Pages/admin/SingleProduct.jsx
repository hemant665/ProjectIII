import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncDeleteProduct,
  asyncUpdateProduct,
} from "../../Store/action/ProductAction";
import { asyncUpdateUser } from "../../Store/action/UserAction";
import { ToastContainer, toast } from 'react-toastify';
const SingleProduct = () => {
  const { id } = useParams();
  const notify = () => toast.success("Product is Added To Cart");
  const { products } = useSelector((state) => state?.products);
  const { users } = useSelector((state) => state?.users);
  const product = products?.find((product) => product.id == id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: product?.title,
      price: product?.price,
      category: product?.category,
      image: product?.image,
      description: product?.description,
    },
  });

  const dispatch = useDispatch();
  const navigator = useNavigate();

  const UpdateProductHandler = (product) => {
    dispatch(asyncUpdateProduct(id, product));
    navigator("/products");
  };

  const AddToCartHandler = (product) => {
    const copyuser = { ...users, cart: [...users.cart] };
    notify();
    const cartData = copyuser.cart.findIndex(
      (c) => c?.product?.id == product?.id
    );

    if (cartData == "-1") {
      copyuser.cart.push({ product, quantity: 1 });
    } else {
      copyuser.cart[cartData] = {
        product,
        quantity: copyuser.cart[cartData].quantity + 1,
      };
    }

    dispatch(asyncUpdateUser(copyuser.id, copyuser));
  };

  const DeleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    navigator("/products");
  };

  return product ? (
    <div className="w-full flex flex-col gap-5">
      <div className="flex ">
        <div className="w-1/2">
          <img className="h-[310px]" src={product.image} alt="" />
        </div>
        <div className="flex flex-col gap-3 text-xl w-1/2">
          <h1 className="text-4xl">{product.title}</h1>
          <p>${product.price}</p>
          <p className="mt-10 text-sm">{product.description}</p>
          <div className="flex justify-between">
            {users && (
              <button
                className="bg-blue-700 p-2 rounded mt-15 cursor-pointer"
                onClick={() => AddToCartHandler(product)}
              >
                Add to Cart
              </button>
            )}
            {users?.isAdmin && (
              <button
                onClick={DeleteHandler}
                className="bg-red-700 p-2 rounded mt-15 cursor-pointer"
              >
                Delete Product
              </button>
            )}
          </div>
        </div>
        <ToastContainer/>
      </div>

      <hr className="mt-5 mb-10" />

      {users && users?.isAdmin && (
        <form
          onSubmit={handleSubmit(UpdateProductHandler)}
          className="flex flex-col gap-4 w-1/2"
        >
          <input
            {...register("title")}
            type="text"
            className="border-b-2 p-1 outline-none"
            placeholder="title"
          />
          <input
            {...register("price")}
            type="number"
            className="border-b-2 p-1 outline-none"
            placeholder="price"
          />
          <textarea
            {...register("description")}
            type="text"
            className="border-b-2 p-1 outline-none"
            placeholder="Write the description"
          />
          <input
            {...register("category")}
            type="text"
            className="border-b-2 p-1 outline-none"
            placeholder="category"
          />
          <input
            {...register("image")}
            type="url"
            className="border-b-2 p-1 outline-none"
            placeholder="image url"
          />
          <button className="bg-blue-600 cursor-pointer p-1 rounded">
            Update Product
          </button>
        </form>
      )}
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleProduct;
