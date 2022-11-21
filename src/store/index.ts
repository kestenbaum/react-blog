import { configureStore } from "@reduxjs/toolkit";
import  NavigationSlice from "../store/reducer/Navigation";

export const store = configureStore({
    reducer: {
        navigation: NavigationSlice, 
    }
})

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;