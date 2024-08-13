import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        //jo add to cart m item aayi hai use action.payload se access krte hai.
        add:(state,action) => {
            state.push(action.payload);
        },
        //jo card m phle se usse filter krdo.
        remove:(state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;