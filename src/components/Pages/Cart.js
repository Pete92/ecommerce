import {Container, Row, Col, Image, ListGroup, Button} from 'react-bootstrap';
import { CartState } from "../../context/Context";
import { AiFillDelete } from "react-icons/ai";
import { useState, useEffect } from 'react';

/* OSTOSKORI */



function Cart() {              
    const {
      state: { cart },
      dispatch,
    } = CartState();

  const [total, setTotal] = useState(); //Laitetaan stateen summa

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty , 0));
  }, [cart])

  return (
      <Container>
        <ListGroup>
          <Row>
            <Col>
            {/* Summan näyttäminen */}
            {
              total > 0 ? 
                <span style={{ fontWeight: 700, fontSize: 20 }}>Total: {total} $</span>
              : 
                <h3 style={{ fontWeight: 700, fontSize: 30, textAlign: 'center', marginTop: '20%' }} >Ostoskori on tyhjä</h3>
            }
            
            </Col>
          </Row>
          {cart.map((item) =>
            <ListGroup.Item key={item.id} style={{border: 'none'}}>
              <Row style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', padding: '30px 0'}}>
                <Col md={3} style={{textAlign: "center"}}>
                  <Image style={{width: "40%"}} src={item.image} alt={item.title} fluid />
                </Col>
                <Col md={3}>
                  <span>{item.title}</span>
                </Col>
                <Col md={3}>
                  <span>{item.price} $</span>
                </Col>
                <Col md={3}>
                  <Button 
                    type="button"
                    variant="light"
                    onClick={() =>{
                      dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: item
                          })
                    }}>
                        <AiFillDelete  fontSize="20px" />
                  </Button>
                  </Col>
              </Row>
            </ListGroup.Item>
          )}
        </ListGroup>
      </Container>
  );
}

export default Cart;