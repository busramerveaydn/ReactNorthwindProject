//reducer a gönderilen aksiyonalr sepete kele sil vb.
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export function addToCart(product){
    //redux bir aksiyon yapıldığında bana bir obje gönder der

    return{
        type : ADD_TO_CART,
        payload: product
    }
        
}

export function removeFromCart(product){
    //redux bir aksiyon yapıldığında bana bir obje gönder der

    return{
        type : REMOVE_FROM_CART,
        payload: product
    }
}