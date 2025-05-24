import { Route ,Routes } from 'react-router';
import Navbar from './components/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart.jsx';
import Products from './components/Products.jsx'

function App() {

  return (
    <>
    < Navbar />
    <Routes >
      <Route path="/Product" element={<Products />} />
      <Route path="/Cart" element={<Cart/>} />
    </Routes>
    </>
  )
}

export default App
