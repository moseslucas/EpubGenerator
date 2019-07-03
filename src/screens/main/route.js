import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { zoomIn, fromBottom } from 'react-navigation-transitions'

import Main from  'screens/main'
import ViewChapter from 'screens/main/ViewChapter/'
import AddChapter from 'screens/main/AddChapter'
import AddBook from 'screens/main/AddBook'

const MainNavigator = createStackNavigator(
  {
    Main,
    ViewChapter,
    AddChapter,
    AddBook,
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: { header: null },
    transitionConfig: ({ scenes }) => {
      const prevScene = scenes[scenes.length - 2]
      const nextScene = scenes[scenes.length - 1]
      if (
        prevScene && prevScene.route.routeName === 'Main'
        && nextScene.route.routeName === 'ViewChapter'
      ) {
        return zoomIn()
      } return fromBottom()
    }
  }
)

export default MainNavigator
