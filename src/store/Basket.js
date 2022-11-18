import { createSlice } from "@reduxjs/toolkit"
//Creation du reducer
//Un reducer va contenir un state et une action
//et retourne un nouvel state
export const Basket = createSlice({
    //le nom du Slice
    name: 'basket',

    //le state inital du slice
    initialState : {
        value: 0
    },

    //On définit les actions et la logique du reducer
    reducers : {
        add: (state) => {state.value++},
        remove:(state) => {state.value--}
    }
})

export const {add, remove} = Basket.actions;

export default Basket.reducer;