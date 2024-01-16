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
          <div
            key={category.id}
            className="relative w-auto hover:w-[60%] hover:transition ease-in-out duration-700 h-[100%] cursor-pointer"
          >
            <div className="w-[100%] h-[100%]">
              <img
                src={category.img}
                alt={category.name}
                className="w-[100%] h-[100%]"
              />
            </div>
            <p className="absolute bottom-0 w-[100%] h-[100%] hover:h-max p-5 bg-[#707070] opacity-80">
              <p className="font-black text-[20px] text-slate-800">woman</p>
              <p className="font-black text-[20px] text-slate-800">langha</p>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default categorybox;
