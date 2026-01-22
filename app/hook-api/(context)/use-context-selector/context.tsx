'use client'

import { useState } from 'react';
import{ createContext } from 'use-context-selector';

const MyContext = createContext({} as any);

export function MyProvider({ children }: any) {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const state: any = {
    countA,
    setCountA,
    countB,
    setCountB,
  };

  return (
    <MyContext.Provider value={state}>
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;