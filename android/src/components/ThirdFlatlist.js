import { View, Text, Image, FlatList, } from 'react-native'
import React from 'react'

const Data3 = [
    {
        image: require("../assets/word-logo.png"),
        title: "Adobe Acrobat\nReader:Edit PDF\n4.5*"
    },
    {
        image: require("../assets/pdf-logo.png"),
        title: "Google Go\nlighter, faster w\n4.3*"
    },
    {
        image: require("../assets/kraveMart-logo.png"),
        title: "Krave Mart-\nGrocery Delivery\n4.4*"
    },
    {
        image: require("../assets/inDriver-logo.png"),
        title: "Spotify: Play\nmusic & podcasts \n4.5*"
    },

]
const ThirdFlatlist = () => {
    const Items = ({ image, title }) => (
        <View style={{
            // justifyContent:"center",
            // alignItems:"center",
            // marginHorizontal:6,
            paddingLeft: 10,
            marginVertical: 15,

        }}>

            <View style={{
                width: 120,
                height: 120,
                // backgroundColor:"black",
                borderRadius: 20,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.20,
                shadowRadius: 1.41,
                elevation: 2,
            }}>
                <Image
                    style={{
                        width: 120,
                        height: 120,
                        resizeMode: "contain",
                        borderRadius: 20,
                        //  borderWidth:1,
                        //  borderColor:"beige",


                    }}
                    source={image}
                />
            </View>
            <Text style={{
                fontSize: 12,
                paddingTop:"8%"
                
                
            }}>
                {title}
            </Text>
        </View>
    );
    const renderItem = ({ item }) => (
        <Items
            image={item.image}
            title={item.title}
        />
    )
    return (
        <View style={{
            // backgroundColor:"red",
            paddingLeft: 10
        }}>
            <FlatList
                data={Data3}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}



export default ThirdFlatlist;