'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Layout({ children }) {
  const [count, setCount] = useState(0)
  return (
    <>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/about" style={{ color: 'red' }}>About</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </div>
      <h1>Layout No: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <div>------------------------------------</div>
      <br />
      {children}
    </>
  )
}