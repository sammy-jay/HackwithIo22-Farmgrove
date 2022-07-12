import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

import { Product } from "./components";
import { useStateContext } from "./context/StateContext";
import { products } from './lib/utils';


const ProductDetails = () => {
  const {_id} = useParams()
   const [product, setProduct] = useState(null)
   console.log(typeof _id)
//   const { imageList, name, details, price } = products.find(p => p._id === _id);
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(
      products.find((p) => p._id == _id),
      qty
    );

    setShowCart(true);
  };
  
  useEffect(() => {
    setProduct(() => products.find(p => p._id == _id))
  },[_id, index])
  
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container w-[450px]">
            <img
              src={product?.imageList[index]}
              alt=""
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {product?.imageList?.map((item, i) => (
              <img
                key={i}
                src={item}
                alt=""
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1 className="text-2xl font-bold">{product?.name}</h1>
          <div className="reviews">
            <div className="flex space-x-[1px]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(25)</p>
          </div>
          <h4>Details: </h4>
          <p>{product?.details}</p>
          <p className="price">₦{product?.price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc flex items-center">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() =>
                onAdd(
                  products.find((p) => p._id == _id),
                  qty
                )
              }
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products?.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
