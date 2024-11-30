import axios from "axios";
import {React,useState,useEffect } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [User,setUser] = useState({})
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(()=>{
    axios.get("http://localhost:5000/about/user/admin",{ withCredentials: true })
    .then((res)=>{
      setUser(res.data);
      
    })
    .catch((error)=>{
      console.log("requesting about admin error: " + error)
    })
    console.log("al about user : " + User)
  },[])
  return (
    <nav className="bg-white w-full border-gray-200 dark:bg-gray-900">
      <div className="w-full flex justify-between items-center p-4">
        {/* Logo Section */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src=""
            className="h-8"
            alt="cst logo"
          />
          <span className="text-2xl font-semibold dark:text-white">
            Cst Smart Lib
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
          >
            Contact
          </a>
        </div>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={toggleDropdown}
            className="flex items-center text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="User"
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow dark:bg-gray-700 z-50">
              <div className="px-4 py-3">
                <p className="text-sm text-gray-900 dark:text-white">{User.name}</p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {User.email}
                </p>
              </div>
              <ul className="py-2">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex justify-between items-center p-4">
        <button
          type="button"
          className="text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
