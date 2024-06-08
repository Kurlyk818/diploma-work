import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details: JSON.parse(localStorage.getItem('order')) ? JSON.parse(localStorage.getItem('order')) : []
}

export const orderDetailsSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrder: (state, action) => {
            state.details = action.payload;
            localStorage.setItem('order', JSON.stringify(state.details));
        }
    }
})

export const { setOrder } = orderDetailsSlice.actions;

export default orderDetailsSlice.reducer;