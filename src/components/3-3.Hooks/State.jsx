import React, { useState } from 'react'

export default function State() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount)
  return (
    <div>
      count: {count}
      <button type="button" onClick={() => setCount(initialCount)}>Reset</button>
      <button type="button"  onClick={() => setCount(prev => prev - 1)}>-</button>
      <button type="button"  onClick={() => setCount(prev => prev +1)}>+</button>
    </div>
  )
}
