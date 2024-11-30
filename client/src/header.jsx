import React from "react"; // Correct capitalization
import { Link } from "react-router-dom"; // Ensure Link is imported from react-router-dom

function HeaderSection() {
    return (
        <>
            <nav className="flex justify-end p-4">
                <div className="navlinks mx-4">
                    <Link 
                        to="/staff-pass" 
                        className="sm:w-fit w-full px-9 py-3 bg-indigo-600 hover:bg-indigo-700 ease-in-out transition-all duration-700 rounded-xl shadow justify-center items-center flex"
                    >
                        <span className="px-3.5 text-center text-white text-lg font-semibold leading-8">
                            Staff
                        </span>
                    </Link>
                </div>
                <div className="navlinks mx-4">
                    <Link 
                        to="/" 
                        className="sm:w-fit w-full px-9 py-3 bg-indigo-600 hover:bg-indigo-700 ease-in-out transition-all duration-700 rounded-xl shadow justify-center items-center flex"
                    >
                        <span className="px-3.5 text-center text-white text-lg font-semibold leading-8">
                            home
                        </span>
                    </Link>
                </div>
            </nav>
            <hr />
        </>
    );
}

export default HeaderSection;
