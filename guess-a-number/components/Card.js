import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Card = props => {
  return (
    <View style= {{...styles.card, ...props.style}}>{props.children}</View>
  );
};

const styles= StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width:0, height:2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 10,
    backgroundColor: 'white',
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  }
});

export default Card;