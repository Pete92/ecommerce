import "../../App.css";
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
        const fetchItem = await fetch(`http://localhost/BackEnd/items/single_read.php/?id=${match.params.id}`);
        const item = await fetchItem.json();
        console.log(item);
        setItem(item);
    };
    


  return (
      <Container>
        <Row className="contentRow">
          <Row>
            <Col>
              <Link to="/shop"
              className="arrowStyle" 
              >
                  
                  <FontAwesomeIcon 
                    icon={faLongArrowAltLeft} />
              </Link>
            </Col>
          </Row>
          <Col className="kuvaDiv">
            <img 
              style={{maxHeight: 240}} 
              src={item.image} alt="tuote"
            />
          </Col>
          <Col xs={12} md={4} xl={6}>
            <h4 style={{padding: '2rem 0'}}>{ item.title }</h4> {/* renderöidään käyttäjälle title ja kuva */}
            <p>{item.description}</p>
            <h3>{item.price}$</h3>
          </Col>
          <Row>
            <Col style={{height: '38px'}}>
              <p>GTIN-Koodi: {item.gtin}</p>
            </Col>
          </Row>
        </Row>
      </Container>
  );
}

export default Product;