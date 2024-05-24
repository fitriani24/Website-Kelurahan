import React from "react";
import Image from "next/image";

const GaleriCard = ({ url, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        className="w-full h-48 object-cover"
        src={url}
        width={300}
        height={300}
        alt={description}
      />
    </div>
  );
};

export default GaleriCard;
