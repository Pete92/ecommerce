import "../../App.css";
import React, {useState, useEffect} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import ProductCard from "./ProductCard";




/* TUOTEET. Pitää varmaankin tehdä toinen state johon voidaan työntää halutut tuotteet ja
    näistä tuotteista tiedot(hinta, title, koko). Tämä viedään sitten cart sivulle.
*/


function Shop() {               //UseEffect = kun sivulla tapahtuu jotatain tai ensikertaa ladataan.
    useEffect(() => {
      //Haetaan dataa urlista ja laitetaan json muodossa
      const fetchItems = async () => {
        const data = await fetch('http://localhost/ecommerce/items');
        const items = await data.json();
        setItems(items); //laitetaan urlista saatu data stateen
        console.log(items);
    };
        fetchItems();           //kutsutaan fetchItems functionia
    }, [])

 
    const [items, setItems] = useState([]); //saten määritys
    const [search, searchItems] = useState(""); //saten määritys

   /*  //footeriin uusi class jos itemeitä on enemmän kuin 6
    if(items.length > 6 ){
      var elements = document.getElementsByClassName("footer");
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.add('relativeFooter');
        }
    } */

  return ( 
      <Container style={{marginTop: '1.3rem'}}>
        <Row>
          <Col style={{textAlign: 'center', margin: "10px 0"}} xl={12}>
            <input type="text" 
            style={{
              width: "40%", 
              textAlign: "center", 
              borderRadius: "5px 5px"
              }} 
              placeholder="Etsi Tuotetta" onChange={event => {searchItems(event.target.value)} } />
          </Col>
         {/*  {items.map(item => ( //Käytetään map functionia joka etsii halutun id tiedot(Looppaa datan)
              <ProductCard key={item.id} item={item}  />      //Lähetetään Staten kanssa
          ))} */}
          {items.filter((item) => {
              if (searchItems === ""){
                return null

              } else if (item.title.toLowerCase().includes(search.toLowerCase())){
                 return <ProductCard key={item.id} item={item}  />
              }

            }).map((item) => { 
              return <ProductCard key={item.id} item={item}  />
            })}
        </Row>
      </Container> 
  );
}

export default Shop;