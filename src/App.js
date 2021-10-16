import './App.css';
import Nav from './components/navigointi/Nav';
import About from './components/About';
import Shop from './components/Shop';
import Product from './components/product';
import Cart from './components/Cart';

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
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);


export default App;