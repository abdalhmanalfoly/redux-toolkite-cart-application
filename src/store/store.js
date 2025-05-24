import { configureStore } from "@reduxjs/toolkit";
import productSlidesSlice from "../slides/product-slides";
import cartSlice from "../slides/Cart-slice";

export const store = configureStore({  
    reducer: {
        Products : productSlidesSlice,

        cartslice: cartSlice,

}
})