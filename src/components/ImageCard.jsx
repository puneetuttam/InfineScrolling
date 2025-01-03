import React from "react";

const ImageCard = ({ image }) => {
    return (
        <div className="border bg-gray-100 p-3 rounded-lg shadow-sm transition hover:scale-105 hover:bg-gray-200">
            <img
                src={image.thumbnailUrl}
                alt={image.title}
                className="w-full h-[150px] object-cover rounded-md"
                loading="lazy"
            />
            <h4 className="mt-2 text-lg font-medium text-gray-700">
                {image.title}
            </h4>
        </div>
    );
};

export default ImageCard;
