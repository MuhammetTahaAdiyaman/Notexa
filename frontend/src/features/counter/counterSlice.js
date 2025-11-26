import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        topla: (state) => {
            state.value += 1
        },
        cikar: (state) => {
            state.value -= 1
        },
        degereGoreTopla: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { topla, cikar, degereGoreTopla } = counterSlice.actions
export default counterSlice.reducer