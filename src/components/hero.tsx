"use client";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useEffect, useState } from "react";
import { useDarkMode } from "@/components/utils/DarkModeContext"; // Import the dark mode context

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const { darkMode } = useDarkMode(); // Access the dark mode state

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1038);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`relative h-screen ${darkMode ? "bg-neutral-900" : "bg-neutral-100"}`}>
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      ></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 gap-16">
          <div className="mt-24 justify-center items-center text-center pb-12 md:pb-16">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent ${darkMode ? "bg-gradient-to-r from-gradient-500 to-gradient-200" : "bg-gradient-to-r from-gradient-500 to-gradient-200"} text-primary-400 font-extrabold leading-tight sm:leading-tight md:leading-tighter tracking-tighter mb-4 md:mt-4 lg:mt-5`}
              data-aos="zoom-y-out"
            >
              Keploy
              <br />
              <span className="bg-clip-text bg-gradient-to-r from-gradient-500 to-gradient-200 m-3 block">
                Developer Relations Program
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className={`text-xl sm:text-2xl text-center ${darkMode ? "text-gray-300" : "text-accent-200"} mb-8 leading-snug sm:leading-normal lg:text-center`}
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Get into the world of <b>DevRels</b> and experience
                being one for a month
              </p>
              <div
                className="gap-2 max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:space-x-4 lg:space-x-4 mt-20 flex flex-col sm:flex-row space-y-4 sm:space-y-0"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div className={`border w-full sm:w-auto ${darkMode ? "border-gray-600 bg-gray-800" : "border-primary-400 bg-primary-300"} rounded-full overflow-hidden p-1 border-opacity-40 relative transition-all group mb-4 sm:mb-0`}>
                  <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-gray-100 opacity-60 transition-transform duration-1000 ease-out group-hover:translate-x-[-500%]" />
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdu58gJWYZ1huJzAGXi1LZ4vOuK_kriK4Eda7ktiHcHF41KBQ/closedform"
                    target="_blank"
                    className="btn-sm py-2 px-4 text-gray-200 rounded-md overflow-hidden border-opacity-40 relative transition-all group flex items-center justify-center"
                    rel="noopener noreferrer"
                  >
                    <span>Apply</span>
                    <OpenInNewIcon className="transition-all duration-500 ease-out group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 h-5 w-5 ml-2" />
                  </Link>
                </div>
                <div className={`border w-full sm:w-auto ${darkMode ? "border-gray-600 bg-gray-800" : "border-primary-400 bg-primary-300"} rounded-full overflow-hidden p-1 border-opacity-40 relative transition-all group`}>
                  <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-gray-100 opacity-60 transition-transform duration-1000 ease-out group-hover:translate-x-[-500%]" />
                  <Link
                    href="https://keploy-program.notion.site/Keploy-DevRel-Program-ddaf87544acb4c84afb9b781016d5e92"
                    target="_blank"
                    className="btn-sm py-2 px-4 text-gray-200 rounded-md overflow-hidden border-opacity-40 relative transition-all group flex items-center justify-center"
                    rel="noopener noreferrer"
                  >
                    <span>Know More</span>
                    <OpenInNewIcon className="transition-all duration-500 ease-out group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 h-5 w-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <ModalVideo
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Keploy Demo video"
            video="https://www.youtube.com/embed/gvWvpqWM48s"
            videoWidth={768}
            videoHeight={432}
          /> */}
        </div>
      </div>
    </section>
  );
}
