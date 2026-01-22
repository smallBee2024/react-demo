'use client'


import React from 'react';
import { useContextSelector, useContext } from 'use-context-selector';
import MyContext from '../context';

function CounterA() {
  const countA = useContextSelector(MyContext, (v) => v.countA);
  const setCountA = useContextSelector(MyContext, (v) => v.setCountA);

  const increment = () =>
    setCountA((s) => s -1);

  console.log('CounterA rendered');

  return (
    <div>
      <p>{new Date().getTime()}</p>
      <p>Counter A: {countA}</p>
      <button onClick={increment}>
        Increment A
      </button>
    </div>
  );
}

export default CounterA;