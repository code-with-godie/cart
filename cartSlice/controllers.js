export  const getCartItems = async (state,{payload})=>{
    try {
        const response = await fetch(payload);
        const responseJson = await response.json();
        if(responseJson.status == 200){
            return {...state,cart:responseJson,loading:false}
        }
        return {...state,loading:false,error:'could not fetch cart data!'}
    } catch (error) {
        return {...state,error:error.message,loading:false}
    }
}
export  const setCartItems =  (state,{payload})=>{
    return {...state,cart:payload}
}
export  const addCartItem =  (state,{payload})=>{
    return {...state,cart:[...state.cart,payload]}
}
export  const clearCart = (state)=>{
    return {...state,cart:[]}
}
export  const removeCartItem = (state,{payload})=>{
    const cart = state.cart.map(cartItem => cartItem.id !== payload);
    return {...state,cart}
}
export  const increaseItemAMount = (state,{payload})=>{
    const cart = state.cart.map(cartItem=>{
        if(cartItem.id === payload){
            return {...cartItem,amount:cartItem.amount + 1}
        }
        return cartItem;
    });
    return {...state,cart}
}
export  const decreaseItemAMount = (state,{payload})=>{
    const cart = state.cart.map(cartItem=>{
        if(cartItem.id === payload){
            return {...cartItem,amount:cartItem.amount - 1}
        }
        return cartItem;
    }).filter(cartItem => cartItem.amount !== 0);
    return {...state,cart}
}
export  const getCartTotal = (state)=>{
    let {amount,total} = state.cart.reduce((cartTotal,cartItem)=>{
        const {price,amount} = cartItem;
        const itemTotal = price * amount;
        cartTotal.amount += amount;
        cartTotal.total += itemTotal;
    },{total:0,amount:0});
    total = parseFloat(total.toFixed(2));
    return {...state,amount,total}
}