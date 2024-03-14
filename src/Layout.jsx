import Navbar from './Navbar'
import Counter from './components/Counter'
import Article from './components/Article'

const Layout = () => {

  return (
    <>
      <Navbar />
      <div className="container">
        <Article />
        <Counter />
      </div>
    </>
  )
}

export default Layout
