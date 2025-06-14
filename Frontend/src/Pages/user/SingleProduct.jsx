import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncDeleteProduct,
  asyncUpdateProduct,
} from "../../Store/action/ProductAction";

const SingleProduct = () => {
  const { id } = useParams();
  const {
    products: { products },
    users: { users },
  } = useSelector((state) => state);
  const product = products?.find((product) => product.id == id);
  console.log(product, users);

  const user = useSelector((state) => state.users);
  console.log("user :" ,user)


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

  const DeleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    navigator("/products");
  };

  return product ? (
    <div className="w-full flex flex-col gap-5">
      <div className=" flex">
        <div className="">
          <img className="w-[80%]" src={product.image} alt="" />
        </div>
        <div className="flex flex-col gap-3 text-xl">
          <h1 className="text-4xl">{product.title}</h1>
          <p>{product.category}</p>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <button
            onClick={DeleteHandler}
            className="bg-red-700 p-2 rounded mt-25 cursor-pointer"
          >
            Delete Product
          </button>
        </div>
      </div>

      <hr className="mt-5 mb-10" />

      {user.isAdmin ? (
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
      ) : (
        ""
      )}
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleProduct;
