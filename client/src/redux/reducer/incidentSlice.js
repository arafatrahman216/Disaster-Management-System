import {createSlice} from '@reduxjs/toolkit'

const initialState={
    incidents:[
        {
            incidentId:"1",
            incidentName:"Flood",
            location:"Feni",
            commId:"123"
        },
        {
            incidentId:"2",
            incidentName:"Drought",
            location:"Rajshahi",
            commId:"234"
        }
    ]
}

const incidentSlice=createSlice({
    name:"incidents",
    initialState,
    reducers:{
        removeIncident:(state,action)=>{
            state.incidents.filter((incident)=>incident.incidentId!=action.payload.incidentId)
        }
    }
})

export const {removeIncident}=incidentSlice.actions;
export default incidentSlice.reducer;