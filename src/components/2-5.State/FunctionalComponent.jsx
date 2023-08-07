import React, { useState, useEffect } from 'react'

export default function FunctionalComponent() {
  const [date, setNewDate] = useState(new Date());

  const tick = () => {
    
    setNewDate(new Date());
  }

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    
    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div>
      <h1>Hello, world!</h1> 
      <h2>It is {date.toLocaleTimeString()}. Functional</h2>
  </div>
  )
}
