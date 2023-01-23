import { CART_ACTIONS } from "./ACTIONS";
import { addCartItem, clearCart, decreaseItemAMount, getCartItems, getCartTotal, increaseItemAMount, removeCartItem, setCartItems } from "./controllers";

export const reducer = (state,action)=>{
    switch (action.type) {
        case CART_ACTIONS.clearCart:
            return clearCart(state);
        case CART_ACTIONS.increaseItemAMount:
            return increaseItemAMount(state,action);
        case CART_ACTIONS.decreaseItemAMount:
            return decreaseItemAMount(state,action);
        case CART_ACTIONS.removeCartItem:
            return getCartTotal(state);
        case CART_ACTIONS.getCartTotal:
            return removeCartItem(state,action);
        case CART_ACTIONS.getCartItems:
            return getCartItems(state,action);
        case CART_ACTIONS.getCartItems:
            return setCartItems(state,action);
        case CART_ACTIONS.addCartItem:
            return addCartItem(state,action);
    
        default:
            return state;
    }
}