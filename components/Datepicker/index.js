import React, { useState } from "react";
import { AiFillCalendar } from "react-icons/ai";

function DatePicker({id,label,setDate,date}) {

  return (
    <div className="relative">
      <label htmlFor={id} className="text-gray-700 font-medium mb-2">
        {label}:
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <AiFillCalendar
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          id={id}
          type="date"
          value={date}
          onChange={setDate}
          className="appearance-none rounded-sm relative block w-full h-[50px] px-3 py-2 pl-10 pr-3 border bg-transparent border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        />
      </div>
    </div>
  );
}

export default DatePicker;
