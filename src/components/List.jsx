import ListItem from './ListItem'

const List = () => {
  // features array is component specific data
  const features = [
    'Reusable components',
    'Easy to learn',
    'SEO friendliness',
    'performance',
    'security',
  ]

  return (
    <article className="article">
      <h2>Advanatges of React</h2>
      <ul className="list">
        {features.map((f) => {
          return <ListItem feature={f} key={f} />
        })}
      </ul>
    </article>
  )
}

export default List
