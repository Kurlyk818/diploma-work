import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details: JSON.parse(localStorage.getItem('product')) ? JSON.parse(localStorage.getItem('product')) : []
}

export const productDetailsSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.details = action.payload;
            localStorage.setItem('product', JSON.stringify(state.details));
        }
    }
})

export const { setProduct } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;