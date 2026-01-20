"use client";
import React, { useState } from "react";
import {
  createContext,
  useContextSelector,
} from "use-context-selector";

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};
// 创建 Context
const CounterContext = createContext<CounterContextType | null>(null);

// Provider 组件
const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  const contextValue = React.useMemo(
    () => ({ count, increment, decrement }),
    [count]
  );

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};

// 只消费 count
const CountDisplay = () => {
  const count = useContextSelector(
    CounterContext,
    (v) => (v as CounterContextType).count
  );
  return <div>Count: {count}</div>;
};

// 只消费 increment
const IncrementButton = () => {
  const increment = useContextSelector(
    CounterContext,
    (v) => (v as CounterContextType).increment
  );
  return <button onClick={increment}>+1</button>;
};

// 只消费 decrement
const DecrementButton = () => {
  const decrement = useContextSelector(
    CounterContext,
    (v) => (v as CounterContextType).decrement
  );
  return <button onClick={decrement}>-1</button>;
};

export default function UseContextSelectorDemo() {
  return (
    <CounterProvider>
      <h2>use-context-selector Demo</h2>
      <CountDisplay />
      <IncrementButton />
      <DecrementButton />
    </CounterProvider>
  );
} 