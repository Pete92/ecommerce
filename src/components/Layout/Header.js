//Linkki käyttöön react-router-domista
import {Link} from 'react-router-dom'; 
import { CartState } from '../../context/Context';



/* NAVIGOINTI */

function Nav({ user }) {
  //console.log(user)

  //Kirjautuneelle reitti Logouttiin
  function UserGreeting() {
    return <Link style={NavStyle} to="/logout"> {/* Navigoinnissa jokaiselle linkille oma reitti ja vähän Css */}
    <li>Logout</li>
  </Link>;
  }
  //Ei kirjautunut
  function GuestGreeting() {
    return <Link style={NavStyle} to="/login"><li>Login</li></Link>
  }
  function Greeting() {
    const isLoggedIn = user.user;
    if (isLoggedIn !== 'found') {    
        return <UserGreeting />;  
    }  

    return <GuestGreeting />;
}

function RegisterUser() {
  return <Link style={NavStyle} to="/register"><li>Register</li></Link>
}

function Register() {
  const isRegistered = user.user;
  if (isRegistered !== 'found') {    
    return null
  }  
  return <RegisterUser />;
  
}

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
        <Greeting isLoggedIn={false} />
        <Register isRegistered={false}/>
          <Link style={NavStyle} to="/shop" user={user}>
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