import React from 'react';
import {FlatList} from 'react-native';
import ImageDetail from "../components/ImageDetailComponent";

const ImageScreen = () => {
    const data = [
        {title: "Forest", image: require("../../assets/images/forest.jpg"), score: 9},
        {title: "Beach", image: require("../../assets/images/beach.jpg"), score: 7},
        {title: "Mountain", image: require("../../assets/images/mountain.jpg"), score: 4}
    ]
    return (
        <FlatList
            data={data}
            keyExtractor={(data) => data.title}
            renderItem={({item}) => <ImageDetail title={item.title} image={item.image}/>

            }

        >

        </FlatList>
    );
};

export default ImageScreen;