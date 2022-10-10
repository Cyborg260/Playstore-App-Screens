import * as React from 'react';
import { View, useWindowDimensions, Text, SafeAreaView, TouchableOpacity, TextInput, Image, StatusBar } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

//import screens// 
import Categories from './Categories';
import Childrens from './Childrens';
import ForYou from './ForYou';
import TopCharts from './TopCharts';


const renderScene = SceneMap({
  first: ForYou,
  second: TopCharts,
  third: Childrens,
  fourth: Categories,
});

export default function Apps() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'For You' },
    { key: 'second', title: 'Top charts' },
    { key: 'third', title: 'Children' },
    { key: 'fourth', title: 'Categories' },
  ]);

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: "#fff"
    }}>
      <StatusBar
barStyle="dark-content"
backgroundColor="#fff"
/>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          flexDirection: "row",
          backgroundColor: "#e9e6ed",
          borderRadius: 30,
          marginHorizontal: 20,
          marginVertical: 5,
          justifyContent: "space-between",
          alignContent: "center",
          paddingHorizontal: 15


        }}>

        <View style={{
          flexDirection: "row",
          // backgroundColor:"red",
          width: "62%",
          justifyContent: "space-between"
        }}>

          <Image
            style={{
              width: 20,
              height: 20,
              alignSelf: "center",


            }}
            source={require("../assets/icons8-search-50.png")}
          />
          <Text style={{
            fontSize: 16,
            alignSelf: "center"

          }}>
            Search for apps & games
          </Text>
        </View>
        <View style={{
          flexDirection: "row",
          width: 78,
          //  backgroundColor:"red",
          justifyContent: "space-between"
        }}>

          <View style={{
            alignSelf: "center",
          }}>
            <Image
              style={{
                alignSelf: "center",
                width: 22,
                height: 22

              }}
              source={require("../assets/icons8-audio-recording-logotype-of-a-microphone-layout-24.png")}
            />
          </View>
          <View style={{
            // backgroundColor:"yellow"
            alignSelf: "center",
            // backgroundColor:"red",
            marginVertical: 4
          }}>
            <Image
              style={{
                alignSelf: "center",
                width: 40,
                height: 40

              }}
              source={require("../assets/icons8-circled-user-male-skin-type-5-48.png")}
            />
          </View>
        </View>
      </TouchableOpacity>


      {/* //Top Tab View// */}
      <TabView

        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={props =>
          <TabBar {...props}
            style={{
              backgroundColor: '#fff',
            }}
            labelStyle={{
              color: "deeppink",
              fontWeight: "bold",

            }}
            activeColor="royalblue"
            inactiveColor="black"
            indicatorStyle={{
              backgroundColor: "royalblue",
              height: 3,
              width: "10%",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              marginHorizontal: 32
            }}
            renderLabel={({ focused, route }) => {
              return (
                <Text
                  style={{
                    color: focused ? "royalblue" : "dimgray",
                    fontSize: 14,
                  }}
                >
                  {route.title}
                </Text>
              );
            }}
          />

        }
      />
    </SafeAreaView>
  );
}