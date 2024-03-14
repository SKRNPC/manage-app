import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/features/searchSlice";

function SearchBar() {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  return (
    <div className="flex items-center">
      <input
        className="h-full w-full px-2 border border-gray-300 rounded"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
