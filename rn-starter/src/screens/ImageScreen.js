import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import ImageDetail from "../components/ImageDetailComponent";
const ImageScreen = () => {
    const data = [
        {title:"Forest",image:"../../assets/images/forest.jpg"},
        {title:"Beach",image:"../../assets/images/beach.jpg"},
        {title:"Mountain",image:"../../assets/images/mountain.jpg"}
    ]
    return (
        <FlatList
        data={data}
        keyExtractor={(data)=>data.title}
        renderItem={({item})=><ImageDetail title={item.title} image={require(item.image)}>

        </ImageDetail>}
        >

        </FlatList>
    );
};

export default ImageScreen;