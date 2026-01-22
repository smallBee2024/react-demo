'use client'

import React from 'react';
import { useContextSelector, useContext } from 'use-context-selector';
import MyContext from '../context';

function CounterB() {
  const countB = useContextSelector(MyContext, (v) => v.countB);
  const setCountB = useContextSelector(MyContext, (v) => v.setCountB);

  const increment = () =>
    setCountB((s) => s -1);

  console.log('CounterB rendered');

  return (
    <div>
      <button onClick={increment}>
        Increment B
      </button>
      <p>{new Date().getTime()}</p>
      <p>Counter B: {countB}</p>
    </div>
  );
}

export default CounterB;