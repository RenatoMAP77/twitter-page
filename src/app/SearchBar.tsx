import React, { useState } from 'react';
import { Search, CircleX } from 'lucide-react'; 

export default function SearchBar() {
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <div id="search" className="mb-4 relative">
      <form className="flex items-center">
        <input 
          type="text"
          placeholder="Search on Twitter"
          className="bg-gray-800 rounded-full text-white p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:bg-gray-950 focus:ring-blue-800"
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
        {isInputFocused && (
          <button
            className="absolute right-2 rounded-full transition duration-200 ease-in-out top-1/2 transform -translate-y-1/2 hover:bg-gray-700 p-2"
            onClick={() => setIsInputFocused(false)}
          >
            <CircleX />
          </button>
        )}
        <button id="SearchButton" className="absolute left-2 pl-2">
          <Search className="w-4" />
        </button>
      </form>
    </div>
  );
}
