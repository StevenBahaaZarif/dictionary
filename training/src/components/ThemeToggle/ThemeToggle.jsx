import React from 'react';

function ThemeToggle({ toggleTheme, currentTheme }) {
  return (
    <div className="flex items-center space-x-2">
      <span>{currentTheme === 'light' ? 'Light' : 'Dark'} Mode</span>
      <button
        onClick={toggleTheme}
        className="text-xl bg-gray-200 dark:bg-gray-700 rounded-full p-2"
      >
        {currentTheme === 'light' ? '🌞' : '🌙'}
      </button>
    </div>
  );
}

export default ThemeToggle;
