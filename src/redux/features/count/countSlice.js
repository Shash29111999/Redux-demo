import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    count : 2
}

const countSlice = createSlice({
    name : 'count',
    initialState,
    reducers : {
        increment : (state, action ) => {
            state.count++;
        },
        incrementByFive : (state , action) => {
            state.count = state.count + action.payload;
        },
        decrement : (state , action) => {
            state.count--;
        },
        reset : (state) => {
            state.count = 2
        }
    }
})

export const {increment , incrementByFive , decrement , reset} = countSlice.actions

export default countSlice.reducer