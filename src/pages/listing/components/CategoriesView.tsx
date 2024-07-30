import { Strings, categories, colors, sizes } from "../../../constants";

const CategoriesView = () => {
  const strings = Strings.listing;

  return (
    <div className="w-72 px-4 ml-20 border-2 rounded-md mt-10">
      <label className="font-medium text-sm text-neutral-900 py-2 my-4 block ml-2">
        {strings.categories}
      </label>
      {categories.map((category) => (
        <>
          <div key={category.id} className="space-y-2 flex items-center mx-3">
            <input
              id={category.id}
              type="checkbox"
              className="h-4 w-4 text-neutral-600 border-gray-300 rounded focus:ring-neutral-500"
            />
            <label
              htmlFor={category.id}
              className="ml-2 text-sm font-normal text-neutral-600"
            >
              {category.label}
            </label>
          </div>
          <div className="h-0.5 bg-neutral-200 w-full" />
        </>
      ))}

      <label className="font-medium text-sm text-neutral-900 block mt-10 mb-2 ml-2">
        {strings.colors}
      </label>
      <div className="flex space-x-3 ml-2 mb-12">
        {colors.map((color) => (
          <div className="flex h-8 w-8 border border-black justify-center items-center rounded-full">
            <div
              key={color.id}
              style={{ backgroundColor: color.color }}
              className="h-6 w-6 rounded-full"
            />
          </div>
        ))}
      </div>

      <label className="font-medium text-sm text-neutral-900 block mt-10 mb-2 ml-2">
        {strings.size}
      </label>

      <div className="flex ml-2 mb-12 flex-wrap">
        {sizes.map((size) => (
          <div className="flex h-10 w-10 border border-neutral-200 justify-center items-center rounded-md mb-2 mr-3">
            {size.label}
          </div>
        ))}
      </div>

      <label className="font-medium text-sm text-neutral-900 block mt-10 mb-2 ml-2">
        {strings.price}
      </label>
    </div>
  );
};

export default CategoriesView;
