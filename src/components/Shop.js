import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

/* TUOTEET. Pitää varmaankin tehdä toinen state johon voidaan työntää halutut tuotteet ja
    näistä tuotteista tiedot(hinta, title, koko). Tämä viedään sitten cart sivulle.
*/


function Shop() {               //UseEffect = kun sivulla tapahtuu jotatain tai ensikertaa ladataan.
    useEffect(() => {
        fetchItems();           //kutsutaan fetchItems functionia
    }, [])

    const [items, setItems] = useState([]); //saten määritys

    //Haetaan dataa urlista ja laitetaan json muodossa
    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const items = await data.json();
        console.log(items);
        setItems(items); //laitetaan urlista saatu data stateen
    };
    

  return (
    <div className="App">
       {items.map(item => ( //Käytetään map functionia joka etsii halutun id tiedot
          <h1 key={item.id}>
            <Link to={`/shop/${item.id}`}>{item.title}</Link> {/* linkki vie tämän id:en tuote sivulle */}
            </h1>      
      ))} 
    </div>
  );
}

export default Shop;