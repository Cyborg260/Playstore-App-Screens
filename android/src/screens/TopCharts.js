
import { ActivityIndicator,SafeAreaView } from 'react-native'

import React from 'react'

const TopCharts = () => {
  return (
    <SafeAreaView style={{
        justifyContent:"center",
        alignItems:"center",
        flex:1
       }}>
        <ActivityIndicator  
        size="large"
        collapsable={true}
        color="navyblue"
        />
       </SafeAreaView>
  )
}

export default TopCharts;