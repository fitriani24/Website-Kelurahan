import React from "react";
import NewsCard from "./NewsCard";

const NewsCardContainer = () => {
  const cards = [
    {
      id: 1,
      url: "/card.png",
      title: "Card 1",
      news: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium accusamus dolore voluptatum, atque et nisi? Repudiandae reprehenderit excepturi voluptatum.",
      date: "2022-01-01",
      description: "Card 1",
    },
    {
      id: 2,
      url: "/card.png",
      title: "Card 2",
      news: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos porro blanditiis nesciunt natus ratione molestias explicabo quas a repellat nobis.",
      date: "2022-01-01",
      description: "Card 2",
    },
    {
      id: 3,
      url: "/card.png",
      title: "Card 2",
      news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aperiam accusantium iste provident aliquid quibusdam dolore quae quidem, earum maxime?",
      date: "2022-01-01",
      description: "Card 2",
    },
    {
      id: 4,
      url: "/card.png",
      title: "Card 2",
      news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis ipsa eius dolore eos recusandae iure pariatur sint enim eligendi?",
      date: "2022-01-01",
      description: "Card 2",
    },
    {
      id: 5,
      url: "/card.png",
      title: "Card 2",
      news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto placeat consequuntur aliquam tenetur voluptas aliquid quod veniam dolore incidunt fugit?",
      date: "2022-01-01",
      description: "Card 2",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        {cards.map((card) => (
          <NewsCard
            key={card.id}
            url={card.url}
            description={card.description}
            news={card.news}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCardContainer;
