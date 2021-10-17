import React from "react";
//Linkki käyttöön react-router-domista
import {Link} from 'react-router-dom'; 

/* NAVIGOINTI */

function Nav() {
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
      li:{
        color: 'white'
      }
  }

  return (
    <nav style={navCss}>
        <h3>Logo</h3>
        <ul style={navLinks}>
          <Link to="/about"> {/* Navigoinnissa jokaiselle linkille oma reitti ja vähän Css */}
            <li>About</li>
          </Link>
          <Link style={NavStyle} to="/shop">
            <li>Shop</li>
          </Link>
          <Link style={NavStyle} to="/cart">
            <li>Cart</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;