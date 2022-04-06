import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import ImageDetail from "../components/ImageDetailComponent";
const ImageScreen = () => {
    const data = [
        {title:"Forest"},
        {title:"Beach"},
        {title:"Mountain"}
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