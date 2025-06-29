import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../slides/product-slides';
import { useSelector } from 'react-redux';
import { addtocart } from '../slides/Cart-slice';


function Products() {
    const  products  = useSelector((state) => state.Products);

    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);


  return (
    <div>
      
    <Container className='px-5 py-5'>
        <div className='col mt-5'>
            <div className='row  row-cols-1 g-4'>
           <div className="row row-cols-1 row-cols-md-3 g-4">
  {products.map((product) => (
    <Card key={product.id} style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Img style={{height:"300px"}} variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description.substring(0, 100)}...</Card.Text>
        <Card.Text variant="primary">${product.price}</Card.Text>
<Button variant="primary" onClick={() => dispatch(addtocart(product))}>
  Add to Cart
</Button>
      </Card.Body>
    </Card>
  ))}
</div>


            </div>
        </div>
    </Container>
    </div>
  )
}

export default Products
