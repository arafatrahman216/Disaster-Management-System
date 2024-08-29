import { createSlice } from '@reduxjs/toolkit'
const roleSlice= createSlice({
    name : "role",
    initialState : {
        isAdmin : false,
        role : "none",
        loggedIn : false
    },
    reducers:{
        add(state, action){
            const updatedAdmin= action.payload.isAdmin;
            console.log(action.payload);
            return { ...state, isAdmin: updatedAdmin}
            
        },
        remove(){

        }
    }
});

export const { add, remove} = roleSlice.actions;
export const roleReducer = roleSlice.reducer;