import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearcart, deletecart } from '../slides/Cart-slice';

function Cart() {
const cartslice = useSelector((state) => state.cartslice);
console.log("Cart contains:", cartslice);

 const dispatch = useDispatch();

 const totalPrice = cartslice.reduce((total, product) => total + product.price*product.quantity, 0);
 console.log("Total price:", totalPrice);

return (
    <Container className='px-5 mt-5 py-5'>

    <div>
      <h1 className=''>welcom to cart</h1>
      <p>price : {totalPrice.toFixed(2)} EGP</p>
              <Button variant='primary' className='my-2 p-2' onClick={()=>dispatch(clearcart())}>clear all product</Button>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>title
          </th>
          <th>img</th>
                    <th>price</th>
          <th>quantity</th>
          <th>actions</th>

        </tr>
      </thead>
      <tbody>
{cartslice.map((product) => (
  <tr key={product.id}>
    <td>{product.id}</td>
    <td>{product.title}</td>
    <td>
      <Image src={product.image} alt={product.title} style={{ width: '100px', height: '80px' }} />
    </td>
    <td>${product.price}</td>
    <td>{product.quantity}</td>
    <td><Button variant='danger' onClick={()=>dispatch(deletecart(product)) }>Delete</Button></td>
  </tr>
))}

      </tbody>
    </Table>
    </div>
    </Container>
  )
}

export default Cart
