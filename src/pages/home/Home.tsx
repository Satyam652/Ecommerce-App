import { useState } from "react";
import {
  BottomView,
  Navbar,
  NewsLetterView,
  TopDiscountBanner,
} from "../../components";
import ProductView from "../../components/productView/ProductView";
import { Routes, productList, productList2 } from "../../constants";
import BottomBannerView from "./components/BottomBannerView";
import MiddleView from "./components/MiddleView";
import TopBannerView from "./components/TopBannerView";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isActiveButton, setIsActiveButton] = useState<number>(1);

  const navigate = useNavigate();
  return (
    <>
      <TopDiscountBanner />
      <Navbar />
      <TopBannerView onClick={() => navigate(Routes.products)} />
      <MiddleView />

      <label className="font-medium text-neutral-400 text-xs block text-center">
        SHOP NOW
      </label>
      <label className="block text-center font-bold text-2xl text-neutral-900 mt-1">
        Best Selling
      </label>
      <div className="flex justify-around mt-16">
        {productList.map((product) => (
          <ProductView
            image={product.image}
            price={product.price}
            name={product.name}
          />
        ))}
      </div>
      <BottomBannerView />

      <div className="flex justify-center space-x-10">
        <button
          className={
            isActiveButton === 1
              ? "border py-0.5 px-4 rounded-full mr-3 text-sm font-medium text-neutral-900 border-neutral-200"
              : "text-sm text-neutral-500"
          }
          onClick={() => setIsActiveButton(1)}
        >
          Featured
        </button>
        <button
          className={
            isActiveButton === 2
              ? "border py-0.5 px-4 rounded-full mr-3 text-sm font-medium text-neutral-900 border-neutral-200"
              : "text-sm text-neutral-500"
          }
          onClick={() => setIsActiveButton(2)}
        >
          Latest
        </button>
      </div>

      <div className="flex justify-around mt-16">
        {productList2.map((product) => (
          <ProductView
            image={product.image}
            price={product.price}
            name={product.name}
          />
        ))}
      </div>

      <NewsLetterView />
      <BottomView />
    </>
  );
};

export default Home;
