import {createSlice} from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState={
    anouncements:[]
}

const anouncementSlice=createSlice({
    name:'anouncement',
    initialState,
    reducers:{
        addAnouncement:(state,action)=>{
            const anouncement={
                id:nanoid(),
                author:action.payload.userId,
                text:action.payload.anouncement
            }
            state.anouncements.push(anouncement);
        },
        removeAnouncement:(state,action)=>{
            state.anouncements=state.anouncements.filter(
                (anouncement)=>anouncement.id!=action.payload.id
            )
        }
    }
})

export const {addAnouncement,removeAnouncement}=anouncementSlice.actions;
export default anouncementSlice.reducer;