import React, { useEffect, useState } from "react";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState([]);

  const requestImages = async () => {
    //API_KEY should be an environment variable, for simplifying purposes it's hard-coded here.
    const API_KEY = "17555297-46a99d3dc7abf78679ec9e640";
    const URL =
      "https://pixabay.com/api/?key=" +
      API_KEY +
      "&q=" +
      encodeURIComponent(searchText);
    const data = await fetch(URL);
    const json = await data.json();
    if (parseInt(json.totalHits) > 0) {
      setImages(json.hits);
    } else {
      window.alert(
        "No images match your search, please try again with a diferent search text"
      );
    }
  };

  useEffect(() => {
    // initial search,
    requestImages();
  }, []);

  return (
    <div className="container justify-center">
      <header className="flex pt-10 justify-center">
        <h1 className="flex text-4xl font-medium">
          ReactJS Test:
          <span className="font-bold"> Image Search</span>
        </h1>
      </header>
      <div className="container px-3 py-2 mx-auto lg:pt-12 lg:px-20">
        <SearchBar
          setSearchText={setSearchText}
          searchText={searchText}
          requestImages={requestImages}
        />
        <ImageList search={searchText} images={images} />
      </div>
      <div class="p-4 bg-white shadow justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Nicolas Schuldt, 2022
        </span>
      </div>
    </div>
  );
}

export default App;
