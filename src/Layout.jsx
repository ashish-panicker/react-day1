import Navbar from './Navbar'
import Counter from './components/Counter'
import List from './components/List'

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <List />
        <Counter />
      </div>
    </>
  )
}

export default Layout
