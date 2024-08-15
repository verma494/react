import { DEFAULT_ITEMS } from "../data/items";
import {configureStore, createSlice} from "@reduxjs/toolkit";
const itemSlice = createSlice({
    name:"items",
    initialState:[],
    reducers:{
        addInitialItems : (store,action)=>{
            
            return action.payload;
        }
    }
});
export const itemActions = itemSlice.actions;
export default itemSlice;
