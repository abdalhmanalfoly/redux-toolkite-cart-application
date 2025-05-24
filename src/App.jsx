import { Route ,Routes } from 'react-router';
import Navbar from './components/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/products.jsx';
import Cart from './components/Cart.jsx';

function App() {

  return (
    <>
    < Navbar />
    <Routes >
      <Route path="/Product" element={<Products/>} />
      <Route path="/Cart" element={<Cart/>} />
    </Routes>
    </>
  )
}

export default App
