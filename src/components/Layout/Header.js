import "../../App.css";
import { useContext } from 'react';
import {Link} from 'react-router-dom'; 
import { CartState } from '../../context/Context';      /*Hyödynnetään Contextit, voidaan näyttää montako itemiä on ostokorissa ja piilotella/näyttää likkejä jos löytyy/ei löydy user */
import { UserContext} from '../../context/UserContext';

/* NAVIGOINTI */

function Nav() {

  const { user } = useContext(UserContext);
  //console.log(user)
  
  const {
    state: { cart }
  } = CartState();

  return (
    <nav  className="navStyle">
        <Link className="NavStyle" to="/">
          <h3>Logo</h3>
        </Link>

        <ul className="navLinks">

          { /* Jos käyttäjä ei löydy */
            user.length === 0 ? 
            <Link className="NavStyle" to="/login">
                <li>Login </li>
              </Link> 
            : 
            <a href="/login" className="NavStyle" onClick={() => {
              localStorage.clear();
            }}>
              <li>Logout </li>
            </a>
          }

          { /* Jos käyttäjä ei löydy */
            user.length === 0 ? 
              <Link className="NavStyle" to="/register">
                <li>Register </li>
              </Link> 
            : 
            ''
          }
          <Link 
            className="NavStyle" 
            to="/shop"
          >
            <li>Shop</li>
          </Link>
          <Link 
            className="NavStyle" 
            to="/cart"
          >
            <li>Cart({cart.length})</li>
          </Link>
        </ul>
    </nav>
  );
}
export default Nav;