import {createSlice} from '@reduxjs/toolkit';

export interface IState {
    id: number,
    path: string,
    title: string,   
}

export const initialState:IState[] = [
    {
        id: 1,
        path: '/home',
        title: 'Home',
    },
    {
        id: 2,
        path: '/test',
        title: 'Test',
    },
]

 export const NavigationSlice = createSlice({
    name: 'navigate',
    initialState,
    reducers: {

    }
})

export default NavigationSlice.reducer;
