import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <div className="space-y-1">
            <span className="block w-8 h-1 bg-gray-600"></span>
            <span className="block w-8 h-1 bg-gray-600"></span>
            <span className="block w-8 h-1 bg-gray-600"></span>
          </div>
          <span className="mx-3 font-semibold text-xl tracking-tight">
            Live score
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
