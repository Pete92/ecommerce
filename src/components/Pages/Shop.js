import "../../App.css";
import {useState, useEffect} from "react";              //UseEffect lataa heti kun ollaan componentti sivulla
import {Container, Row, Col} from 'react-bootstrap';
import ProductCard from "./ProductCard";                //Tuotteet näkyvät tuote kortissa
import { useContext } from 'react';
import { UserContext} from '../../context/UserContext';   //Käytetään Contextia hyödyksi, tällä voidaan katsoa onko käyttäjä kirjautunut


function Shop() {
  const { user } = useContext(UserContext);  

    useEffect(() => {
      
      const fetchItems = async () => {  //Haetaan tuotteet api urlista
        const data = await fetch('../../../Backend/items/read.php');
        const items = await data.json();
        setItems(items);
        //console.log(items);
    };
        fetchItems();
    }, []) /* Hakee vain kerran datan kun, ollaan sivulla. Jos halutaan tietokannassa vaihtaa nimikettä ja heti halutaan muutos näkyviin stateen, 
              niin otetaan [] pois. ilman [] hakee kokoajan datan stateen*/

 
    const [items, setItems] = useState([]);       //Tähän stateen tulee kaikki itemit kaupassa
    const [search, searchItems] = useState("");   //Tällä statella filteroidaan haluttuun tuotteeseen.

  return ( 
      <Container style={{marginTop: '1.3rem'}}>
        <Row>

        {/*  Näytetään input jos user löytyy */ }
          { 
            user.length > 0 ? 
              <Col style={{textAlign: 'center', margin: "10px 0"}} xl={12}>
                <input type="text" 
                  style={{
                    width: "40%", 
                    textAlign: "center", 
                    borderRadius: "5px 5px"
                    }} 
                  placeholder="Etsi Tuotetta" 
                  onChange={event => {searchItems(event.target.value)} } />
              </Col>
            : ''
          }

          {/*  Hakutoiminta, jos input on tyhjä palauttaa null. Muuten voit hakea item Titlen tai Gtin koodin mukaan */ }
          {
            items.filter((item) => {
            
                if (searchItems === ""){
                  return null

                } else if (item.title.toLowerCase().includes(search.toLowerCase()) || item.gtin.toLowerCase().includes(search.toLowerCase())){
                  return <ProductCard key={item.id} item={item}  />
                }

              }).map((item) => { 
                return <ProductCard key={item.id} item={item}  />
              })
              
          }
        
        </Row>
      </Container> 
  )
}
export default Shop;