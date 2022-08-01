import React from "react";

const ImageCard = (props) => {
  const { image } = props;
  // convert comma-separated tags into array
  const tags = image?.tags.split(",");
  return (
    <div className="block object-cover max-w-sm rounded overflow-hidden shadow-lg rounded-xl m-3">
      <img className="w-full" src={image?.webformatURL} alt={image?.tags} />
      <div className="px-6 pt-4 pb-2">
        {/* Map tags to display them */}
        {tags.map((tag) => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {/* Format tag to avoid whitespace in front */}
            {tag.trim()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
