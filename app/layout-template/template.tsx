'use client'

import { useState, useEffect } from 'react'

export default function Template({ children }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect', children)
  }, [])
  return (
    <>
      <h1>Template {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      {children}
    </>
  )
}