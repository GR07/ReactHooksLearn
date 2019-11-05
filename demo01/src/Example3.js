import React, { useReducer } from 'react';

function ReducerDemo() {
  // useReducer 接受两个参数 ----- reducer函数、初始值
  // useReducer 返回两个值 ------ count、dispatch（派发器）
  const [count, dispatch] = useReducer((state, action) => {
    switch(action) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      default:
        return state
    }
  }, 0)

  return (
    <div>
      <h2>现在的分数是{count}</h2>
      <button onClick={() => {dispatch('add')}}>加法</button>
      <button onClick={() => {dispatch('sub')}}>减法</button>
    </div>
  )
}

export default ReducerDemo