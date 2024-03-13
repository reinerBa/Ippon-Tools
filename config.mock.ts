import { MockHandler } from 'vite-plugin-mock-simple'


export default (): MockHandler[] => [
  {
    pattern: '/configuration.json',
    method: 'GET',
    handle: (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(""))
    }  
  },
]

