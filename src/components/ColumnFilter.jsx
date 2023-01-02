import React, { useState,useContext } from "react";
import GlobalContext from "../context";

function ColumnFilter({column}) {
    const {AddForFilter}=useContext(GlobalContext)
    const {ColumnFilter}=useContext(GlobalContext).state
    console.log("stateee",ColumnFilter);
  return (
    <input
      type={"text"}
      placeholder='Search'
      className='w-[7rem] text-xs text-gray-500 font-serif border-none focus:border focus:outline focus:outline-blue-500'
      onChange={(e)=>{
       AddForFilter(e.target.value)
      }}
    ></input>
  );
}

export default ColumnFilter;
