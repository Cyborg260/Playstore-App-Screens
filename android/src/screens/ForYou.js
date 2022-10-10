import { View, Text, SafeAreaView, Image, ScrollView, } from 'react-native'
import React from 'react'

//import screens//
import FirstFlatlist from '../components/FirstFlatlist';
import SecondFlatlist from '../components/SecondFlatlist';
import ThirdFlatlist from '../components/ThirdFlatlist';


const ForYou = () => {

    return (
        <SafeAreaView style={{

            flex: 1,
            backgroundColor: "#fff",
            marginBottom:"20%"
        }}>
            <ScrollView
                showsVerticalScrollIndicator={false}

            >
                {/* //first View// */}
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginHorizontal: 24,
                   paddingTop:"4%"

                    // backgroundColor:"yellow"
                }}>
                    <View>
                        <Text style={{
                            fontSize: 17,
                            color: "black",
                            fontWeight: 'normal',
                        }}>
                            Low on space?
                        </Text>
                        <Text style={{
                            fontSize: 12,

                        }}>
                            Lightweight apps
                        </Text>
                    </View>
                    <View style={{
                        width: 24,
                        // backgroundColor:"red"
                    }}>
                        <Image
                            style={{
                                width: 22,
                                height: 22,
                                resizeMode: "contain"
                            }}
                            source={require("../assets/icons8-right-24.png")}
                        />
                    </View>
                </View>
                <FirstFlatlist/>


                {/* ///Second View// */}
                <View style={{
                    justifyContent: "center",
                    marginHorizontal: 24,
                    marginTop: "6%"
                }}>
                    <Text style={{
                        fontSize: 17,
                        color: "black",
                        fontWeight: 'normal',
                    }}>
                        <Text style={{
                            fontSize: 12,
                            // fontWeight:"bold"
                        }}>
                            Ads.
                        </Text>
                        Suggested for you
                    </Text>
                </View>
                <SecondFlatlist/>


                {/* //Third View// */}
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginHorizontal: 24,
                    // backgroundColor:"yellow"
                }}>
                    <View>
                        <Text style={{
                            fontSize: 17,
                            color: "black",
                            fontWeight: 'normal',
                        }}>
                            Recommended for you
                        </Text>

                    </View>
                    <View style={{
                        width: 24,
                        // backgroundColor:"red"
                    }}>
                        <Image
                            style={{
                                width: 22,
                                height: 22,
                                resizeMode: "contain"
                            }}
                            source={require("../assets/icons8-right-24.png")}
                        />
                    </View>
                </View>
                <ThirdFlatlist/>

            </ScrollView>
        </SafeAreaView>
    );

}

export default ForYou;