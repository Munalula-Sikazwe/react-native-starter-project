import {View,Text,StyleSheet,Image} from 'react-native';
import React from 'react';
const ImageDetail = ({title,image}) => {
    const imageSource = require('../../assets/images/beach.jpg');
    // console.log(image)
    console.log(imageSource)
    return (
        <View>
            {/*<Image source={imageSource}/>*/}
            <Text>{title}</Text>
        </View>
    );
};

export default ImageDetail;