import React, {useEffect} from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';

/* OSTOSKORI */



function Cart() {               //UseEffect = kun sivulla tapahtuu jotatain tai ensikertaa ladataan.


    useEffect(() => {
        
    }, [])

    if(window.location.pathname){
      var elements = document.getElementsByClassName("relativeFooter");
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('relativeFooter');
      }
    }

    const containerStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
    

  return (
      <Container style={containerStyle}>
        <Row style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', paddingTop: '30px'}}>
          <Col xs={12} md={8} xl={8}>
            <h3 style={{textAlign: 'center'}}>Ostoskori</h3>
            <Col>
              <h5>Tuote 1</h5>
              <h5>Tuote 1</h5>
            </Col>
            <Col>
              <h1>Tuote 2</h1>
            </Col>
            <Col>
              <h1>Tuote 3</h1>
            </Col>
            <Col>
            <h1>Tuote 4</h1>
            </Col>
          </Col>
          
          
         
          <Col xs={12} md={4} xl={4}>
            <Col style={{textAlign: 'center'}}>
              <h3>Summary</h3>
            </Col>
            <Col>
              <span>Subtotal</span>
              <span style={{float: 'right'}}>$000</span>
              <hr></hr>
            </Col>
            <Col>
              <span>Discount</span>
              <span style={{float: 'right'}}>$000</span>
              <hr></hr>
            </Col>
            <Col>
              <span>Shipping</span>
              <span style={{float: 'right'}}>$000</span>
              <hr></hr>
            </Col>
            <Col style={{marginTop: '-20px'}}>
              <span>Total</span>
              <span style={{float: 'right'}}>$000</span>
            </Col>
            <Col style={{textAlign: 'center', paddingBottom: '30px'}}>
            <Button variant="primary" size="lg">
              Checkout
            </Button>{' '}
            </Col>
          </Col>
        </Row>
      </Container>
  );
}

export default Cart;