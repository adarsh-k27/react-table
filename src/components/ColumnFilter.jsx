import React, { useState,useContext } from "react";
import GlobalContext from "../context";

function ColumnFilter({column}) {
  
    const {AddForFilter}=useContext(GlobalContext)
    const {ColumnFilter,catogery}=useContext(GlobalContext).state
    console.log("stateee",ColumnFilter,catogery);
  return (
    <input
      type={"text"}
      placeholder='Search'
      className='w-[7rem] text-xs text-gray-500 font-serif border-none focus:border focus:outline focus:outline-blue-500'
      onChange={(e)=>{
        e.preventDefault()
       AddForFilter({filter:e.target.value,catogery:column.id})
      }}
    ></input>
  );
}

export default ColumnFilter;
