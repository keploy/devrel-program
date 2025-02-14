"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import NavItem from "./NavItem";
//import CountingNumbers from "./countingNumbers";
import { StarIcon, MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useDarkMode } from "@/components/utils/DarkModeContext"; // Import the dark mode context

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const [starsCount, setStarsCount] = useState<number>(1000);
  const { darkMode, toggleDarkMode } = useDarkMode(); // Access the dark mode state and toggle function

  useEffect(() => {
    const fetchStarsCount = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/keploy/keploy"
        );
        if (response.ok) {
          const data = await response.json();
          let stars = data.stargazers_count;
          setStarsCount(stars);
        } else {
          console.error("Failed to fetch stars count", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching stars count:", error);
      }
    };
    fetchStarsCount();
  }, []);

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 transition duration-300 ease-in-out ${!top ? "backdrop-blur-sm shadow-lg" : ""
        } ${darkMode ? "bg-gray-900 text-white" : "bg-neutral-100 text-gray-600"}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4 flex-grow-0 w-2/12 mt-[-15px] ">
            <Logo />
          </div>
          <nav className="hidden md:flex justify-start flex-grow-0 w-6/12 ">
            <ul className="flex grow justify-enditems-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-gray-600  hover:text-primary-300 px-3 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  <NavItem name="Home" />
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="font-medium text-gray-600  hover:text-primary-300 px-3 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  <NavItem name="About" />
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="font-medium text-gray-600  hover:text-primary-300 px-3 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  <NavItem name="Program" />
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="font-medium text-gray-600  hover:text-primary-300 px-3 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  <NavItem name="Next Cohort" />
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="font-medium text-gray-600  hover:text-primary-300 px-3 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  <NavItem name="Community" />
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="font-medium text-gray-600  hover:text-primary-300 px-3 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  <NavItem name="Join" />
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-btn-container flex-grow-0 w-4/12 justify-end hidden sm:flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full mr-3 ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-800'
                } hover:bg-opacity-80 transition-colors`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            
            <div className="ml-3 border border-primary-400 bg-primary-300 rounded-full overflow-hidden p-2.5 border-opacity-40 relative transition-all  group">
              <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-gray-100 opacity-60 transition-transform duration-1000 ease-out group-hover:translate-x-[-400%]" />
              <Link
                href="https://app.keploy.io/signin"
                target="_blank"
                className="btn-sm py-3 text-gray-200  rounded-md overflow-hidden p-2.5 border-opacity-40 relative transition-all  group"
              >
                <span>Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
