import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: "John", age: 20},

        {
            name: "Mike",
            age: 24
        },
        {
            name: "Sam",
            age: 35
        },
        {
            name: "Bob",
            age: 68
        }
    ]
    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({item}) =>
                <Text style={styles.textStyle}>
                    {item.name}-{item.age}
                </Text>
            }
        />


    );
};
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen;