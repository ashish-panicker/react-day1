import NavLink from './components/NavLink'

const Navbar = () => {
  const links = ['Features', 'About', 'Contact']

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-text">Learn react</span>
      </div>
      <div className="links">
        {
          links.map((link) => {
            return <NavLink linkText={link} key={link} />
          })
        }
      </div>
    </nav>
  )
}

export default Navbar
