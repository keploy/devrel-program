"use client";
import { useEffect, useState } from "react";
import { useDarkMode } from "@/components/utils/DarkModeContext"; 

const AnimatedNumbers = () => {
  const { darkMode } = useDarkMode(); // Access the dark mode state
  const [counts, setCounts] = useState({
    cohorts: 0,
    applications: 0,
    devRels: 0,
    onboarded: 0,
  });

  const targets = {
    cohorts: 6,
    applications: 5000,
    devRels: 330,
    onboarded: 15,
  };

  useEffect(() => {
    const duration = 2000; // Duration for the animation in milliseconds
    const startTime = performance.now();

    const animate = (currentTime : number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      setCounts({
        cohorts: Math.round(targets.cohorts * progress),
        applications: Math.round(targets.applications * progress),
        devRels: Math.round(targets.devRels * progress),
        onboarded: Math.round(targets.onboarded * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="flex justify-center space-x-8">
      <div className="text-center">
        <p className={`text-7xl font-bold text-transparent bg-clip-text ${darkMode ? "bg-gradient-to-r from-gradient-500 to-gradient-200" : "bg-gradient-to-r from-gradient-500 to-gradient-200"} text-primary-400`}>{counts.cohorts}</p>
        <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Cohorts</p>
      </div>
      <div className={`h-full w-px bg-gray-300 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
      <div className="text-center">
        <p className={`text-7xl font-boldtext-transparent bg-clip-text ${darkMode ? "bg-gradient-to-r from-gradient-500 to-gradient-200" : "bg-gradient-to-r from-gradient-500 to-gradient-200"} text-primary-400`}>{counts.applications}</p>
        <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Applications</p>
      </div>
      <div className={`h-full w-px bg-gray-300 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
      <div className="text-center">
        <p className={`text-7xl font-bold text-transparent bg-clip-text ${darkMode ? "bg-gradient-to-r from-gradient-500 to-gradient-200" : "bg-gradient-to-r from-gradient-500 to-gradient-200"} text-primary-400`}>{counts.devRels}</p>
        <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>DevRels</p>
      </div>
      <div className={`h-full w-px bg-gray-300 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
      <div className="text-center">
        <p className={`text-7xl font-bold text-transparent bg-clip-text ${darkMode ? "bg-gradient-to-r from-gradient-500 to-gradient-200" : "bg-gradient-to-r from-gradient-500 to-gradient-200"} text-primary-400`}>{counts.onboarded}</p>
        <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Onboarded</p>
      </div>
    </div>
  );
};

export default AnimatedNumbers;
