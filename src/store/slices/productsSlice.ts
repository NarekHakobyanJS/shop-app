import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsAPI } from "../../api/api";

export const getAllProducts = createAsyncThunk(
    'getAllProducts',
    async () => {
        const response = await ProductsAPI.getAll();
        return response.data.carts
    }
)

const initialState = {
    products : []
}

const productSlice = createSlice({
    name : "productSlice",
    initialState,
    reducers : {

    },
    extraReducers(builder) {
        builder.addCase(getAllProducts.fulfilled, (state : any, action) => {
            state.products = action.payload
        })
    },
})

export default productSlice.reducer 
