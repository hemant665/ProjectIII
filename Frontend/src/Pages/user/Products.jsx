import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const product = useSelector((state) => state.products.products);

  const renderAllProduct = product.map((data) => {
    return (
      <div
        className="border flex flex-col justify-between items-center gap-5"
        key={data.id}
      >
        <div className="flex flex-nowrap flex-col p-1">
          <img className=" object-cover " src={data.image} alt="" />
          <h1 className="mt-3 text-3xl font-light">{data.title.slice(0,17)}...</h1>
          <p className="text-xs">{data.category}</p>
          <small className="mt-5">{data.description.slice(0,80)}  ....More</small>
          <div className="flex justify-around mt-3">
            <p>{data.price}</p>
            <button className="p-1 border rounded">Add to Cart</button>
          </div>
          <Link to={`/product/${data.id}`} className="text-center mt-4">More Info</Link>
        </div>
      </div>
    );
  });

  return product.length > 0 ? (
    <div className="flex items-center">{renderAllProduct}</div>
  ) : (
    "Product Add Soon...."
  );
};

export default Products;
