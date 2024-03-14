import React from 'react'
import ListItem from './ListItem'

const List = () => {

  console.log('rendering List')
  // features array is component specific data
  const features = [
    'Reusable components',
    'Easy to learn',
    'SEO friendliness',
    'performance',
    'security',
  ]

  /**
   * State represents the data held by the React component
   * 1. State is immutable
   * 2. State change triggers a re-rendering of the component
   * 2. To use state in React funcctional componenets we use useState() hook
   * 3. The useState hook returns an array with two values
   *    a) the first value is the name of the state variable
   *    b) the second value is the fucnction which can be used to manipulate the state
   * const [counter, setCounter] = React.useState(1)
   */

  const [isHidden, setIsHidden] = React.useState(false)

  function buttonClick() {
    setIsHidden(!isHidden)
    console.log(`isHidden = ${isHidden}`)
  }

  return (
    <article className="article">
      <div className="article-title">
        <h2>Advanatges of React</h2>
        <button type="button" className="button" onClick={buttonClick}>
          {isHidden ? 'Show Features' : 'Hide Features'}
        </button>
      </div>
      {!isHidden && (
        <ul className="list">
          {features.map((f) => {
            return <ListItem text={f} key={f} />
          })}
        </ul>
      )}
    </article>
  )
}

export default List
