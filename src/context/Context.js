import { createContext, useContext, useReducer} from "react";
import { cartReducer } from "./Reducer";  //Reducer toimii cart stateen tuotteen lisäyksenä tai poistona

/*  Tehdään cart context, jota voidään käyttää jokapaikassa. Tällä saadaan näkymään muutokset heti 
    Ostoskorin määrä ja tuotteet voidaan ottaa näkyville Cart.js sivulla.
*/

const Cart = createContext();

const Context = ({ children }) => {
    
    const [state, dispatch] = useReducer(cartReducer, {
        cart: []
    })
    return (
        <Cart.Provider value={{ state, dispatch}}>
          {children}
        </Cart.Provider>
      );
}
export default Context;
export const CartState = () => {
    return useContext(Cart);
}