//import './App.css';
import Nav from './components/Layout/Header';
import About from './components/Pages/About';
import Shop from './components/Pages/Shop';
import Product from './components/Pages/Product';
import Cart from './components/Pages/Cart';
import Footer from './components/Layout/Footer';


import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootsrapin css

//Käytetään rect-router-domia, jotta voidaan ohjata ja näyttää oikea sivu
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>  
      <div className="App">
        <Nav />
          <Switch>
            <Route path="/" exact component={Home} />  {/* reitit sivuille. exact käytetään jotta voidaan mennä /shop sivulle tai /shop/id. Muuten loppuisi matka / kohdalla */}
            <Route path="/about" component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={Product}/>
            <Route path="/cart" component={Cart}/>
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <Container>
      <h1>Home Page</h1>
    </Container>
  </div>
);

export default App;