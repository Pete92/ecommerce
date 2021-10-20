import "../../App.css";

import React, {useState, useEffect} from "react";
import {Container, Row} from 'react-bootstrap';
import ProductCard from "./ProductCard";

/* TUOTEET. Pitää varmaankin tehdä toinen state johon voidaan työntää halutut tuotteet ja
    näistä tuotteista tiedot(hinta, title, koko). Tämä viedään sitten cart sivulle.
*/


function Shop() {               //UseEffect = kun sivulla tapahtuu jotatain tai ensikertaa ladataan.
    useEffect(() => {
        fetchItems();           //kutsutaan fetchItems functionia
    }, [])

    const [items, setItems] = useState([]); //saten määritys


    //footeriin uusi class jos itemeitä on enemmän kuin 6
    if(items.length > 6 ){
      var elements = document.getElementsByClassName("footer");
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.add('relativeFooter');
        }
    }

    //Haetaan dataa urlista ja laitetaan json muodossa
    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const items = await data.json();
        console.log(items);
        setItems(items); //laitetaan urlista saatu data stateen
    };
    

  return ( //Palautetaan productcard compnentti johon laitetaan statesta item
      <Container style={{marginTop: '1.3rem'}}>
        <Row>
          {items.map(item => ( //Käytetään map functionia joka etsii halutun id tiedot(Looppaa datan)
              <ProductCard key={item.id} item={item} />      //Lähetetään Staten kanssa
          ))}
        </Row>
      </Container> 
  );
}

export default Shop;