import React from 'react'
import Dialog from './Dialog'

export default function ThankyouDialog() {
  return (
    <div>
      <Dialog 
        title={<h1 style={{color: 'red'}}>Thanks</h1>} 
        description="test" 
        button={
          <button 
            type="button" 
            style={{ backgroundColor: 'blue', fontSize: 24}}
          >
            Close
          </button>
        } />
    </div>
  )
}
