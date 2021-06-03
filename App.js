
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import {AppTabNavigator} from './components/AppTabNavigator'
import {AppDrawernavigator} from './components/AppDrawerNavigator'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default  class App extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
        <AppContainer/>
      </SafeAreaProvider>
    )
  }
}
const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Drawer:{screen:AppDrawernavigator}
})

const AppContainer=createAppContainer(switchNavigator)