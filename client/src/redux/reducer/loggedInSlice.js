import {createSlice} from '@reduxjs/toolkit'

const initialState={
    loggedInStatus:false,
    userType:"admin",
    userId:null,
    userName:null,
    userEmail:null
}

export const loggedInslice=createSlice({
    name:'loggedInInfo',
    initialState,
    reducers:{
        changeloggedInStatus:(state,action)=>{
            if(state.loggedInStatus){
                state.loggedInStatus=false;
                state.userType=null;
                state.userEmail=null;
                state.userName=null;
                state.userId=null;
            }else{
                state.loggedInStatus=true;
                state.userType=action.payload.userType;
                state.userEmail=action.payload.userEmail;
                state.userName=action.payload.userName;
                state.userId=action.payload.userId;
            }
        }
    }
})

export const {changeloggedInStatus}=loggedInslice.actions;
export default loggedInslice.reducer;