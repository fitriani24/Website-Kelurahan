import React from "react";
import InformationCard from "./InformationCard";

const InformationCardContainer = () => {
  const cards = [
    {
      id: 1,
      title: "Information 1",
      information:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quidem quibusdam voluptatibus! Eaque dolore incidunt veritatis obcaecati repellat dicta molestias similique autem. Saepe, temporibus esse? Iusto laborum libero nemo provident!",
    },
    {
      id: 2,
      title: "Information 2",
      information:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum earum magni magnam dolores reprehenderit et sapiente illum sunt voluptatem est obcaecati quam reiciendis facere placeat nisi maxime, quasi fugiat odit.",
    },
    {
      id: 3,
      title: "Information 3",
      information:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus necessitatibus minus explicabo est tempora, deserunt molestias vitae sunt, vel voluptas debitis sequi similique cupiditate officia commodi? Obcaecati quo dignissimos dolor.",
    },
    {
      id: 4,
      title: "Information 4",
      information:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloremque nesciunt dolorem a nobis, numquam, odit dignissimos voluptas recusandae atque delectus ratione ipsa perspiciatis! Voluptates, mollitia fugit. Veritatis, soluta officiis!",
    },
    {
      id: 5,
      title: "Information 5",
      information:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, totam officiis aperiam itaque similique quas molestias qui, ipsa numquam, reiciendis voluptate. Perspiciatis asperiores cupiditate iure doloremque. Magni sequi iure aliquam?",
    },
  ];

  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-1 gap-4">
        {cards.map((card) => (
          <InformationCard
            key={card.id}
            title={card.title}
            information={card.information}
          />
        ))}
      </div>
    </div>
  );
};

export default InformationCardContainer;
