import Button from "../../../components/button/Button";
import { Icons } from "../../../constants";

const BottomBannerView = () => {
  return (
    <div className="flex bg-neutral-white w-full h-304 px-52 justify-between my-24">
      <div className="flex flex-col justify-center">
        <label className="font-semibold text-3xl">
          Browse Our Fashion Paradise!
        </label>
        <label className="text-xs text-neutral-500 mb-10 mt-3">
          Step into a world of style and explore our diverse collection of
          clothing categories.
        </label>
        <Button label="Start Browsing" />
      </div>
      <div className="">
        <img src={Icons.categoryImage} className="" />
      </div>
    </div>
  );
};

export default BottomBannerView;
