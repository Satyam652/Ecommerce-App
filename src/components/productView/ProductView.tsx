import { Icons } from "../../constants";

interface ProductViewProps {
  image: string;
  name: string;
  price: string;
}

const ProductView: React.FC<ProductViewProps> = ({ image, name, price }) => {
  return (
    <div>
      <div className="relative group">
        <img src={image} className="w-60 h-80 rounded-md" />

        {/* Transparent Overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>

        {/* Favorite Icon Button */}
        <button className="absolute top-2 right-2 hidden group-hover:block shadow">
          ❤️ {/* Replace with actual favorite icon */}
        </button>

        {/* Add to Cart Button */}
        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-neutral-900 text-white py-2.5 w-full shadow rounded-md rounded-t-none font-light text-sm">
          Add to Cart
        </button>
      </div>

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
