"use client";

import React, { useState } from 'react';
import { ThemeContext, ThemeContextType, ThemeType } from './context';
import Button from '../../components/button';

function App() {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value: ThemeContextType = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      <div
        style={{
          padding: '20px',
          background: theme === 'dark' ? '#000' : '#fff',
          color: theme === 'dark' ? '#fff' : '#000'
        }}
      >
        <h1>Current theme: {theme}</h1>
        <Button />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;