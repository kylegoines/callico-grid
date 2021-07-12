import { createContext } from 'react'
import config from './config'

console.log('set up')

const configObj = {}
configObj.raw = config
const configNames = config.map((item) => item.name)
configObj.names = configNames

const ConfigContext = createContext(configObj)

export default ConfigContext
