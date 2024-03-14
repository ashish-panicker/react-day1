import PropTypes from 'prop-types'
import ListItem from './ListItem'

const List = (props) => {
  const features = props.items
  return (
    <ul className="list">
      {features.map((f) => {
        return <ListItem text={f} key={f} />
      })}
    </ul>
  )
}

export default List

List.propTypes = {
  items: PropTypes.array.isRequired,
}
