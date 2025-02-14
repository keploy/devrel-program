"use client";
import React from 'react';
import { useDarkMode } from '@/components/utils/DarkModeContext'; 

interface CardProps {
  title: string;
  description: string;
  gifUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, description, gifUrl }) => {
  const { darkMode } = useDarkMode(); 

  return (
    <div className={`rounded-lg p-6 mb-6 transition-colors duration-300 `}>
      {gifUrl && (
        <span className=" ">
          <img src={gifUrl} className='place-self-center mb-14 object-contain h-40 w-full max-w-xs' alt="GIF" width="150" height="150" />
        </span>
      )}
      <h2 className={`text-2xl font-bold mb-4 place-self-center ${darkMode ? 'text-gray-200' : 'text-primary-400'}`}>
        {title}
      </h2>
      <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {description}
      </p>
    </div>
  );
};

export default Card;
