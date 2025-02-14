"use client"
import React from 'react';
import { useDarkMode } from '@/components/utils/DarkModeContext'; 
import Card from './Card';

const Content: React.FC = () => {
  const { darkMode } = useDarkMode(); 
  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 py-12 -mt-30 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
        <p className={`text-md sm:text-xl md:text-xl lg:text-lg font-medium leading-tight sm:leading-tight md:leading-tighter tracking-tighter mb-4 md:mt-4 lg:mt-5 text-center ${darkMode ? 'text-gray-200' : 'text-primary-400'}`}>DEVREL PROGRAM</p>
      <h1 className={`text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-tighter tracking-tighter mb-4 md:mt-4 lg:mt-5 text-center ${darkMode ? 'text-gray-200' : 'text-primary-400'}`}>
      Wanna know what it is like to be a DevRel?
      </h1>
      <hr className={`mt-20 mb-10 w-1/2 place-self-center ${darkMode ? 'border-gray-600' : 'border-primary-400'} border-opacity-60`} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Learn"
          description="Get one-on-one training about APIs and Keploy by the Keploy team."
          gifUrl="https://devrel.keploy.io/images/learn.gif" 
        />
        <Card
          title="Teach"
          description="Take sessions in your college or community and spread awareness about the world of APIs and Keploy."
          gifUrl="https://devrel.keploy.io/images/content.gif" 
        />
        <Card
          title="Grow"
          description="The Keploy team will help you in creating your own community in your college if you wish to."
          gifUrl="https://devrel.keploy.io/images/grow.gif" 
        />
      </div>
    </div>
  )
}

export default Content;