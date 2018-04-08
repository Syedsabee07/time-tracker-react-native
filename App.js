/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import { Router, Stack } from 'react-native-router-flux'

import SceneStack from './src/scenes/SceneStack'

const App = () => {
  return (
    <Router>
      <Stack key="root">
        {SceneStack.map(scene => scene)}
      </Stack>
    </Router>
  )
}

export default App
