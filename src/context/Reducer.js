export const cartReducer = (state, action) => {
    switch (action.type) { 
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1}] }; //Lisätään cart stateen item ja qty on 1
        case "REMOVE_FROM_CART":    
            return { 
                ...state, // Palautaan state jossa on eri id kuin cart id(cart.id ei sisällä samaa id:llä olevaa tuotetta)
                cart: state.cart.filter((c) => 
                    c.id !== action.payload.id),
            };
        case "CHANGE_CART_QTY":
            return {
                ...state, cart:state.cart.filter((c)=> //Jos cart.id on sama kuin payload.id, niin lisätään cart.qty:iin payload.qty, muuten annetaan olla
                c.id === action.payload.id ? ( c.qty = action.payload.qty ) : c.qty
                ),
            };
        default: 
            return state;
    }
};