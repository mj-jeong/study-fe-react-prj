import React from 'react'

export default function Event() {

  const handleButtonClick = () => {
    console.log('button click');
  }

  const handleMouseLeave = (e) => {
    console.dir(e)
  }

  const handleClickCapture = () => {
    console.log('capture click');
  }

  const handleClickDiv = () => {
    console.log('div click');
  }

  const handleClickBubble = () => {
    console.log('bubble click');
  }

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickDiv} onClick={handleClickBubble}>
      <button type="button" onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>Button</button>
      </div>
    </div>
  )
}
