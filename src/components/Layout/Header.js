//Linkki käyttöön react-router-domista
import { useContext } from 'react';
import {Link} from 'react-router-dom'; 
import { CartState } from '../../context/Context';
import { UserContext} from '../../context/UserContext';



/* NAVIGOINTI */

function Nav() {

  const { user } = useContext(UserContext);
  console.log(user)
  

  const {
    state: { cart }
  } = CartState();

  const NavStyle = {
    color: 'White'
  };

  const navCss = {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      //minHheight: '10vh',
      background: 'rgb(73, 79, 82)',
      color: 'white',
      padding: '0.1rem'
  };

  const navLinks = {
      width: '50%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      listStyle: 'none',
      margin: 'auto 0',
  }

  return (
    <nav style={navCss}>
        <h3>Logo</h3>
        <ul style={navLinks}>
          { /* Jos käyttäjä löytyy */
            user.length === 0 ? <Link style={NavStyle} to="/login">
              <li>Login </li>
            </Link> : <Link style={NavStyle} to="/logout">
              <li>logout </li>
            </Link>
          }

          { /* Jos käyttäjä löytyy */
            user.length === 0 ? <Link style={NavStyle} to="/register">
              <li>Register </li>
            </Link> : ''
          }
          <Link style={NavStyle} to="/shop">
            <li>Shop </li>
          </Link>
          <Link style={NavStyle} to="/cart">
            <li>Cart({cart.length})</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;