import React from 'react';
import {StyleSheet, Text, View} from "react-native";


const ComponentScreen = () => {
        const myName = "Munalula Sikazwe";
    return (<View><Text style={styles.firstText}> Getting Started with React Native!</Text>
        <Text style={styles.secondText}>My name is {myName}</Text>
    </View>)

}

    const styles = StyleSheet.create({
        firstText: {
            fontSize: 45
        },
            secondText:{
                fontSize:20
            }
    })


    export default ComponentScreen;