import { useState, useEffect } from 'react'

//component imports
import Autocomplete from '../components/AutoComplete.jsx'

//store-redux imports
import { useSelector, useDispatch } from 'react-redux'
import { 
  increment,
  decrement,
  selectCount
} from '../store/reducerstest/counterReducer.js'
import {
  getAgentsData,
  selectData
} from '../store/reducers/agentsReducer.js'
import { selectAgentNames } from '../store/selectors/agents.js'


function App() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const agentsData = useSelector(selectData)
  const agentNames = useSelector(selectAgentNames)
  const [agentNamesList, setAgentNamesList] = useState([])

  useEffect(() => {

    dispatch(getAgentsData())

  }, [dispatch])
  useEffect(() => {

    if(agentsData.length > 0) setAgentNamesList(agentNames);

  }, [agentsData])

   
  return (
    <>
      <div>
        <Autocomplete suggestions={agentNames}/>
      </div>
    </>
  )
}

export default App
