import { Icons } from "../../constants";
import SearchInput from "../input/SearchInput";

const Navbar = () => {
  return (
    <nav className="flex px-36 pt-3 justify-between flex-row items-center">
      <button className="flex flex-row items-center space-x-2">
        <img src={Icons.logo} />
        <label className="font-extrabold text-xl">E-commerce</label>
      </button>

      <div className="space-x-10">
        <button>Home</button>
        <button>Categories</button>
        <button>About</button>
        <button>Contact us</button>
      </div>

      <div className="flex flex-row justify-between space-x-5">
        <SearchInput placeholder="Search products" onChange={() => {}} />
        <button>
          <img src={Icons.cart} />
        </button>
        <button>
          <img src={Icons.user} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
