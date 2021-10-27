import {Container, Row, Col, Image, ListGroup, Button} from 'react-bootstrap';
import { CartState } from "../../context/Context";
import { AiFillDelete } from "react-icons/ai";

/* OSTOSKORI */



function Cart() {               //UseEffect = kun sivulla tapahtuu jotatain tai ensikertaa ladataan.
    const {
      state: { cart },
      dispatch,
    } = CartState();

   
  
  return (
      <Container>
        <ListGroup>
          {cart.map((item) =>
            <ListGroup.Item key={item.id}>
              <Row style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', paddingTop: '30px'}}>
                <Col md={4}>
                  <Image style={{width: "40%"}} src={item.image} alt={item.title} fluid />
                </Col>
                <Col md={4}>
                  <span>{item.title}</span>
                </Col>
                <Col md={4}>
                  <span>{item.price} $</span>
                </Col>
                <Col md={4}>
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