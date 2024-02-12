import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCount, decrementCount } from './features/countSlice'

function App() {
  const count = useSelector((c) => {
    console.log(c.count)
    return c.count.value
  })

  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux Toolkit Demo</h1>
      <div className="card">
        <h1>count is {count}</h1>
        <button onClick={() => dispatch(incrementCount())}>
          increment
        </button>
        <button onClick={() => dispatch(decrementCount())}>
          decrement
        </button>
      </div>
    </>
  )
}

export default App
