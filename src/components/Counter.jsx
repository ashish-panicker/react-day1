import React from 'react'

const Counter = () => {
  const [counter, setCounter] = React.useState(1)

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  return (
    <div className="article">
      <div className="article-title">
        <h2>Counter = {counter}</h2>
        <button type="button" className="button" onClick={increment}>
          Increase counter
        </button>
        <button type="button" className="button" onClick={decrement}>
          Decrease counter
        </button>
      </div>
    </div>
  )
}

export default Counter
