"use client";
import React from 'react';
import { useDarkMode } from '@/components/utils/DarkModeContext';
import AnimatedNumbers from './AnimatedNumbers';

const Intro: React.FC = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 py-12 -mt-30 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
      <p className={`text-md sm:text-xl md:text-xl lg:text-lg font-medium leading-tight sm:leading-tight md:leading-tighter tracking-tighter mb-4 md:mt-4 lg:mt-5 text-center ${darkMode ? 'text-gray-200' : 'text-primary-400'}`}>HELLO THERE</p>
      <h1 className={`text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-tighter tracking-tighter mb-4 md:mt-4 lg:mt-5 text-center ${darkMode ? 'text-gray-200' : 'text-primary-400'}`}>
        We Are Keploy
      </h1>
      <hr className={`mt-20 mb-10 w-1/2 place-self-center ${darkMode ? 'border-gray-600' : 'border-primary-400'} border-opacity-60`} />
      <p className="text-2xl mb-8 leading-relaxed text-center">
        Keploy is a functional testing toolkit for developers. As an open source organisation, we believe everything should be community-driven. We want folks to come together with us and experience what it is like to be that DevRel and learn and grow with the experience they gain! Here&apos;s the DevRel Program in Numbers
      </p>
      <div className="flex justify-center">
        <AnimatedNumbers />
      </div>
      <hr className={`mt-10 mb-10 ${darkMode ? 'border-gray-600' : 'border-primary-400'} border-opacity-60`} />
    </div>
  );
};

export default Intro;
