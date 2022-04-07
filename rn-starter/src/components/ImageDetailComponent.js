import {View,Text,StyleSheet,Image} from 'react-native';
import React from 'react';
const ImageDetail = ({title,image}) => {
    return (
        <View>
            <Image source={image}/>
            <Text>{title}</Text>
        </View>
    );
};

export default ImageDetail;