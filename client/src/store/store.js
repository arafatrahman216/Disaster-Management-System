import { configureStore } from "@reduxjs/toolkit";
import { roleReducer } from "./roleSlice";

const store = configureStore({
    reducer :{
        roleState : roleReducer,
    }
});

export default store;