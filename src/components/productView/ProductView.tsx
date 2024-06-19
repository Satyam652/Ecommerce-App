import { Icons } from "../../constants";

interface ProductViewProps {
  image: string;
  name: string;
  price: string;
}

const ProductView: React.FC<ProductViewProps> = ({ image, name, price }) => {
  return (
    <div>
      <img src={image} className="w-60 h-80"/>
      <label className="text-sm font-medium text-neutral-900 block mt-5 mb-2">
        {name}
      </label>
      <div>
        <label className="border py-0.5 px-4 rounded-full mr-3 text-xs font-medium text-neutral-900 border-neutral-200">
          IN STOCK
        </label>
        <label className="text-sm text-neutral-600">{price}</label>
      </div>
    </div>
  );
};

export default ProductView;
