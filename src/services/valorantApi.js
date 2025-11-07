import axios from 'axios'

export const getAgents = async () => {

  const response = await axios.get('https://valorant-api.com/v1/agents')

  return response.data

}
