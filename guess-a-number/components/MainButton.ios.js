import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from "react-native";

import Colors from "../constants/colors";

const MainButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress = {props.onPress}>
            <View style = {styles.button}>
                <Text style= {styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 25,
        alignSelf:'center',
        marginVertical: 12,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18,
        textAlign: 'center',
        //marginVertical: 10,
    },
    // buttonContainer: {
    //     borderRadius: 25,
    //     overflow: 'hidden',
    // },
});

export default MainButton;

