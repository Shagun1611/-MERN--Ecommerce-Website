/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const Product = ({ product }) => {
  return (
    <div className="w-[25rem] ml-[3rem] p-10 relative">
      <div className="relative">
        <img
          src={product.image} // This is for server when you want to view locally only use src={product.image} and for production use src={`${BASE_URL}${product.image}`}
          alt={product.name}
          className="w-[30rem] rounded"
        />
        <HeartIcon product={product} />
      </div>

      <div className="p-4">
        <Link to={`/product/${product._id}`}>
          <h2 className="flex justify-between items-center">
            <div className="text-lg">{product.name}</div>
            <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
              Rs. {product.price}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Product;
