/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createAppContainer } from 'react-navigation'
import MainNavigator from './src/screens/main/route'

import React from 'react';

const AppContainer = createAppContainer(MainNavigator)

const App = () => {
  return (
    <AppContainer />
  )
}


export default App
