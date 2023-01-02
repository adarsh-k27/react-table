import React from "react";

function GlobalFilter({ filter, setFilter }) {
  return (
    <div className='ml-4 w-72 rounded-sm flex flex-row gap-2 h-auto px-4 py-4 items-center bg-green-600'>
      <p className='text-sm font-bold text-white/90'>Global Filter</p>
      <input
        type={"text"}
        placeholder='Search'
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        className='w-[10rem] text-base text-gray-500 font-serif border-none focus:border focus:outline focus:outline-blue-500'
      ></input>
    </div>
  );
}

export default GlobalFilter;
