import React from "react";

const categorybox = () => {
  const categorys = [
    {
      id: 1,
      img: "/img/lengha_1.webp",
      name: "langha",
    },
    {
      id: 2,
      img: "/img/lengha_1.webp",
      name: "choli",
    },
    {
      id: 3,
      img: "/img/lengha_1.webp",
      name: "allover",
    },
    {
      id: 4,
      img: "/img/lengha_1.webp",
      name: "choli",
    },
    {
      id: 5,
      img: "/img/lengha_1.webp",
      name: "allover",
    },
  ];
  return (
    <>
      <div className="w-[100%] h-[40vh] flex items-center gap-2">
        {categorys.map((category) => (
          <div key={category.id} className="w-auto hover:w-[60%] h-[100%]">
            <img
              src={category.img}
              alt={category.name}
              className="w-[100%] h-[100%]"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default categorybox;
