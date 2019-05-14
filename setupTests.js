import 'react-testing-library/cleanup-after-each'

global.requestIdleCallback = cb => cb()

global.cancelIdleCallback = () => {}

global.window.requestIdleCallback = global.requestIdleCallback
global.window.cancelIdleCallback = global.cancelIdleCallback

// this is just a little hack to silence a warning that we'll get until react
// fixes this: https://github.com/facebook/react/pull/14853
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})
