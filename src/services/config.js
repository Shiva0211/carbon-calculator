
import axios from 'axios'

const api = axios.create({
  baseURL: 'any url here',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

api.interceptors.request.use(
  async config => {
    const token = await session.getValue('TOKEN')
    const project = JSON.parse(await session.getValue('selectedProject'))
    
    if (token) {
      config.headers.Authorization = `bearer ${token}`
    }
    if (project) {
      config.headers.ProjectId = project.projectId._id
    }

    // console.log('Starting Request', JSON.stringify(config, null, 2))
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

export default api
