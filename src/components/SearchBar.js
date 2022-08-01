import React from "react";

const SearchBar = (props) => {
  const { searchText, setSearchText, requestImages } = props;
  const handleSubmit = () => {
    requestImages();
    setSearchText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center px-3 py-2 mx-auto lg:px-20"
    >
      <div className="relative w-full mr-2">
        <input
          type="search"
          id="default-search"
          className="w-full bg-gray-200 rounded-lg px-4 py-2"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          required
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
