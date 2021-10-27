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

//Käytetään rect-router-domia, jotta voidaan ohjata ja näyttää oikea sivu
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useState } from 'react';





function App() {

  const [user, checkUser] = useState({user: 'found'})





  return (
    <Router>  
      <div className="App">
        <Nav user={user} />
          <Switch>
            <Route exact path="/" component={Home}/>  { /* reitit sivuille. exact käytetään jotta voidaan mennä /shop sivulle tai /shop/id. Muuten loppuisi matka / kohdalla */}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/shop" exact component={Shop}   />
            <Route path="/shop/:id" component={Product}/>
            <Route path="/cart" component={Cart}/>
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

const Home = () => {
 

  return (
    <Container style={{textAlign: 'center', marginTop: '20%'}}>
      <h3>Reactin opettelua</h3>
      <p>Jatkan tätä pikkuhiljalleen. Kokeilen kasata verkkokauppa harjoituksen ja lisäilen osina GitHubiin.</p>
      <p>Kirjaudu tai rekisteröidy sivulle jotta voit käyttää haku mahdollisuutta</p>
    </Container>
  )
}


export default App;