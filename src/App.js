//import './App.css';
import Nav from './components/Layout/Header';
import Shop from './components/Pages/Shop';
import Product from './components/Pages/Product';
import Cart from './components/Pages/Cart';
import Footer from './components/Layout/Footer';
import Login from './components/UserController/Login';
import Register from './components/UserController/Register';

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootsrapin css
import { useState, useMemo } from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';  //Käytetään react-router-domia, jotta voidaan ohjata ja näyttää oikea sivu
import { UserContext } from './context/UserContext';                      //Voidaan lähettää user tietoja moneen paikkaan

function App() {
  const [user, setUser] = useState([]);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  
  return (
    <Router>
      <UserContext.Provider value={value}>  {/* tämän sisällä olevat componentit pääsevät käsiksi user stateen */}
      <div className="App">
        <Nav />
          <Switch>
              <Route exact path="/" component={Home} />  { /* reitit sivuille. exact käytetään jotta voidaan mennä /shop sivulle tai /shop/id. Muuten loppuisi matka / kohdalla */}
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/shop" exact component={Shop}   />
              <Route path="/shop/:id" component={Product}/>
              <Route path="/cart" component={Cart}/>
          </Switch>
          <Footer />
      </div>
      </UserContext.Provider>
    </Router>
  );
}

const Home = () => {
  return (
    <Container style={{ marginTop: '10%' }}>
      <h3 style={{textAlign: 'center'}}>Verkkokauppa harjoitus</h3>
      <br /><br />
      <p>Tässä pieni verkkokauppa sovellus. Sovelluksen ominaisuuksiin kuuluu: kaikkien tuotteiden menu, tietyn tuotteen esittäminen, mahdollisuus etsiä tiettyä tuotetta nimellä tai GTIN-koodilla, lisätä ostoskoriin uusi tuote, poistaa tuote ostoskorista, rekisteröityminen ja kirjautuminen.</p>
      <p>Kirjautumisen jälkeen käyttäjä ohjataan Shop sivulle ja tulee näkyville Search Bar jolla voit etsiä tuotteita.
      Jokaisella tuotteella on oma GTIN-Koodi ja tämä koodi näkyy yksittäisen tuotteen sivulla. Sinne pääsee painamalla Shop sivulla tuotteen (Details) nappia.</p>
      <p>Tässä valmiiksi koodi, jos haluaa vähä nopeuttaa. GTIN-Koodi: 6420256001547 on puhelimelle Nokia 5.4 älypuhelin 4/64GB</p> 
      
    </Container>
  )
}
export default App;