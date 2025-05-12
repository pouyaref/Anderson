import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';

export default function Header({ darkMode, setDarkMode }) {
  


  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        your name
        </h1>

      </div>
    </header>
  );
}