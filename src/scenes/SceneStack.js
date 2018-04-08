import React from 'react'
import { Stack, Scene } from 'react-native-router-flux'

import Home from './HomeScene/Home'
import Login from './LoginScene/Login'

const SceneStack = [
  <Scene key="home" component={Home} title="Home" hideNavBar />,
  <Scene key="loginScene" component={Login} title="Login to Time Tracker" />,
]

export default SceneStack
