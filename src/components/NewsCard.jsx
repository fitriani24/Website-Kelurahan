import React from "react";
import Image from "next/image";

const NewsCard = ({ url, description, news }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        className="w-full h-72 object-cover"
        src={url}
        width={300}
        height={300}
        alt={description}
      />

      <div className="p-4">
        <h2 className="text-lg line-clamp-2">{news}</h2>
        <a className="text-lg font-semibold text-lime-500" href="#">
          Read more &raquo;
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
