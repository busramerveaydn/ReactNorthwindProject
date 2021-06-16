//reducer gönderdiğimiz aksiyona göre sepetin son hali

import { ADD_TO_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems:cartItems
}

export default function carReduces(state=initialState,{type,payload}){
    //gelecek olan type göre hareket edilen nokta (state in değiştirilmesi)
    switch (type) {
        case ADD_TO_CART:
            // state teki cartItem larınn içerisinde bul p için p.product.id eşitmidir payload dan gelen id ye 
            let product = state.cartItems.find(p=>p.product.id === payload.id)
            break;
    
        default:
            break;
    }
}