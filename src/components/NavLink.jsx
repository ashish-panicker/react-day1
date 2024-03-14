import PropTypes from 'prop-types';

const NavLink = (props) => {
  return (
    <a href="#" className="link">
      {props.linkText}
    </a>
  )
}
export default NavLink

NavLink.propTypes = {
    linkText: PropTypes.string.isRequired
}