'use client'

import React, { StrictMode } from 'react';
import { MyProvider } from './context';
import CounterA from './components/CounterA';
import CounterB from './components/CounterB';

function App() {
  return (
    <StrictMode>
      <MyProvider>
        <CounterA />
        <CounterB />
      </MyProvider>
    </StrictMode>
  );
}

export default App;

// import { useState } from 'react';
// import { createRoot } from 'react-dom/client';

// import { createContext, useContextSelector } from 'use-context-selector';

// const context = createContext(null);

// const Counter1 = () => {
//   const count1 = useContextSelector(context, (v) => {
//     console.log('v1===', v)
//     return v[0].count1
//   });
//   const setState = useContextSelector(context, (v) => v[1]);
//   const increment = () =>
//     setState((s) => ({
//       ...s,
//       count1: s.count1 + 1,
//     }));

//     console.log('Counter1 render')
//   return (
//     <div>
//       <span>Count1: {count1}</span>
//       <button type="button" onClick={increment}>
//         +1
//       </button>
//       {Math.random()}
//     </div>
//   );
// };

// const Counter2 = () => {
//   const count2 = useContextSelector(context, (v) => v[0].count2);
//   const setState = useContextSelector(context, (v) => v[1]);
//   const increment = () =>
//     setState((s) => ({
//       ...s,
//       count2: s.count2 + 1,
//     }));
//   return (
//     <div>
//       <span>Count2: {count2}</span>
//       <button type="button" onClick={increment}>
//         +1
//       </button>
//       {Math.random()}
//     </div>
//   );
// };

// const StateProvider = ({ children }) => (
//   <context.Provider value={useState({ count1: 0, count2: 0 })}>
//     {children}
//   </context.Provider>
// );

// const App = () => (
//   <StateProvider>
//     <Counter1 />
//     <Counter2 />
//   </StateProvider>
// );

// export default App