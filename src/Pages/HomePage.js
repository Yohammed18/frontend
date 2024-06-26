import React from 'react'
import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product/Product'


function HomePage() {
  return (
    <div>
        <h1>Latest Products</h1>
        <Row>
            {products.map(product => (
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                    <Product product={product} />         
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomePage