import React from "react";
import { Product, FooterBanner, HeroBanner } from "./components";
import { products, bannerData } from './lib/utils';





const Home = () => {
  return (
    <div className="max-w-[1200px] lg:mx-auto">
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Seller Products</h2>
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
