import React from "react";
import GaleriCard from "./GaleriCard";

const GaleriCardContainer = () => {
  const cards = [
    { id: 1, url: "/card.png", description: "Card 1" },
    { id: 2, url: "/card.png", description: "Card 2" },
    { id: 3, url: "/card.png", description: "Card 3" },
    { id: 4, url: "/card.png", description: "Card 4" },
    { id: 5, url: "/card.png", description: "Card 5" },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 px-4 md:px-24 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <GaleriCard
            key={card.id}
            url={card.url}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default GaleriCardContainer;
