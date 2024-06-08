import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            for (let i = 0; i < state.products.length; i++) {
                if (state.products[i]._id === action.payload._id) {
                    if(state.products[i].quantity < action.payload.amount) {
                        state.products[i].quantity += 1;
                        localStorage.setItem("cart", JSON.stringify(state.products));
                    }
                    return;
                }
            }
            const productToAdd = {
                _id: action.payload._id,
                name: action.payload.name,
                imageUrl: action.payload.imageUrl,
                price: action.payload.price,
                quantity: 1
            }
            state.products.push(productToAdd);
            localStorage.setItem("cart", JSON.stringify(state.products));
        },
        removeProductFromCart: (state, action) => {
            for (let i = 0; i < state.products.length; i++) {
                if (state.products[i]._id === action.payload._id) {
                    if(state.products[i].quantity > 0) {
                        state.products[i].quantity -= 1;
                        if(state.products[i].quantity === 0) {
                            state.products = state.products.filter(item => item._id !== state.products[i]._id);
                        }
                        localStorage.setItem("cart", JSON.stringify(state.products));
                        return;
                    }
                }
            }
        },
        removeAllFromCart: (state, action) => {
            state.products = state.products.filter(item => item._id !== action.payload._id);
            localStorage.setItem("cart", JSON.stringify(state.products));
        },
        adjustProductInCart: (state, action) => {
            for (let i = 0; i < state.products.length; i++) {
                if (state.products[i]._id === action.payload._id) {
                    if (state.products[i].quantity > action.payload.amount) {
                        state.products[i].quantity = parseInt(action.payload.amount);
                    }
                    if (state.products[i].name !== action.payload.name) {
                        state.products[i].name = action.payload.name;
                    }
                    if (state.products[i].price !== action.payload.price) {
                        state.products[i].price = parseFloat(action.payload.price).toFixed(2);
                    }
                    localStorage.setItem("cart", JSON.stringify(state.products));
                    return;
                }
            }
        },        
        clearCart: (state) => {
            state.products = [];
            localStorage.setItem("cart", JSON.stringify(state.products));
        }
    }
})

export const { addProductToCart, removeProductFromCart, removeAllFromCart, adjustProductInCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
