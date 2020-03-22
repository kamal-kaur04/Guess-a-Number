import React from 'react';
import {
        Text, 
        View, 
        Button, 
        StyleSheet, 
        TouchableOpacity, 
        Platform, 
        TouchableNativeFeedback,
         } from "react-native";

import Colors from "../constants/colors";

const MainButton = props => {
  let ButtonComponent = TouchableOpacity;

//   if(Platform.OS=== 'android' && Platform.Version >= 21)
//   {
//     ButtonComponent = TouchableNativeFeedback;
//   }

if(Platform.Version >= 21)
{
  ButtonComponent = TouchableNativeFeedback;
}
    return (
        <View style={styles.buttonContainer}>
        <ButtonComponent activeOpacity={0.6} onPress = {props.onPress}>
            <View style = {styles.button}>
                <Text style= {styles.buttonText}>{props.children}</Text>
            </View>
        </ButtonComponent>
        </View>
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
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden',
    },
});

export default MainButton;

