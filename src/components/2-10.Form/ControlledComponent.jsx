import React, { useState } from 'react'

export default function ControlledComponent() {
  const [name, setName] = useState("");
  const [essay, setEssayValue] = useState("");
  const [flavor, setFlavor] = useState("coconut");

  function handleChange(event) {
    const name = event.target.type;
    if(name === 'text') {
      setName(event.target.value);
    } else if(name === 'essay') {
      setEssayValue(event.target.value)
    } else {
      setFlavor(event.target.value)

    }
  }

  // function handleEssayChange(event) {
  //   setEssayValue(event.target.value);
  // }

  // function handleFlavorChange(event) {
  //   setFlavor(event.target.value);
  // }

  function handleSubmit(event) {
    alert(`name: ${name}, essay: ${essay}, flavor: ${flavor}`);
    event.preventDefault();
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" type="text" value={name} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Essay:
        <textarea name="essay" value={essay} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Pick your favorite flavor:
        <select name="flavor" value={flavor} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
  </form>
  )
}
