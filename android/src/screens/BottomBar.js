import { View, Text,Image } from 'react-native'

//packages import//
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg from 'react-native-svg';

//screen import//
import Apps from './Apps';
import MainScreen from './MainScreen';


const Tab = createBottomTabNavigator();

function BottomBar() {
  return (
    <Tab.Navigator 
    initialRouteName='MainScreen'
    screenOptions={() => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 80,
        paddingHorizontal: 5,
        paddingTop: 0,
        backgroundColor: '#f4f4f4',
        position: 'absolute',
        borderTopWidth: 0,
      },
    })}
    >
      <Tab.Screen 
      name="Games" 
      component={MainScreen} 
      options={{
        headerShown:false,
        tabBarIcon: ({ focused }) => (

          // console.log(focused),


          <View style={{
            backgroundColor: focused ? "gainsboro" : "#f4f4f4",
            width: 60,
            height: 32,
            borderRadius: 30,
            justifyContent:"center",
            alignItems:"center",
            marginBottom:20
          }}>
            <Svg>
              <Image
                style={{
                  width: 28,
                  height: 26,
                  marginVertical: 3,
                  alignSelf: "center",
                  tintColor: focused ? "black" : "dimgray"
                }}
                source={require("../assets/icons8-game-controller-48.png")}
              />
              <Text style={{
                  color: focused ? "black" : "dimgray",
                  textAlign:"center",
                        marginVertical:4
              }}>
                Games
              </Text>
            </Svg>
          </View>
        )
      }} 
      />

      <Tab.Screen 
      name="Apps"
       component={Apps} 
       options={{
        headerShown:false,
        tabBarIcon: ({ focused }) => (

          // console.log(focused),


          <View style={{
            backgroundColor: focused ? "gainsboro" : "#f4f4f4",
            width: 60,
            height: 32,
            borderRadius: 30,
            justifyContent:"center",
            alignItems:"center",
            marginBottom:20
          }}>
            <Svg>
              <Image
                style={{
                  width: 28,
                  height: 26,
                  marginVertical: 3,
                  alignSelf: "center",
                  tintColor: focused ? "black" : "dimgray"
                }}
                source={require("../assets/icons8-app-store-25.png")}
              />
              <Text style={{
                  color: focused ? "black" : "dimgray",
                  textAlign:"center",
                        marginVertical:4
              }}>
                Apps
              </Text>
            </Svg>
          </View>
        )
      }}
       
       />
    </Tab.Navigator>
  );
}
export default BottomBar;