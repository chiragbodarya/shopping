import React, { useState } from 'react'

const quantitybox = () => {
    const [number, setNumber] = useState(1);
  const handleSubtract = () => {
    setNumber((prevNumber) => Math.max(prevNumber - 1, 0));
  };

  const handleAdd = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const handleChange = (event) => {
    const inputValue = Number(event.target.value);
    setNumber(isNaN(inputValue) ? 0 : Math.max(inputValue, 0));
  };
  return (
    <>
      <div className="border-2 border-[#1a4499] flex items-center text-[16px] text-[#0f2757] font-bold w-max">
        <button
          onClick={handleSubtract}
          className="border-r-2 border-[#1a4499] text-center p-2"
        >
          -
        </button>
        <input
          type="number"
          value={number}
          onChange={handleChange}
          pattern="[0-9]{5}"
          className="text-center w-14 focus:outline-none scrollbar_hidden bg-transparent"
        />
        <button
          onClick={handleAdd}
          className="border-l-2 border-[#1a4499] p-2 text-center"
        >
          +
        </button>
      </div>
    </>
  );
};

export default quantitybox;
