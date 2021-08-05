import React, { useEffect, useState } from 'react'

function Effect() {
  const [count, setCount] = useState(0)
  
  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log(count)
    },1000)
    return () => {
      clearInterval(timer)
    }
  },[count])
      
  return (
    <>
      <p>カウント：{count}</p>
      <input type="button" value="10" onClick={() => setCount(10)} />
    </>
  )
}

export default Effect

