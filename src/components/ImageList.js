import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const { images } = props;
  return (
    <section className="overflow-hidden text-gray-700 ">
      <div className="container px-3 py-2 mx-auto lg:pt-12 lg:px-20">
        <div className="flex flex-wrap -m-1 md:-m-2">
          {images.map((img) => (
            <div className="flex flex-wrap w-1/3" key={img?.id}>
              <div className="w-full p-1 md:p-2">
                <ImageCard image={img} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ImageList;
