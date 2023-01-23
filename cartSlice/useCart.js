import React, { useEffect, useReducer} from 'react'
import { CART_ACTIONS } from './ACTIONS';
import { reducer } from './reducer';
export const useCart = (cart,url) => {
    const initialState = {
        cart:[],
        amount:0,
        total:0,
        loading:true,
        error:null
    }
    const [state,dispatch] = useReducer(reducer,initialState);
    useEffect(getCartTotal,[state.cart]);
    useEffect(()=>{
        if(url){
            getCartItems(url);
        }
            setCartItems(cart || []);
    },[]);

    //user cart controllers
    const clearCart = ()=>{
        dispatch({type:CART_ACTIONS.clearCart});
    }
    const removeCartItem = (id)=>{
        dispatch({type:CART_ACTIONS.removeCartItem,payload:id});
    }
    const increaseItemAMount = (id)=>{
        dispatch({type:CART_ACTIONS.increaseItemAMount,payload:id})
    }
    const decreaseItemAMount = (id)=>{
        dispatch({type:CART_ACTIONS.decreaseItemAMount,payload:id})
    }
    const getCartTotal = ()=>{
        dispatch({type:CART_ACTIONS.getCartTotal});
    }
    const getCartItems = url =>{
        dispatch({type:CART_ACTIONS.getCartItems,payload:url});
        return true;
    }
    const setCartItems = cart=>{
        dispatch({type:CART_ACTIONS.setCartItems,payload:cart});
        return true;
    }
    const addCartItem= cartItem =>{
        dispatch({type:CART_ACTIONS.addCartItem,payload:cartItem});
        return true;
    }
    return {...state,clearCart,removeCartItem,increaseItemAMount,decreaseItemAMount,getCartTotal,getCartItems,addCartItem}
}


