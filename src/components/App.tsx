import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore } from 'redux'



/* eslint-disable @typescript-eslint/no-explicit-any */
// const store = createStore(
//   reducer,
//   (window as any).__REDUX_DEVTOOLS_EXTENSION__
//   && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
// )
// const replace = () => {
//   /* eslint-disable @typescript-eslint/no-var-requires */
//   const nextReducer = require('../store/reducer')
//   store.replaceReducer(nextReducer)
// }

// if (module.hot) {
//   module.hot.accept('../store/reducer', replace)
// }

const App = () => (
  <div>Hello World</div>
)

export default App;
