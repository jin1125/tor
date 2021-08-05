import React, { useState } from 'react'

function State() {
    const [count,setCount] = useState(0);
    console.log('再描画',count)

  return (
    <>
    <p>カウント：{count}</p>
    <input 
    type='button'
    value={count}
    onClick={()=>setCount(prevCount=>prevCount+1)}
    />
      
    </>
  )
}

export default State
