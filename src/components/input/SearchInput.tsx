import React from "react";
import { Icons } from "../../constants/icons";

interface SearchInputProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onChange }) => {
  return (
    <div className="flex items-center rounded-lg border border-gray-300 focus:bg-gray-100 pr-1">
      <img src={Icons.searchIcon} className="ml-3 h-5 w-5 text-gray-400" />
      <input
        type="search"
        className="pl-4 pr-3 py-2 text-sm border-none focus:outline-none"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
