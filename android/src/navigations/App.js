import React from 'react'
//screen import//
import AppStack from './AppStack';
//packages import//
import { NavigationContainer } from '@react-navigation/native';



const App = () => {
  return (
 <NavigationContainer>
  {AppStack()}
 </NavigationContainer>
  )
}

export default App;