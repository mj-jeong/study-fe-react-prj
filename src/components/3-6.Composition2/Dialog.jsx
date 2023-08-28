import React, { useState } from 'react'

export default function Dialog(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && (<div
        style={{ position: 'absolute', zIndex: 99, top: '50%', left: '50%', transorm: 'translate(-50%, -50%)', border: '1px solid #000', padding: 24, backgroundColor: "#fff"}}
      >
        {typeof props.title === 'string' ? (
          <h1>{props.title}</h1>
        ) : props.title}
        {typeof props.description === 'string' ? (        
        <h5>{props.description}</h5> 
        ) : props.description
        }
        {typeof props.button === 'string' ? (
          <button type="button" onClick={() => setIsOpen(false)} style={{ backgroundColor: 'red', color: '#fff'}} >{props.button}</button>
        ) : (
          <div onClick={() => setIsOpen(false)} >
            {props.button}
          </div>
        )}
    </div>
    )}
    {isOpen && (
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#f5f5f5'
      }}></div>
    )}
    </>
  )
}
