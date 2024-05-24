import React from "react";

const InformationCard = ({ title, information }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 border-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="px-2 border-b-2"></div>
        <h2 className="text-lg line-clamp-2">{information}</h2>
        <a className="text-lg font-semibold text-lime-500" href="#">
          Read more &raquo;
        </a>
      </div>
    </div>
  );
};

export default InformationCard;
