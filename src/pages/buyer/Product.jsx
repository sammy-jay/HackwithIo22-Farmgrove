import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

import { Product } from "./components";
import { useStateContext } from "./context/StateContext";


const products = [
  {
    _id: 1001,
    name: "Bass Headphones",
    price: 39,
    image:
      "https://cdn.sanity.io/images/kyml1h03/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
    slug: "headphones",
  },
  {
    _id: 1002,
    name: "Bass Headphones",
    price: 39,
    image:
      "https://cdn.sanity.io/images/kyml1h03/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
    slug: "headphones",
  },
  {
    _id: 1003,
    name: "Bass Headphones",
    price: 39,
    image:
      "https://cdn.sanity.io/images/kyml1h03/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
    slug: "headphones",
  },
  {
    _id: 1004,
    name: "Bass Headphones",
    price: 39,
    image:
      "https://cdn.sanity.io/images/kyml1h03/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
    slug: "headphones",
  },
  {
    _id: 1005,
    name: "Bass Headphones",
    price: 39,
    image:
      "https://cdn.sanity.io/images/kyml1h03/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
    slug: "headphones",
  },
];

const product = {
  _id: 1000,
  image: [
    "https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/144206/pexels-photo-144206.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/872400/pexels-photo-872400.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/4197445/pexels-photo-4197445.jpeg?auto=compress&cs=tinysrgb&w=400",
  ],
  slug: "onions",
  name: "Onions",
  details:
    "🌾 🧅 🥕 🥬 👨🏼‍🌾 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro quod omnis ducimus provident laborum, id reiciendis perspiciatis fugit, vero, dicta tenetur harum? Doloremque labore dignissimos alias odio quaerat eum.",
  price: 39,
};

const ProductDetails = () => {
  const {slug} = useParams()
  console.log(slug)
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container w-[400px]">
            <img src={image[index]} alt="" className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
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
          <h1 className="text-2xl font-bold">{name}</h1>
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
          <p>{details}</p>
          <p className="price">₦{price}</p>
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
              onClick={() => onAdd(product, qty)}
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
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
