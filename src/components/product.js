import React, {useState, useEffect} from "react";

function Product({ match }) { //UseEffect = kun sivulla tapahtuu jotatain tai ensikertaa ladataan.
    useEffect(() => {   //Match hakee tiedot urlista ja tätä voidaan hyödyntaa jos esim halutaan hakea id tiedot
        fetchItem();
        console.log(match);
    }, [])

    const [item, setItem] = useState([]); //saten määritys


    //Hetaan rest apista tämä id data ja laitetaan stateen
    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
        const item = await fetchItem.json();
        console.log(item);
        setItem(item);
    };
    

  return (
    <div className="App">
        <h1 style={{fontSize: 20}}>{ item.title }</h1> {/* renderöidään käyttäjälle title ja kuva */}
        <img style={{maxHeight: 240}} src={item.image} alt="tuote"/>
    </div>
  );
}

export default Product;