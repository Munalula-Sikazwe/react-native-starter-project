import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import ImageDetail from "../components/ImageDetailComponent";
const ImageScreen = () => {
    const data = [
        {title:"Forest",image:"../../assets/036 images/forest.jpg"},
        {title:"Beach",image:"../../assets/036 images/beach.jpg"},
        {title:"Mountain",image:"../../assets/036 images/mountain.jpg"}
    ]
    return (
        <FlatList
        data={data}
        keyExtractor={(data)=>data.title}
        renderItem={({item})=><ImageDetail title={item.title}>

        </ImageDetail>}
        >

        </FlatList>
    );
};

export default ImageScreen;