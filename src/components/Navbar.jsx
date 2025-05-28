import React, { useState } from "react";
import snapdealLogo from '../assets/snapdeal logo.png';

export default function Navbar() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(!isSignedIn);
    alert(isSignedIn ? "Signed Out" : "Signed In");
  };

  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="bg-red-700 text-white text-xs sm:text-sm flex flex-col sm:flex-row justify-between px-4 py-2 space-y-1 sm:space-y-0">
        <span>Brand Waali Quality, Bazaar Waali Deal!</span>
        <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4">
          <a href="#" className="hover:underline">Our Blog</a>
          <a href="#" className="hover:underline">Help Center</a>
          <a href="#" className="hover:underline">Sell On Snapdeal</a>
          <a href="#" className="hover:underline">Download App</a>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-red-500 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 gap-3 sm:gap-0">
        {/* Logo */}
        <div className="flex items-center gap-2">
         <img src={snapdealLogo} alt="Snapdeal" className="h-10" />
          <h1 className="text-white text-2xl sm:text-4xl font-bold">Snapdeal</h1>
        </div>

        {/* Search bar */}
        <div className="flex w-full sm:flex-grow sm:max-w-2xl mx-0 sm:mx-4">
          <input
            type="text"
            placeholder="Search products & brands"
            className="w-full p-2 rounded-l-md text-black border-2 border-gray-300"
          />
          <button className="bg-gray-800 text-white px-4 rounded-r-md whitespace-nowrap">
            🔍 Search
          </button>
        </div>

        {/* Cart and Sign In */}
        <div className="flex items-center gap-4 text-white text-base sm:text-xl">
          <button className="flex items-center gap-1">
            🛒 Cart
          </button>
          <button
            className="flex items-center gap-2 hover:underline"
            onClick={handleSignIn}
          >
            <span>{isSignedIn ? "Sign Out" : "Sign In"}</span>
            <div className="bg-red-700 rounded-full p-2">
              <span role="img" aria-label="user">👤</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
