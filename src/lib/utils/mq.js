import config from './../config'

const breakpoints = {}
config.forEach((item) => {
  breakpoints[item.name] = item.size
})

const mq = Object.keys(breakpoints)
  .map((key) => [key, breakpoints[key]])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (min-width: ${breakpoint}px)`
    return prev
  }, {})

export default mq
