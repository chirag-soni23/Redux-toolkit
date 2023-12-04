import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value:0
}
export const counterSlice = createSlice({
    name:"Counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        decrement:(state)=>{
            state.value -=1
        },
        incrementbyAmount:(state,action)=>{
            state.value += action.payload
        }

    }
})
export const {increment,decrement,incrementbyAmount} = counterSlice.actions

export default counterSlice.reducer