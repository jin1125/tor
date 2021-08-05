import React, { useCallback } from 'react'


 const Callback = () => {
    // コールバック関数
    const handleInput= useCallback((e) => {
      // イベント発生時に実行したい処理
      console.log(e.target.value)
    },[])
   
    return (
      <div>
        <input type="button" defaultValue="aa"　onClick={handleInput}/>
      </div>
    )
  }


export default Callback
