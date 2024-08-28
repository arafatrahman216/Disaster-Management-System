import {configureStore} from '@reduxjs/toolkit'
import loggedInReducer from '../reducer/loggedInSlice'
import incidentReducer from '../reducer/incidentSlice'

export const store=configureStore({
    reducer:{
        loggedInReducer,
        incidentReducer
    }
})

//After adding reducers to the store,
// we need to add a provider in index.js to access
// store from all the children elements