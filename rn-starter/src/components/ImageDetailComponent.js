import {View,Text,StyleSheet,Image} from 'react-native';
import React from 'react';
const ImageDetail = ({title,image,score}) => {
    return (
        <View>
            <Image source={image}/>
            <Text style={styles.textStyle}>Image Title -{title}</Text>
            <Text style={styles.textStyle}> Image Score -{score}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    textStyle: {
        fontSize:30
    }
})
export default ImageDetail;