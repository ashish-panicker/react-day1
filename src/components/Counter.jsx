import React from 'react'
import Button from './Button'

const Counter = () => {
  const [counter, setCounter] = React.useState(1)

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  return (
    <article className="article">
      <div className="article-title">
        <h2>Counter = {counter}</h2>
        <Button text='Increment' clickHandler={increment}/>
        <Button text='Decrement' clickHandler={decrement}/>
      </div>
    </article>
  )
}

export default Counter
