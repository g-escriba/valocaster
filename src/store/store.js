import { createSlice, configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducerstest/counterReducer'
import agentsReducer from './reducers/agentsReducer.js'

export const store = configureStore({

  reducer: {

    counter: counterReducer,
    agents: agentsReducer,

  }

})
