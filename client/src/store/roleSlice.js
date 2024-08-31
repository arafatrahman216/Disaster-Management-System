import { createSlice } from '@reduxjs/toolkit'
const roleSlice= createSlice({
    name : "role",
    initialState : {
        isAdmin : false,
        role : "none",
        loggedIn : false,
    },
    reducers:{
        changeRole(state, action){
            const updatedAdmin= action.payload.isAdmin;
            const updatedRole= action.payload.role;
            const updatedLoggedIn= action.payload.loggedIn;
            console.log(action.payload);
            return { ...state, isAdmin: updatedAdmin, role: updatedRole, loggedIn: updatedLoggedIn};
        },
        remove(){

        }
    }
});

export const { changeRole, remove} = roleSlice.actions;
export const roleReducer = roleSlice.reducer;