//import './App.css';
import Nav from './components/Layout/Header';
import Shop from './components/Pages/Shop';
import Product from './components/Pages/Product';
import Cart from './components/Pages/Cart';
import Footer from './components/Layout/Footer';
import Login from './components/UserController/Login';
import Register from './components/UserController/Register';

import 'bootstrap/dist/css/bootstrap.min.css'; //bootsrapin css
import { useState, useMemo } from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';  //Käytetään react-router-domia, jotta voidaan ohjata ja näyttää oikea sivu
import { UserContext } from './context/UserContext';                      //Voidaan lähettää user tietoja moneen paikkaan
import { Redirect } from "react-router-dom";                              //Ohjataan käyttäjä suoraan /shop sivulle


function App() {
  const [user, setUser] = useState([]);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  
  return (
    <Router>
      <UserContext.Provider value={value}>  {/* tämän sisällä olevat componentit pääsevät käsiksi user stateen */}
      <div className="App">
        <Nav />
          <Switch>
              <Redirect from="/" to="/shop" exact />  { /* reitit sivuille. exact käytetään jotta voidaan mennä /shop sivulle tai /shop/id. Muuten loppuisi matka / kohdalla */}
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

export default App;