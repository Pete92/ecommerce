import React from "react";
//Linkki käyttöön react-router-domista
import {Link} from 'react-router-dom'; 

function Nav() {
  const NavStyle = {
    color: 'White'
  };

  return (
    <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
          <Link style={NavStyle} to="/about"> {/* Navigoinnissa jokaiselle linkille oma reitti ja vähän Css */}
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