import React from 'react';
import { useTheme } from '../hook-api/use-context/context';

export default function Button() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>Toggle Theme {theme}</button>
  );
}