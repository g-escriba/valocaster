import { getAgentNames } from '../../utils/agentsFilter.js'

export const selectAgentNames = state => {

  return getAgentNames(state.agents.list);

}
