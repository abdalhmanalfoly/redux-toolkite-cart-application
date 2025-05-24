import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("productSlides/fetchSlides", async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        throw error;
    }
});


const productSlidesSlice = createSlice({
    name: "productSlides",
    initialState: [],
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state,actions) => {
                return actions.payload;
            })
    },
})

export const {} = productSlidesSlice.actions;
export default productSlidesSlice.reducer;
