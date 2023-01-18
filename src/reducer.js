export const initialState = {
    Cart: [],
    user: null,
};

export const getCartTotal = (Cart) => 
Cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action); //To Check the working of add to cart button
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'ADD_TO_CART':
            //Logic to add items in Cart
            return { 
                ...state,
                Cart: [...state.Cart, action.item],
             };
        case 'REMOVE_FROM_CART':
            //Logic to add items in Cart
            let newCart = [...state.Cart];

            const index = state.Cart.findIndex((CartItem) => CartItem.id === action.id);

            if (index >= 0) {
                //item exists in Cart and we have to remove it.
                newCart.splice(index, 1);
            } else { 
                console.warn( //Console log in red color (as a warning)
                  `Cannot remove product (id:${action.id}) as it is not in cart`  
                )
            }

            return { 
                ...state,
                Cart: newCart,
            };
        default:
            return state ;
    }
}

export default reducer;
