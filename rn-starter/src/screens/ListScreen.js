import React from 'react';
import {StyleSheet, Text,FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: "John"},
        {
            name: "Mike"
        },
        {
            name: "Sam"
        },
        {name: "Bob"}
    ]
    return (
        <FlatList
            keyExtractor={(friend)=>friend.name}
        data={friends}
        renderItem={({item})=>
            <Text style={styles.textStyle}>
                {item.name}
            </Text>
        }
        >

        </FlatList>
    );
};
const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 200
    }
})

export default ListScreen;