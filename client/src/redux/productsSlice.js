import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { productsUrl } from "../js/endpoints";

const initialState = {
    products: [],
    loading: false,
    error: null
}

export const fetchProducts = createAsyncThunk("productList/fetchProducts", async () => {
    try {
        const response = await axios.get(productsUrl);
        return [...response.data];
    } catch (err) {
        return err.message;
    }
});

const productsSlice = createSlice({
    name: "productList",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.error = null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.products = [];
                state.error = action.error.message;
            })
    }
});

export default productsSlice.reducer;
