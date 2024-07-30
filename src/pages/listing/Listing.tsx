import { Navbar, TopDiscountBanner } from "../../components";
import { Icons, Strings } from "../../constants";
import CategoriesView from "./components/CategoriesView";
import ProductListView from "./components/ProductListView";

const Listing = () => {
  const strings = Strings.listing;

  return (
    <>
      <TopDiscountBanner />
      <Navbar />

      <div className="flex w-full py-5 px-16 bg-neutral-100 mt-7 items-center">
        <label className="font-medium text-sm text-neutral-500">
          {strings.eCommerce}
        </label>
        <img src={Icons.rightArrow} className="h-6 w-6" />

        <label className="font-medium text-sm text-neutral-900">
          {strings.search}
        </label>
      </div>

      <div>
        <CategoriesView />
        <ProductListView />
      </div>
    </>
  );
};

export default Listing;
