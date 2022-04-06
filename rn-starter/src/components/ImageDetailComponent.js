import {View,Text,StyleSheet} from 'react-native';
const ImageDetail = ({title}) => {
    const data = [
        {title:"Forest"},
        {title:"Beach"},
        {title:"Mountain"}
    ]
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
};

export default ImageDetail;