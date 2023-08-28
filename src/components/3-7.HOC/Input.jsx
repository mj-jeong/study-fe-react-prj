import React from 'react'
import withLoading from './withLoading'

// export default function Input() {
//   return (
//     <>
//       <input defaultValue="Input" type="text" />
//     </>
//   )
// }


function Input() {
  return <input type="text" defaultValue="Input" />
}

export default withLoading(Input);