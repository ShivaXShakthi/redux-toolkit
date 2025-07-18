import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/CounterReducer";


//created the global store here...
export const store = configureStore({
    reducer: {
        counterSlice: counterSlice
    }
});