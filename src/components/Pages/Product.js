import "../../App.css";
import React, {useState, useEffect} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'


/* TUOTESIVU */

function Product({ match }) { //Match hakee tiedot urlista ja tätä voidaan hyödyntää jos esim halutaan hakea id tiedot

    useEffect(() => {  

      const fetchItem = async () => {   //Haetaan tuote tiedot käyttäen id päätettä
        const fetchItem = await fetch(`http://localhost/BackEnd/items/single_read.php/?id=${match.params.id}`);
        const item = await fetchItem.json();
        console.log(item);
        setItem(item);
    };
        fetchItem();
    }, [match])                  /* Hakee vain kerran datan kun, ollaan sivulla. Jos halutaan tietokannassa vaihtaa nimikettä ja heti halutaan muutos näkyviin stateen, 
                                    niin otetaan [] pois. ilman [] hakee kokoajan datan stateen*/


  const [item, setItem] = useState([]);     //Stateen tulee yksittäinen item verkkokaupasta

  return (
      <Container>
        <Row className="contentRow">
          <Row>
            <Col>
              <Link to="/shop"
              className="arrowStyle" 
              >
                <FontAwesomeIcon 
                  icon={faLongArrowAltLeft} 
                />
              </Link>
            </Col>
          </Row>
          <Col 
            className="kuvaDiv">
            <img 
              style={{maxHeight: 240}} 
              src={item.image} alt="tuote"
            />
          </Col>
          <Col xs={12} md={4} xl={6}>
            <h4 style={{padding: '2rem 0'}}>
                { item.title }
            </h4> 
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