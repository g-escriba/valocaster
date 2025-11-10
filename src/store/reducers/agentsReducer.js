import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAgents } from '../../services/valorantApi.js'

const agentsSlice = createSlice({

  name: 'agents',
  initialState: {
    list: [],
    status: 'idle',
    error: null
  },
  reducers: {

    setLoading: (state) => {

      state.status = 'loading'
      state.error = null

    },
    setAgents: (state, action) => {

      state.status = 'succeeded'
      state.list = action.payload

    },
    setError: (state, action) => {

      state.status = 'failed'
      state.error = action.payload

    }

  }
  
})

export const { setLoading, setAgents, setError } = agentsSlice.actions
export const selectData = state => state.agents.list

export const getAgentsData = () => async (dispatch) => {

  try{

    dispatch(setLoading())
    const data = await getAgents()
    dispatch(setAgents(data.data))

  }catch(err){

    dispatch(setError(err.message))

  }

}

export default agentsSlice.reducer
