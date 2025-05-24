import { Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router'

function NavBar() {
const cart = useSelector((state) => state.cartslice);
  
  return (
    <div>
      <Navbar fixed='top' className='bg-light'>
        
  <nav  className="navbar   navbar-light bg-light">
      <div className="container-fluid mx-5">
        <Link className="navbar-brand" to="/">CART APP</Link>
        <div className="" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" to="/Product">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cart">Cart - {cart.length}  </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
      </Navbar>
    </div>
  )
}

export default NavBar
