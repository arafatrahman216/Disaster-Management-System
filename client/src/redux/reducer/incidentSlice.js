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
        },
        {
            incidentId:"3",
            incidentName:"Drought2",
            location:"Rajshahi2",
            commId:null
        },
        {
            incidentId:"4",
            incidentName:"Drought3",
            location:"Rajshahi3",
            commId:"2346"
        },
        {
            incidentId:"5",
            incidentName:"Drought4",
            location:"Rajshahi4",
            commId:null
        },
        {
            incidentId:"6",
            incidentName:"Drought5",
            location:"Rajshahi5",
            commId:"2348"
        },
        {
            incidentId:"7",
            incidentName:"Drought6",
            location:"Rajshahi6",
            commId:null
        },
        {
            incidentId:"8",
            incidentName:"Drought7",
            location:"Rajshahi7",
            commId:"23455"
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