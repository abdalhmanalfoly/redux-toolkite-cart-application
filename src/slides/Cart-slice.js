import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: [],
    name: "cartslice",
    reducers: {
    addtocart: (state, action) => {
        const fuondedproduct = state.find((item) => item.id === action.payload.id);
        if (fuondedproduct) {
            fuondedproduct.quantity += 1;
            // If the product is already in the cart, we can update its quantity or any other property if needed
        }else {
            const productcloine = {...action.payload , quantity:1};
            state.push(productcloine);


        }        
    },
    deletecart: (state, action) => {
        return state.filter((item) => item.id !== action.payload.id);
    },
    clearcart: (state, action) => {
        return [];
        
    },
    }
});
export const { addtocart, deletecart, clearcart } = cartSlice.actions;
export default cartSlice.reducer;
