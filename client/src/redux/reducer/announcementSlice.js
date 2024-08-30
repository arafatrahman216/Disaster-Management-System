// import {createSlice} from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const initialState={
//     announcements:[]
// }

// const announcementSlice=createSlice({
//     name:'announcement',
//     initialState,
//     reducers:{
//         addAnnouncement:(state,action)=>{
//             const announcement={
//                 id:nanoid(),
//                 author:action.payload.userId,
//                 text:action.payload.announcement
//             }
//             state.announcements.push(announcement);
//         },
//         removeAnnouncement:(state,action)=>{
//             state.announcements=state.announcements.filter(
//                 (announcement)=>announcement.id!=action.payload.id
//             )
//         }
//     }
// })

// export const {addAnnouncement,removeAnnouncement}=announcementSlice.actions;
// export default announcementSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
    announcements: []
};

const announcementSlice = createSlice({
    name: 'announcement',
    initialState,
    reducers: {
        addAnnouncement: (state, action) => {
            const announcement = {
                id: nanoid(), // generates a unique ID
                author: action.payload.userId, // gets userId from payload
                text: action.payload.announcement // gets announcement text from payload
            };
            state.announcements.push(announcement);
        },
        removeAnnouncement: (state, action) => {
            state.announcements = state.announcements.filter(
                (announcement) => announcement.id !== action.payload.id
            );
        }
    }
});

export const { addAnnouncement, removeAnnouncement } = announcementSlice.actions;
export default announcementSlice.reducer;
