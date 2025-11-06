import { createSlice, configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducerstest/counterReducer'

export const store = configureStore({

  reducer: {

    counter: counterReducer

  }

})
