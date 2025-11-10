import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//store-redux imports
import { useSelector, useDispatch } from 'react-redux'
import { 
  increment,
  decrement,
  selectCount
} from './store/reducerstest/counterReducer.js'
import {
  getAgentsData,
  selectData
} from './store/reducers/agentsReducer.js'
import { selectAgentNames } from './store/selectors/agents.js'


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
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
