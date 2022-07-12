import React from "react";
import { Product, FooterBanner, HeroBanner } from "./components";

const bannerData = [
  {
    discount: "",
    largeText1: "ONIONS",
    largeText2: "",
    saleTime: "",
    smallText: "pepper",
    midText: "Vegies",
    desc: "🧅🧅 description here...",
    product: "onions",
    buttonText: "Shop Now",
    image:
      "https://images.pexels.com/photos/2280569/pexels-photo-2280569.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    discount: "10% OFF",
    largeText1: "Fine",
    largeText2: "Carrots",
    saleTime: "29 June to 29 July",
    smallText: "...",
    midText: "Mid year Sale",
    desc: "🥕🥕 description here...",
    product: "carrots",
    buttonText: "Shop Now",
    image:
      "https://images.pexels.com/photos/1150682/pexels-photo-1150682.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

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

const Home = () => {
  return (
    <div className="max-w-[1200px] lg:mx-auto">
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>speaker There are many variations passages</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[1]} />
    </div>
  );
};
export default Home;
