/* eslint-disable react-hooks/exhaustive-deps */



import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateUser } from "../../Store/action/UserAction";
import { useEffect, useState } from "react";
import axios from "../../Api/axiosconfig";
import InfiniteScroll from "react-infinite-scroll-component";
import { ToastContainer, toast } from 'react-toastify';

const Products = () => {
  const dispatch = useDispatch();
  const notify = () => toast.success("Product is Added To Cart");
  const { users } = useSelector((state) => state.users);

  const [products, setProducts] = useState([]);
  const [hasMore, sethasMore] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`/products?_limit=5&_start=${products.length}`);
      console.log("Requesting:", `/products?_limit=5&_start=${products.length}`);
      console.log("Current products.length:", products.length);
      console.log("Received:", data);
  
      if(data.length == 0){
        sethasMore(false)
      } else{
        sethasMore(true)
        setProducts((preproducts) => [...preproducts, ...data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  },[]);

  const AddToCartHandler = (product) => {
    const copyuser = { ...users, cart: [...users.cart] };

    const cartData = copyuser.cart.findIndex(
      (c) => c?.product?.id == product?.id
    );
    notify()

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

  const renderAllProduct = products.map((product) => {
    return (
      <div
        className="border flex justify-between items-center gap-5"
        key={product.id}
      >
        <div className="flex  w-[270px] flex-col p-1">
          <img
            className=" object-cover h-[200px] "
            src={product.image}
            alt=""
          />
          <h1 className="mt-3 text-2xl font-light">
            {product.title.slice(0, 14)}...
          </h1>
          <p className="text-xs">{product.category}</p>
          <small className="mt-5">
            {product.description.slice(0, 60)} ....More
          </small>
          <div className="flex justify-between items-center mt-3">
            <p>{product.price}</p>
            <button
              onClick={() => AddToCartHandler(product)}
              className="px-2 py-1 border cursor-pointer rounded"
            >
              Add to Cart
            </button>
          </div>
          <Link to={`/product/${product.id}`} className="text-center mt-4">
            More Info
          </Link>
        </div>
      </div>
    );
  });

  return products.length > 0 ? (
    <div className="pb-13">
      <InfiniteScroll
        dataLength={products.length}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        next={fetchProducts}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>No more products to show 😎</b>
          </p>
        }


        className="flex gap-4 justify-cente flex-wrap items-center "
      >
        {renderAllProduct}
      </InfiniteScroll>
      <ToastContainer />
    </div>
  ) : (
    "Product Add Soon...."
  );
};

export default Products;
