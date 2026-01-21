"use client"

import { useCallback, useState, useMemo } from 'react'
import Child from './child'

const Parent = () => {
  const [count, setCount] = useState(0);
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  // 没有 useCallback：每次 Parent 渲染都会生成新函数 → Child 重渲染
  // const handleClick = () => alert('Hello');

  // 使用 useCallback：函数引用稳定 → Child 不会重渲染（除非 count 变）
  const handleClick = useCallback(() => {
    alert('Hello');
  }, []);

  const A_B = useMemo(() => {
    return A + B;
  }, [A, B]);

  const handleA = useCallback(() => {
    setA(A + 1);
  }, [A]);

  const handleB = useCallback(() => {
    setB(B + 1);
  }, [B]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <button onClick={handleA}>Increment A</button>
      <button onClick={handleB}>Increment B</button>
      <p>A + B: {A_B}</p>
      <Child onClick={handleClick} />
    </div>
  );
}

export default Parent