//reducer gönderdiğimiz aksiyona göre sepetin son hali

import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems:cartItems
}

export default function cartReducer(state=initialState,{type,payload}){
    //gelecek olan type göre hareket edilen nokta (state in değiştirilmesi)
    switch (type) {
        case ADD_TO_CART:
            // state teki cartItem larınn içerisinde bul p için p.product.id eşitmidir payload dan gelen id ye 
            let product = state.cartItems.find(p=>p.product.id === payload.id)
            if (product) {
                product.quantity++;
                //yeni bir cartItems objesini döndürür(new lemek gibi)
                return{
                    ...state
                }
            } else {
                //redux da push olmaz çünkü referans değişmez
                return{
                    //cart items da birden fazla eleman varsa diye ...state yazılır korumak için
                    ...state,
                    cartItems:[...state.cartItems,{quantity:1,product:payload}]
                };
            }

        case REMOVE_FROM_CART:
            return{
                ...state,
                //!== farklıysa
                cartItems:state.cartItems.filter(c=>c.product.id!==payload.id),
            };
    
        default:
            return state;
    }
}