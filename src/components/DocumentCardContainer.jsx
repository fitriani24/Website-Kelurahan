import React from "react";
import DocumentCard from "./DocumentCard";

const DocumentCardContainer = () => {
  const cards = [
    {
      id: 1,
      title: "Document 1",
      document:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quidem quibusdam voluptatibus! Eaque dolore incidunt veritatis obcaecati repellat dicta molestias similique autem. Saepe, temporibus esse? Iusto laborum libero nemo provident!",
    },
    {
      id: 2,
      title: "Document 2",
      document:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum earum magni magnam dolores reprehenderit et sapiente illum sunt voluptatem est obcaecati quam reiciendis facere placeat nisi maxime, quasi fugiat odit.",
    },
    {
      id: 3,
      title: "Document 3",
      document:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus necessitatibus minus explicabo est tempora, deserunt molestias vitae sunt, vel voluptas debitis sequi similique cupiditate officia commodi? Obcaecati quo dignissimos dolor.",
    },
    {
      id: 4,
      title: "Document 4",
      document:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloremque nesciunt dolorem a nobis, numquam, odit dignissimos voluptas recusandae atque delectus ratione ipsa perspiciatis! Voluptates, mollitia fugit. Veritatis, soluta officiis!",
    },
    {
      id: 5,
      title: "Document 5",
      document:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, totam officiis aperiam itaque similique quas molestias qui, ipsa numquam, reiciendis voluptate. Perspiciatis asperiores cupiditate iure doloremque. Magni sequi iure aliquam?",
    },
  ];

  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-1 gap-4">
        {cards.map((card) => (
          <DocumentCard
            key={card.id}
            title={card.title}
            document={card.document}
          />
        ))}
      </div>
    </div>
  );
};

export default DocumentCardContainer;
