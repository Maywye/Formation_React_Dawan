import { configureStore } from "@reduxjs/toolkit";
import { Basket } from './Basket';



//On va assembler le state, les actions et le reducer
const Store = configureStore({
    reducer: {
        Basket: Basket.reducer
    }

})
export default Store;