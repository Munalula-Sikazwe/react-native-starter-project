import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import ImageDetail from "../components/ImageDetailComponent";
const ImageScreen = () => {
    const data = [
        {title:"Forest",image: require("../../assets/images/forest.jpg")},
        {title:"Beach",image:require("../../assets/images/beach.jpg")},
        {title:"Mountain",image:require("../../assets/images/mountain.jpg")}
    ]
    return (
        <FlatList
        data={data}
        keyExtractor={(data)=>data.title}
        renderItem={({item})=><ImageDetail title={item.title} image={item.image}/>

       }

        >

        </FlatList>
    );
};

export default ImageScreen;