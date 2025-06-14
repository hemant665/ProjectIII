import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../../Store/action/ProductAction";

const CreateProduct = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigator = useNavigate();

  const ProductCreateHandler = (product) => {
    product.id = nanoid();
    dispatch(asyncCreateProduct(product));
    navigator("/products");
  };

  return (
    <form
      onSubmit={handleSubmit(ProductCreateHandler)}
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
        Create Product
      </button>

      
    </form>
  );
};

export default CreateProduct;
