import PropTypes from 'prop-types'

const ListItem = (props) => {
  return <li className="list-item">{props.text}</li>
}

export default ListItem

ListItem.propTypes = {
  text: PropTypes.string.isRequired
}

// npm install --save prop-types
// <a href=''>https://www.npmjs.com/package/prop-types</a>