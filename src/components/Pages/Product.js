import React, {useState, useEffect} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'


/* TUOTESIVU */

function Product({ match }) { //UseEffect = kun sivulla tapahtuu jotatain tai ensikertaa ladataan.
    useEffect(() => {   //Match hakee tiedot urlista ja tätä voidaan hyödyntaa jos esim halutaan hakea id tiedot
        fetchItem();
        //console.log(match);
    }, [])

    const [item, setItem] = useState([]); //saten määritys


    //Hetaan rest apista tämä id data ja laitetaan stateen
    const fetchItem = async () => {
        const fetchItem = await fetch(`http://localhost/ecommerce/items/${match.params.id}`);
        const item = await fetchItem.json();
        console.log(item);
        setItem(item);
    };
    

    //CSS lisäystä
    const kuvaDiv = {
      textAlign: 'center',
      margin: 'auto 0',
      
    }

    const contentRow = {
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      marginTop: '30px',
      padding: '30px 0'
    }

    const arrowStyle = {
      fontSize: '1.6rem',
      textDecoration: 'none',
      color: 'rgb(73, 79, 82)'
    }

  return (
      <Container>
        <Row style={contentRow}>
          <Row>
            <Col>
              <Link to="/shop" 
                style={arrowStyle}>
                  <FontAwesomeIcon 
                    icon={faLongArrowAltLeft} />
              </Link>
            </Col>
          </Row>
          <Col style={kuvaDiv}>
            <img style={{maxHeight: 240}} 
            src={item.image} alt="tuote"/>
          </Col>
          <Col xs={12} md={4} xl={6}>
            <h4 style={{padding: '2rem 0'}}>{ item.title }</h4> {/* renderöidään käyttäjälle title ja kuva */}
            <p>{item.description}</p>
            <h3>{item.price}$</h3>
          </Col>
          <Row>
            <Col style={{height: '38px'}}>
            </Col>
          </Row>
        </Row>
      </Container>
  );
}

export default Product;