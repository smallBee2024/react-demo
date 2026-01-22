'use client'

import React from 'react';
import { useTheme } from '../context';

const Test = React.memo(() => {
  const { count } = useTheme();
  console.log('test render');
  return <h1>Test Count: {count}</h1>;
});

export default Test;