export const getAgentNames = (agentsList = []) => {

  return agentsList.map(agent => agent.displayName)
  
}
