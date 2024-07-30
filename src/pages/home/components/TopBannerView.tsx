import Button from "../../../components/button/Button";
import { Icons } from "../../../constants";

interface TopBannerViewProps {
  onClick: () => void;
}

const TopBannerView: React.FC<TopBannerViewProps> = ({ onClick }) => {
  return (
    <div className="flex bg-neutral-white w-full h-h-440 mt-5 px-52 justify-between">
      <div className="flex flex-col pt-40">
        <label className="font-semibold text-3xl">Fresh Arrivals Online</label>
        <label className="text-xs text-neutral-500 mb-10 mt-3">
          Discover Our Newest Collection Today.
        </label>
        <Button label="View Collection" onClick={onClick} />
      </div>
      <div className="pt-16">
        <img src={Icons.star} className="absolute" />
        <img src={Icons.ellipse} className="absolute" />
        <img src={Icons.heroImage} className="relative left-20" />
      </div>
    </div>
  );
};

export default TopBannerView;
